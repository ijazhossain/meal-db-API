const loadMeal = (event) => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
        .then(res => res.json())
        .then(data => displayMeal(data.meals, event))
}
const displayMeal = (meals, event) => {
    const eventText = event?.target?.innerText;
    console.log(eventText);
    const meals6 = meals.slice(0, 6);
    console.log(meals6);
    const mealsContainer = document.getElementById('cards-container');
    mealsContainer.textContent = '';
    if (!eventText) {
        setInnerHtml(meals6);
        /* meals6.forEach(meal => {
            const mealDiv = document.createElement('div');
            mealDiv.innerHTML = `
                <div class="card lg:card-side bg-base-100 border border-[#e7e7e7]">
                    <figure><img src="${meal.strMealThumb}" alt="Album" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">${meal.strMeal}</h2>
                        <p title="${meal.strInstructions}">${meal.strInstructions.slice(0, 100)} ...</p>
                        <div class="card-actions justify-end">
                            <a class="underline decoration-1 text-[#FFC107] font-semibold">View Details</a>
                        </div>
                    </div>
                </div>
        `;
            mealsContainer.appendChild(mealDiv);
        }) */
    } else {
        setInnerHtml(meals);
        /* meals.forEach(meal => {
            const mealDiv = document.createElement('div');
            mealDiv.innerHTML = `
                <div class="card lg:card-side bg-base-100 border border-[#e7e7e7]">
                    <figure><img src="${meal.strMealThumb}" alt="Album" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">${meal.strMeal}</h2>
                        <p title="${meal.strInstructions}">${meal.strInstructions.slice(0, 100)} ...</p>
                        <div class="card-actions justify-end">
                            <a class="underline decoration-1 text-[#FFC107] font-semibold">View Details</a>
                        </div>
                    </div>
                </div>
        `;
            mealsContainer.appendChild(mealDiv);
        }) */
    }

}
const showAll = (event) => {
    // console.log(event.target.innerText);
    loadMeal(event);
}
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
                        <a class="underline decoration-1 text-[#FFC107] font-semibold">View Details</a>
                    </div>
                </div>
            </div>
    `;
        mealsContainer.appendChild(mealDiv);
    })
}
loadMeal();