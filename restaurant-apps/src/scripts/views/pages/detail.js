import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import loader from '../templates/loader';
import { createRestoDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
    async render() {
        return `
        <div class="explore" style="min-height:500px" id="loader"></div>
        <div id="restaurants"></div>
        <div id="likeButtonContainer"></div>
      `;
    },

    async afterRender() {
        const HeroImage = document.getElementById('hero');
        HeroImage.style.display = 'none';
        const ElementLoader = document.getElementById('loader');
        const url = UrlParser.parseActiveUrlWithoutCombiner();

        const restaurantContainer = document.querySelector('#restaurants');
        ElementLoader.innerHTML = loader.ShowLoader();
        restaurantContainer.innerHTML = '';

        try {
            const data = await RestaurantSource.detailRestaurant(url.id);
            restaurantContainer.innerHTML = createRestoDetailTemplate(data);

            ElementLoader.style.display = 'none';
            LikeButtonPresenter.init({
                likeButtonContainer: document.querySelector('#likeButtonContainer'),
                favoriteRestaurants: FavoriteRestaurantIdb,
                restaurant: {
                    id: data.restaurant.id,
                    name: data.restaurant.name,
                    description: data.restaurant.description,
                    city: data.restaurant.city,
                    rating: data.restaurant.rating,
                    pictureId: data.restaurant.pictureId,
                },
            });
        } catch (err) {
            ElementLoader.innerHTML = loader.ShowOfflineLoader();
        }
    },
};

export default Detail;