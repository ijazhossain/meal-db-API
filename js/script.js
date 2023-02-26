const loadMeal = (searchText, event) => {
    console.log(searchText);
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
        .then(res => res.json())
        .then(data => displayMeal(data.meals, event))
}
const displayMeal = (meals, event) => {
    const eventText = event?.target?.innerText;
    // console.log(eventText);
    const meals6 = meals.slice(0, 6);
    const mealsContainer = document.getElementById('cards-container');
    mealsContainer.textContent = '';
    if (!eventText) {
        setInnerHtml(meals6);
        toggleDisplay('section-title', 'block')
        toggleDisplay('showAll-btn', 'block')
    } else {
        setInnerHtml(meals);
        toggleDisplay('showAll-btn', 'none')
    }
}
const showAll = (event) => {
    const searchText = document.getElementById('search-field');
    loadMeal(searchText.value, event);
}
document.getElementById('search-field').addEventListener('keyup', (e) => {
    console.log(e.key);
    const searchText = document.getElementById('search-field');
    if (e.key === 'Enter') {
        loadMeal(searchText.value);
    }
})
const setInnerHtml = array => {
    const mealsContainer = document.getElementById('cards-container');
    array.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.innerHTML = `
            <div class="card lg:card-side bg-base-100 border border-[#e7e7e7]">
                <figure><img src="${meal.strMealThumb}" alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title">${meal.strMeal}</h2>
                    <p title="${meal.strInstructions}">${meal.strInstructions.slice(0, 100)} ...</p>
                    <div class="card-actions justify-end">
                        <label onclick=" loadMealDetails('${meal.idMeal}')" for="my-modal-6" class="cursor-pointer underline decoration-1 text-[#FFC107] font-semibold">View Details</label>
                    </div>
                </div>
            </div>
    `;
        mealsContainer.appendChild(mealDiv);
    })
}
const loadMealDetails = async (id) => {
    console.log(id);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    const res = await fetch(url);
    const data = await res.json();
    singleMealDetails(data.meals[0]);
}
const singleMealDetails = async (meal) => {
    const mealContainer = document.getElementById('single-meal-container');
    mealContainer.innerHTML = `
    <h3 class="font-bold text-lg">${meal.strMeal}</h3>
                <hr>
                <img src="${meal.strMealThumb}" alt="">
                <p class="py-4"><span class="font-semibold">Category:</span> ${meal.strCategory}</p>
                <p class="py-4"><span class="font-semibold">Area:</span> ${meal.strArea}</p>
                <p class="py-4"><span class="font-semibold">Instructions:</span> ${meal.strInstructions}</p>
                <p class="py-4"><span class="font-semibold">:</span><a href="${meal.strYoutube}">${meal.strYoutube}</a></p>
                <div class="modal-action">
                    <label for="my-modal-6" class="btn bg-[#DC3545] font-semibold text-white border-0 hover:bg-red-900">Close</label>
                </div>
    `;
}
const toggleDisplay = (id, displayStyle) => {
    const elementObj = document.getElementById(id);
    elementObj.style.display = displayStyle;
}

loadMeal('');
