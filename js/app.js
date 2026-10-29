(function () {
  var dataEl = document.getElementById('listings-data');
  var searchInput = document.getElementById('search');
  var categoryChipsEl = document.getElementById('category-chips');
  var gridEl = document.getElementById('resource-grid');
  var countEl = document.getElementById('result-count');

  var listings = [];
  try {
    listings = JSON.parse(dataEl.textContent || '{}').listings || [];
  } catch (e) {
    console.error('Failed to load listings data', e);
    listings = [];
  }

  var categories = [];
  listings.forEach(function (listing) {
    if (categories.indexOf(listing.category) === -1) {
      categories.push(listing.category);
    }
  });

  var state = {
    query: '',
    category: null
  };

  function renderChips() {
    categoryChipsEl.innerHTML = '';
    var allChip = document.createElement('button');
    allChip.type = 'button';
    allChip.className = 'chip' + (state.category === null ? ' active' : '');
    allChip.textContent = 'All';
    allChip.addEventListener('click', function () {
      state.category = null;
      render();
    });
    categoryChipsEl.appendChild(allChip);

    categories.forEach(function (category) {
      var chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'chip' + (state.category === category ? ' active' : '');
      chip.textContent = category;
      chip.addEventListener('click', function () {
        state.category = state.category === category ? null : category;
        render();
      });
      categoryChipsEl.appendChild(chip);
    });
  }

  function matches(listing) {
    var q = state.query.toLowerCase();
    var haystack = (
      listing.title + ' ' +
      listing.summary + ' ' +
      listing.category + ' ' +
      (listing.tags || []).join(' ') +
      ' ' +
      listing.steps.join(' ')
    ).toLowerCase();
    var byQuery = q === '' || haystack.indexOf(q) !== -1;
    var byCategory = state.category === null || listing.category === state.category;
    return byQuery && byCategory;
  }

  function render() {
    var filtered = listings.filter(matches);

    countEl.textContent = filtered.length + ' resource' + (filtered.length !== 1 ? 's' : '') + ' found';

    gridEl.innerHTML = '';

    if (filtered.length === 0) {
      var empty = document.createElement('div');
      empty.className = 'empty';
      empty.textContent = 'No resources match your search.';
      gridEl.appendChild(empty);
      return;
    }

    filtered.forEach(function (listing) {
      var card = document.createElement('article');
      card.className = 'card';

      var cat = document.createElement('div');
      cat.className = 'card-category';
      cat.textContent = listing.category;

      var title = document.createElement('h2');
      title.textContent = listing.title;

      var summary = document.createElement('p');
      summary.textContent = listing.summary;

      var cost = document.createElement('div');
      cost.className = 'card-cost';
      cost.textContent = listing.cost;

      var steps = document.createElement('ol');
      steps.className = 'steps';
      var stepsTitle = document.createElement('span');
      stepsTitle.style.cssText = 'display:block;font-size:0.8rem;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:#6b6558;margin-bottom:0.35rem;';
      stepsTitle.textContent = 'Steps';
      listing.steps.forEach(function (step) {
        var li = document.createElement('li');
        li.textContent = step;
        steps.appendChild(li);
      });
      steps.insertBefore(stepsTitle, steps.firstChild);

      var actions = document.createElement('div');
      actions.className = 'card-actions';

      var source = document.createElement('a');
      source.className = 'btn';
      source.href = listing.sourceLink || '#';
      source.textContent = 'Source: ' + listing.source;
      source.target = '_blank';
      source.rel = 'noopener noreferrer';

      var link = document.createElement('a');
      link.className = 'btn btn-primary';
      link.href = listing.officialLink;
      link.textContent = 'Official link';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';

      actions.appendChild(source);
      actions.appendChild(link);

      card.appendChild(cat);
      card.appendChild(title);
      card.appendChild(summary);
      card.appendChild(cost);
      card.appendChild(steps);
      card.appendChild(actions);

      gridEl.appendChild(card);
    });
  }

  searchInput.addEventListener('input', function (event) {
    state.query = event.target.value;
    render();
  });

  renderChips();
  render();
})();
