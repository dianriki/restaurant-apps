import RestaurantSource from '../../data/restaurant-source';
import loader from '../templates/loader';
import { createRestoItemTemplate } from '../templates/template-creator';

const ListResto = {
    async render() {
        return `
        <section class="content">
            <div class="explore">
                <h1 class="explore__label">
                    Explore Restaurant
                </h1>
                <div id="loader"></div>
                <div id="restaurants" class="posts">
                </div>
            </div>
        </section>
      `;
    },

    async afterRender() {
        const HeroImage = document.getElementById('hero');
        HeroImage.style.display = '';
        const ElementLoader = document.getElementById('loader');
        const restaurantsContainer = document.querySelector('#restaurants');
        ElementLoader.innerHTML = loader.ShowLoader();
        restaurantsContainer.innerHTML = '';

        try {
            const restaurants = await RestaurantSource.listRestaurant();
            restaurants.forEach((restaurant) => {
                restaurantsContainer.innerHTML += createRestoItemTemplate(restaurant);
            });
            ElementLoader.style.display = 'none';
        } catch (err) {
            ElementLoader.innerHTML = loader.ShowOfflineLoader();
        }
    },
};

export default ListResto;