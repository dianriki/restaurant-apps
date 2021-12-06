import CONFIG from '../../globals/config';

const createRestoItemTemplate = (restaurant) => `
                    <article class="post-item">
                        <img class="lazyload post-item__thumbnail" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="Image for ${restaurant.name || '-'}">
                        <div class="post-item__content">
                            <div class="wrapper">   
                                <div>
                                    <a href="#" class="post-item__location">
                                        <i class="icon material-icons-outlined md-18 md-dark">location_on</i> ${restaurant.city}
                                    </a>
                                </div>            
                                <span><i class="icon material-icons-outlined md-18 md-yellow">star</i> ${restaurant.rating || '-'} / 5</span>
                            </div>
                            <h1 class="post-item__title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name || '-'}</a></h1>
                            <p class="post-item__description">${restaurant.description}
                            </p>
                            <a href="${`/#/detail/${restaurant.id}`}"><button class="headline__button">Read More</button></a>
                        </div>
                    </article>
  `;

const createRestoDetailTemplate = (data) => `
            <article class="detail">
            <div>
                <figure class="detail__figure">
                    <img class="post-item__thumbnail" src="${CONFIG.BASE_IMAGE_URL + data.restaurant.pictureId}" alt="Image for ${data.restaurant.name}">
                </figure>
                <div style="padding: 20px">
                    <h1 class="detail__title">${data.restaurant.name}</h1>
                    <div class="detail__highlight">
                            <div>
                                <span>
                                <i class="icon material-icons-outlined md-18 md-dark">location_on</i> ${data.restaurant.address}, ${data.restaurant.city}
                                </span>
                            </div>
                            <span><i class="icon material-icons-outlined md-18 md-yellow">star</i> ${data.restaurant.rating} (15 Reviews)</span>
                            <p><i class="icon material-icons-outlined md-18 md-dark">restaurant_menu</i> ${data.restaurant.categories.map((category) => `${category.name}`).join(', ')}</p>
                        </div>
                        <p class="post-item__description" style="margin-bottom: 15px;-webkit-line-clamp: none;">${data.restaurant.description}</p>
                        <div class="wrapper">
                            <div>
                            <h2 style="font-size: 14px;"> Foods Menu : </h2>
                                <ul style="margin-left: 10px;">
                                ${data.restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}

                                </ul>
                            </div>
                            <div>
                            <h2 style="font-size: 14px;"> Drinks Menu : </h2>
                                <ul style="margin-left: 10px;">
                                ${data.restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="detail__review">
                    <span style="font-size:18px"><i class="icon material-icons-outlined md-24 md-dark">reviews</i> Customers Review </span>
                    <div class="detail__review_grid">
                    ${data.restaurant.customerReviews.slice(0, 3).map((reviews) => `
                        <div style="text-align:center"><img src="images/user2.png" alt="Image for ${reviews.name} reviews" style="width:35px">                        </div>
                        <div>
                            <p style="font-weight: 600;">${reviews.name}</p>
                            <p style="font-size: 10px;font-style: italic;">${reviews.date}</p>
                            <hr>
                            <q> ${reviews.review} </q>
                        </div>`).join('')}
                    </div>
                    
                    <div class="" style="padding-top:15px;">
                        <span style="font-size:18px;"><i class="icon material-icons-outlined md-24 md-dark">rate_review</i> Leave a Review </span>
                    </div>
                </div>
               
            </article>
  `;

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
    createRestoItemTemplate,
    createRestoDetailTemplate,
    createLikeRestoButtonTemplate,
    createUnlikeRestoButtonTemplate,

};