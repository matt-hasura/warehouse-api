/*
 *  Custom JavaScript Functions
 *     Date: May 30, 2023
 *   Author: Matt Kryshak
 *  Version: 1.0
 *
 */

const basePath = 'https://warehouse.igraphql.co/api/v1';

const fetchTableData = async function() {
    const skus = await getSkus();
    
    if (skus) {
        for (const skuId of skus) {
            const assets = getAssets(skuId);
            const description = await getDescription(skuId);
            const inventory = await getInventory(skuId);
            const price = await getPrice(skuId);
            
            await Promise.all([assets, description, inventory, price]).then(function(results) {
                let row = {
                    sku: skuId,
                    quantity: 0
                };
                
                if (Array.isArray(results[0]) && results[0].length > 0) {
                    row.thumbnail = results[0][0].url;
                } else {
                    return;
                }
                
                if (Object.prototype.hasOwnProperty.call(results[1], 'name')) {
                    row.name = results[1].name;
                    row.brand = results[1].brand;
                    row.type = results[1].type;
                } else {
                    return;
                }
                
                if (Array.isArray(results[2]) && results[2].length > 0) {
                    for (const store of results[2]) {
                        row.quantity += store.quantity;
                    }
                } else {
                    return;
                }
                
                if (Object.prototype.hasOwnProperty.call(results[3], 'retail')) {
                    row.retail = results[3].retail;
                    row.sale = results[3].sale;
                } else {
                    return;
                }
                
                displayRow(row);
            });
        }
    }
};

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

const getAssets = function(skuId) {
    return new Promise(function(resolve) {
        $.get(`${basePath}/product/${skuId}/assets`).done(function(data) {
            resolve(data);
        }).fail(function(error) {
            resolve();
        });
    });
};

const getDescription = function(skuId) {
    return new Promise(function(resolve) {
        $.get(`${basePath}/product/${skuId}/description`).done(function(data) {
            resolve(data);
        }).fail(function(error) {
            resolve();
        });
    });
};

const getInventory = function(skuId) {
    return new Promise(function(resolve) {
        $.get(`${basePath}/product/${skuId}/inventory`).done(function(data) {
            resolve(data);
        }).fail(function(error) {
            resolve();
        });
    });
};

const getPrice = function(skuId) {
    return new Promise(function(resolve) {
        $.get(`${basePath}/product/${skuId}/price`).done(function(data) {
            resolve(data);
        }).fail(function(error) {
            resolve();
        });
    });
};

const getSkus = function() {
    return new Promise(function(resolve) {
        $.get(`${basePath}/product/sku`).done(function(data) {
            resolve(data);
        }).fail(function(error) {
            resolve();
        });
    });
};

$(document).ready(function() {
    fetchTableData();
})