/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
Feature('Liking Restaurants');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
    I.seeElement('#query');
    I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});

const assert = require('assert');

Scenario('liking one restaurant', async ({ I }) => {
    I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

    I.amOnPage('/');
    I.seeElement('.post-item__title a');

    const firstRestaurant = locate('.post-item__title a').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.post-item');

    const likedRestaurantTitle = await I.grabTextFrom('.post-item__title');

    assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unlike restaurant', async ({ I }) => {
    I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

    I.amOnPage('/');

    I.seeElement('.post-item__title a');

    I.click(locate('.post-item__title a').first());

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.post-item__title a');
    I.click(locate('.post-item__title a').first());

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('searching restaurants', async ({ I }) => {
    I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

    I.amOnPage('/');

    I.seeElement('.post-item__title a');

    const titles = [];

    for (let i = 1; i <= 3; i++) {
        I.click(locate('.post-item__title a').at(i));
        I.seeElement('#likeButton');
        I.click('#likeButton');
        titles.push(await I.grabTextFrom('.detail__title'));
        I.amOnPage('/');
    }

    I.amOnPage('/#/favorite');
    I.seeElement('#query');
});
