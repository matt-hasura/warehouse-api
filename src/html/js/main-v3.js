/*
 *  Custom JavaScript Functions
 *     Date: May 31, 2023
 *   Author: Matt Kryshak
 *  Version: 1.0
 *
 */

const endpoint = 'https://warehouse-snowflake.hasura.app/v1/graphql';
const query = `
  query FetchTableData {
    skus {
      sku_id
      assets(where: {tag: {_eq: "thumbnail"}}) {
        url
      }
      description {
        name
        brand
        type
      }
      price {
        retail
        sale
      }
      inventory {
        quantity
      }
    }
  }
`;

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
    const res = await postData(endpoint, JSON.stringify({ query: query }));
    
    if (Object.prototype.hasOwnProperty.call(res, 'data')) {
        for (const sku of res.data.skus) {
            let row = {
                sku: sku.sku_id,
                quantity: 0
            };
            
            try {
                row.thumbnail = sku.assets[0].url;
                row.name = sku.description.name;
                row.brand = sku.description.brand;
                row.type = sku.description.type;
                row.retail = sku.price.retail;
                row.sale = sku.price.sale;
                
                for (const store of sku.inventory) {
                    row.quantity += store.quantity;
                }
                
                displayRow(row);
            } catch(error) {
                
            }
        }
    }
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