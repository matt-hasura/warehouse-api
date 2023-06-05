/*
 *  Custom JavaScript Functions
 *     Date: May 31, 2023
 *   Author: Matt Kryshak
 *  Version: 1.0
 *
 */

const endpoint = 'https://warehouse-rest.hasura.app/v1/graphql';

const displayRow = function(row) {
    const html = '<tr>\n' +
        `  <td class="column0">${row.sku}</td>\n` +
        `  <td class="column1">${row.name}</td>\n` +
        `  <td class="column2">${row.brand}</td>\n` +
        `  <td class="column3">${row.type}</td>\n` +
        `  <td class="column4">${row.quantity}</td>\n` +
        `  <td class="column5">${row.retail}</td>\n` +
        `  <td class="column6">${row.sale}</td>\n` +
        `  <td class="column7"><img src="${row.thumbnail}" height="40"></td>\n` +
        '<tr>';
    
    $("#table tbody").append(html);
    $("#table tbody tr:last").remove();
};

const fetchTableData = async function() {
    const skus = await postData(endpoint, JSON.stringify({ query: getSkus() }));
    
    if (Object.prototype.hasOwnProperty.call(skus, 'data')) {
        for (const skuId of skus.data.getSkus) {            
            const assets = postData(endpoint, JSON.stringify({ query: getAssets(skuId) }));
            const description = postData(endpoint, JSON.stringify({ query: getDescription(skuId) }));
            const inventory = postData(endpoint, JSON.stringify({ query: getInventory(skuId) }));
            const price = postData(endpoint, JSON.stringify({ query: getPrice(skuId) }));
            
            await Promise.all([assets, description, inventory, price]).then(function(results) {
                let row = {
                    sku: skuId,
                    quantity: 0
                };
                
                if (Object.prototype.hasOwnProperty.call(results[0], 'data')) {
                    row.thumbnail = results[0].data.getAssets[0].url;
                } else {
                    return;
                }
                
                if (Object.prototype.hasOwnProperty.call(results[1], 'data')) {
                    row.name = results[1].data.getDescription.name;
                    row.brand = results[1].data.getDescription.brand;
                    row.type = results[1].data.getDescription.type;
                } else {
                    return;
                }
                
                if (Object.prototype.hasOwnProperty.call(results[2], 'data')) {
                    for (const store of results[2].data.getInventory) {
                        row.quantity += store.quantity;
                    }
                } else {
                    return;
                }
                
                if (Object.prototype.hasOwnProperty.call(results[3], 'data')) {
                    row.retail = results[3].data.getPrice.retail;
                    row.sale = results[3].data.getPrice.sale;
                } else {
                    return;
                }
                
                displayRow(row);
            });
        }
    }
};

const getAssets = function(skuId) {
    return `
        query getAssets {
          getAssets(sku: ${skuId}, tag: "thumbnail") {
            url
          }
        }
    `;
};

const getDescription = function(skuId) {
    return `
        query getDescription {
          getDescription(sku: ${skuId}) {
            name
            brand
            type
          }
        }
    `;
};

const getInventory = function(skuId) {
    return `
        query getInventory {
          getInventory(sku: ${skuId}) {
            quantity
          }
        }
    `;
};

const getPrice = function(skuId) {
    return `
        query getPrice {
          getPrice(sku: ${skuId}) {
            retail
            sale
          }
        }
    `;
};

const getSkus = function() {
    return `
        query getSkus {
          getSkus
        }
    `;
};

const postData = function(url, data) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            url: url,
            method: 'POST',
            data: data,
            contentType: 'application/json'
        }).done(function(data) {
            resolve(data);
        }).fail(function(error) {
            reject(error);
        });
    });
};

$(document).ready(function() {
    fetchTableData();
})