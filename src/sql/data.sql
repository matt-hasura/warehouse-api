INSERT INTO
  WAREHOUSE.PUBLIC."skus" ("sku")
VALUES
  (11249),
  (11251),
  (28780),
  (28781),
  (28782),
  (65896),
  (81002),
  (84992),
  (85838),
  (89531),
  (91158),
  (95740);

INSERT INTO
  "assets" ("sku", "url", "tag")
VALUES
  (11249, '/images/assets/11249.png', 'thumbnail'),
  (11251, '/images/assets/11251.png', 'thumbnail'),
  (28780, '/images/assets/28780.png', 'thumbnail'),
  (28781, '/images/assets/28781.png', 'thumbnail'),
  (28782, '/images/assets/28782.png', 'thumbnail'),
  (65896, '/images/assets/65896.png', 'thumbnail'),
  (81002, '/images/assets/81002.png', 'thumbnail'),
  (84992, '/images/assets/84992.png', 'thumbnail'),
  (85838, '/images/assets/85838.png', 'thumbnail'),
  (89531, '/images/assets/89531.png', 'thumbnail'),
  (91158, '/images/assets/91158.png', 'thumbnail'),
  (95740, '/images/assets/95740.png', 'thumbnail');

INSERT INTO
  "descriptions" ("sku", "name", "brand", "type", "country", "region", "style", "size", "units", "summary")
VALUES
  (11249, 'Barefoot Cellars Cabernet (1.5 L)', 'Barefoot Cellars', 'Cabernet Sauvignon', 'USA', 'California', 'Other', '1.5', 'L', 'Fresh and easy, the Barefoot Cabernet drinks like a fun red; no time needed for this puppy to satisfy your palate; smooth in the finish.'),
  (11251, 'Barefoot Chardonnay (1.5 L)', 'Barefoot Cellars', 'Chardonnay', 'USA', 'California', 'Other', '1.5', 'L', 'A great Chardonnay to have in the fridge, the versatile Barefoot Chardonnay is so well made for its category; ripe, soft, and easy-to-drink.'),
  (28780, 'Barefoot Merlot (1.5 L)', 'Barefoot Cellars', 'Merlot', 'USA', 'California', 'Other', '1.5', 'L', 'A crowd-pleaser, the soft and easy-drinking Barefoot Merlot is a red wine that will fit everyone\'s palate; a nicely focused effort.'),
  (28781, 'Barefoot Chardonnay (750 mL)', 'Barefoot Cellars', 'Chardonnay', 'USA', 'California', 'Other', '750', 'mL', 'GOLD MEDAL, BEST OF CLASS, 2011 SAN FRANCISCO CHRONICLE WINE COMP. Simply stunning, especially for the money! The Barefoot Chardonnay has it all; fresh core fruit flavors and superb structure.'),
  (28782, 'Barefoot Cabernet (750 mL)', 'Barefoot Cellars', 'Cabernet Sauvignon', 'USA', 'California', 'Other', '750', 'mL', 'Fresh and easy, the Barefoot Cabernet drinks like a fun red; no time need for this puppy to satisfy your palate; smooth in the finish.'),
  (65896, 'Barefoot Bubbly Brut Cuvee (750 mL)', 'Barefoot Cellars', 'Champagne/Sparkling', 'USA', 'California', 'Brut', '750', 'mL', 'Barefoot Bubbly Brut Cuvee Champagne offers aromas and flavors of crisp green apple and freshly picked peach. Pear and lime flavors linger following the crisp, dry finish.'),
  (81002, 'Barefoot Bubbly Extra Dry (750 mL)', 'Barefoot Cellars', 'Champagne/Sparkling', 'USA', 'California', 'Extra Dry', '750', 'mL', 'Barefoot Bubbly Extra Dry Champagne offers aromas of ripe apple complemented by hints of citrus. Toasty flavors complement the creamy, lingering finish.'),
  (84992, 'Barefoot Cellars Moscato (750 mL', 'Barefoot Cellars', 'Fortified/Dessert', 'USA', 'California', 'Dessert Wine', '750', 'mL', 'A standout, aromatic white, the juicy and aromatic Barefoot Moscato opens up with expressive flowers and core fruit flavors; medium sweet finish.'),
  (85838, 'Barefoot Pinot Grigio (1.5 L)', 'Barefoot Cellars', 'Pinot Grigio/Pinot Gris', 'USA', 'California', 'Other', '1.5', 'L', 'Want to make the Italian wine industry jealous? Serve them the Barefoot Pinot Grigio; crisp, fresh, and frisky; a really fine example of the grape.'),
  (89531, 'Barefoot Cellars Riesling (750 mL)', 'Barefoot Cellars', 'Riesling', 'USA', 'California', 'Other', '750', 'mL', 'The Barefoot Riesling is a lovely wine with tasty aromas and flavors of refreshing tropical citrus fruit layered with delicious green apple and luscious peach; slightly sweet finish.'),
  (91158, 'Barefoot Bubbly Moscato Spumante (750 mL)', 'Barefoot Cellars', 'Champagne/Sparkling', 'USA', 'California', 'Other', '750', 'mL', 'Barefoot Bubbly Moscato Spumante is sweet citrus in the bottle! This bubbly has aromas and flavors of jasmine & juicy tangerine. Enjoy the Mandarin orange flavors and the sweet lime finish!'),
  (95740, 'Barefoot Bubbly Pink Moscato (750 mL)', 'Barefoot Cellars', 'Champagne/Sparkling', 'USA', 'California', 'Other', '750', 'mL', 'Fresh, sweet, smooth, and delicious, the "Pink" is new and a must try!');

INSERT INTO
  "inventories" ("store_id", "sku", "quantity")
VALUES
  (6602, 11249, 1),
  (6602, 11251, 5),
  (6602, 28780, 3),
  (6602, 28781, 3),
  (6602, 28782, 9),
  (6602, 65896, 11),
  (6602, 81002, 17),
  (6602, 84992, 1),
  (6602, 85838, 3),
  (6602, 89531, 15),
  (6602, 91158, 2),
  (6602, 95740, 18);

INSERT INTO
  "prices" ("sku", "retail", "sale")
VALUES
  (11249, 11.99, 9.99),
  (11251, 11.99, 10.49),
  (28780, 11.99, 10.49),
  (28781, 9.99, 8.99),
  (28782, 10.99, 9.49),
  (65896, 13.99, 12.49),
  (81002, 13.99, 12.49),
  (84992, 10.99, 9.49),
  (85838, 11.99, 10.49),
  (89531, 8.99, NULL),
  (91158, 13.99, 12.49),
  (95740, 13.99, 12.99);

INSERT INTO
  "stores" ("store_id", "name", "address", "city", "state", "zip_code", "latitude", "longitude")
VALUES
  (2803, 'Santa Clara', '3149 Stevens Creek Boulevard', 'San Jose', 'CA', 95117, 37.323886, -121.952181),
  (3027, 'San Jose - Willow Glen', '1133 Lincoln Avenue', 'San Jose', 'CA', 95125, 37.307687, -121.900973),
  (3028, 'San Jose - Blossom Hill', '871 Blossom Hill Road', 'San Jose', 'CA', 95123, 37.251831, -121.857595),
  (3033, 'San Jose - Westgate', '5205 Prospect Road', 'San Jose', 'CA', 95129, 37.292896, -121.99263),
  (6602, 'Los Gatos', '636 Blossom Hill Road', 'Los Gatos', 'CA', 95032, 37.2354774, -121.9640198);

INSERT INTO
  "ratings" ("sku", "score", "count")
VALUES
  (11249, 3.0, 2),
  (11251, NULL, NULL),
  (28780, NULL, NULL),
  (28781, 5.0, 1),
  (28782, NULL, NULL),
  (65896, 3.0, 1),
  (81002, NULL, NULL),
  (84992, 5.0, 1),
  (85838, 5.0, 1),
  (89531, 4.5, 4),
  (91158, 4.3, 3),
  (95740, 5.0, 1);

INSERT INTO
  "reviews" ("sku", "user_id", "author", "summary", "score")
VALUES
  (84992, NULL, 'Guest', 'Good, reasonably priced.', 5.0);
