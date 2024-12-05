import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', 
})

export class MockDataService {
  
    private furnitureData = {

        seatings: {
          chairs: [
            {
                id: 1,
                name: "Lether Chair",
                description: "A timeless leather chair, perfect for any living room or office. Its elegant design and comfortable cushioning make it a luxurious addition to any space.",
                price: 229.99,
                tags: ["leather", "chair", "stylish", "seating"],
                image: "/assets/images/lether_chair.jpg",
                threeDModel: "/path/to/lether_chair_model.glb",
                quantity: 12
            },
            {
                id: 2,
                name: "Office Chair",
                description: "A modern office chair designed for ergonomic comfort and style. Its adjustable features and breathable mesh back provide all-day support.",
                price: 179.99,
                tags: ["office", "chair", "ergonomic", "seating"],
                image: "/assets/images/office_chair.jpg",
                threeDModel: "/path/to/office_chair_model.glb",
                quantity: 15
            },
            {
                id: 3,
                name: "Miro Office Chair",
                description: "A contemporary office chair with a sleek design and vibrant color options. Its swivel base and adjustable height make it perfect for any workspace.",
                price: 249.99,
                tags: ["modern", "chair", "office", "seating"],
                image: "/assets/images/miro_office_chair.jpg",
                threeDModel: "/path/to/miro_office_chair_model.glb",
                quantity: 8
            },
            {
                id: 4,
                name: "Bloom Office Chair",
                description: "A stylish and comfortable office chair with a unique floral pattern. Its padded seat and back provide excellent support for long hours of work.",
                price: 199.99,
                tags: ["modern", "chair", "office", "seating"],
                image: "/assets/images/bloom_office_chair.jpg",
                threeDModel: "/path/to/bloom_office_chair_model.glb",
                quantity: 10
            },
            {
                id: 5,
                name: "Porto Chair",
                description: "A versatile chair that can be used as a dining chair or accent piece. Its minimalist design and sturdy construction make it a stylish and practical choice.",
                price: 149.99,
                tags: ["modern", "chair", "dining", "seating"],
                image: "/assets/images/porto_chair.jpg",
                threeDModel: "/path/to/porto_chair_model.glb",
                quantity: 18
            },
            {
                id: 6,
                name: "Atrium Office Chair",
                description: "A high-back executive chair designed for ultimate comfort and support. Its plush cushioning and adjustable features make it perfect for long hours of work.",
                price: 329.99,
                tags: ["modern", "chair", "office", "seating"],
                image: "/assets/images/atrium_office_chair.jpg",
                threeDModel: "/path/to/atrium_office_chair_model.glb",
                quantity: 6
            },
            {
                id: 7,
                name: "Lawn Chair",
                description: "A comfortable and stylish outdoor chair, perfect for relaxing in the garden or by the pool. Its weather-resistant materials and sleek design make it a durable and elegant choice.",
                price: 129.99,
                tags: ["modern", "chair", "outdoor", "seating"],
                image: "/assets/images/lawn_chair.jpg",
                threeDModel: "/path/to/lawn_chair_model.glb",
                quantity: 20
            },
            {
                id: 8,
                name: "Bontempi Mood Chair",
                description: "A modern and stylish chair with a unique curved design. Its comfortable cushioning and stylish appearance make it a perfect addition to any contemporary living space.",
                price: 299.99,
                tags: ["modern", "chair", "stylish", "seating"],
                image: "/assets/images/bontempi_mood_chair.jpg",
                threeDModel: "/path/to/bontempi_mood_chair_model.glb",
                quantity: 9
            },
            {
                id: 9,
                name: "Calibre Dining Chair",
                description: "A classic dining chair with a modern twist. Its elegant design and comfortable upholstery make it a perfect choice for any dining room.",
                price: 169.99,
                tags: ["modern", "chair", "dining", "seating"],
                image: "/assets/images/calibre_dining_chair.jpg",
                threeDModel: "/path/to/calibre_dining_chair_model.glb",
                quantity: 14
            },
            {
                id: 10,
                name: "Visu Chair",
                description: "A versatile chair that can be used as a dining chair, accent chair, or even a desk chair. Its sleek design and comfortable cushioning make it a perfect choice for any space.",
                price: 199.99,
                tags: ["modern", "chair", "versatile", "seating"],
                image: "/assets/images/visu_chair.jpg",
                threeDModel: "/path/to/visu_chair_model.glb",
                quantity: 11
            }
        ],
        sofas: [
          {
              id: 11,
              name: "Fermoy Sofa",
              description: "A cozy and stylish sofa with plush cushions and a modern design.",
              price: 399.99,
              tags: ["modern", "sofa", "comfortable", "seating"],
              image: "/assets/images/fermoy_sofa.jpg",
              threeDModel: "/path/to/fermoy_sofa_model.glb",
              quantity: 12
          },
          {
              id: 12,
              name: "Grade Sofa",
              description: "A minimalist sofa with clean lines and neutral colors, perfect for a contemporary living room.",
              price: 299.99,
              tags: ["modern", "sofa", "minimalist", "seating"],
              image: "/assets/images/grade_sofa.jpg",
              threeDModel: "/path/to/grade_sofa_model.glb",
              quantity: 10
          },
          {
              id: 13,
              name: "Likestone Sofa",
              description: "A luxurious sofa with soft velvet upholstery and a timeless design.",
              price: 499.99,
              tags: ["luxury", "sofa", "velvet", "seating"],
              image: "/assets/images/likestone_sofa.jpg",
              threeDModel: "/path/to/likestone_sofa_model.glb",
              quantity: 8
          },
          {
              id: 14,
              name: "Moonlight Sofa",
              description: "A unique and stylish sofa with a curved design and plush cushioning.",
              price: 349.99,
              tags: ["modern", "sofa", "unique", "seating"],
              image: "/assets/images/moonlight_sofa.jpg",
              threeDModel: "/path/to/moonlight_sofa_model.glb",
              quantity: 15
          },
          {
              id: 15,
              name: "Squary Sofa",
              description: "A versatile sofa with modular components that can be arranged in various configurations.",
              price: 429.99,
              tags: ["modern", "sofa", "modular", "seating"],
              image: "/assets/images/squary_sofa.jpg",
              threeDModel: "/path/to/squary_sofa_model.glb",
              quantity: 10
          },
          {
              id: 16,
              name: "Taipei Sofa",
              description: "A stylish and comfortable sofa with a mid-century modern design.",
              price: 329.99,
              tags: ["modern", "sofa", "mid-century", "seating"],
              image: "/assets/images/taipei_sofa.jpg",
              threeDModel: "/path/to/taipei_sofa_model.glb",
              quantity: 12
          },
          {
              id: 17,
              name: "Takt C4 Sofa",
              description: "A sleek and modern sofa with a minimalist design and comfortable seating.",
              price: 299.99,
              tags: ["modern", "sofa", "minimalist", "seating"],
              image: "/assets/images/Takt_C4_sofa.jpg",
              threeDModel: "/path/to/Takt_C4_sofa_model.glb",
              quantity: 14
          }
      ],
      armchairs: [
        {
            id: 18,
            name: "Alma Outdoor Armchair",
            description: "A stylish and durable outdoor armchair, perfect for relaxing on your patio or balcony.",
            price: 249.99,
            tags: ["outdoor", "armchair", "durable", "seating"],
            image: "/assets/images/alma_outdoor_armchair.jpg",
            threeDModel: "/path/to/alma_outdoor_armchair_model.glb",
            quantity: 15
        },
        {
            id: 19,
            name: "Bilbao Armchair",
            description: "A modern and comfortable armchair with a unique curved design.",
            price: 299.99,
            tags: ["modern", "armchair", "comfortable", "seating"],
            image: "/assets/images/bilbao_armchair.jpg",
            threeDModel: "/path/to/bilbao_armchair_model.glb",
            quantity: 10
        },
        {
            id: 20,
            name: "Classic Armchair",
            description: "A timeless armchair with a classic design and comfortable upholstery.",
            price: 199.99,
            tags: ["classic", "armchair", "comfortable", "seating"],
            image: "/assets/images/classic_armchair.jpg",
            threeDModel: "/path/to/classic_armchair_model.glb",
            quantity: 12
        },
        {
            id: 21,
            name: "Daisy Armchair",
            description: "A playful and colorful armchair with a unique floral pattern.",
            price: 229.99,
            tags: ["modern", "armchair", "colorful", "seating"],
            image: "/assets/images/daisy_armchair.jpg",
            threeDModel: "/path/to/daisy_armchair_model.glb",
            quantity: 8
        },
        {
            id: 22,
            name: "Gamma Armchair",
            description: "A minimalist armchair with a sleek design and comfortable seating.",
            price: 179.99,
            tags: ["modern", "armchair", "minimalist", "seating"],
            image: "/assets/images/gamma_armchair.jpg",
            threeDModel: "/path/to/gamma_armchair_model.glb",
            quantity: 18
        },
        {
            id: 23,
            name: "Leather Armchair",
            description: "A luxurious armchair with premium leather upholstery and a timeless design.",
            price: 399.99,
            tags: ["luxury", "armchair", "leather", "seating"],
            image: "/assets/images/leather_armchair.jpg",
            threeDModel: "/path/to/leather_armchair_model.glb",
            quantity: 6
        },
        {
            id: 24,
            name: "Modern Armchair",
            description: "A stylish and contemporary armchair with a unique silhouette.",
            price: 279.99,
            tags: ["modern", "armchair", "stylish", "seating"],
            image: "/assets/images/modern_armchair.jpg",
            threeDModel: "/path/to/modern_armchair_model.glb",
            quantity: 14
        },
        {
            id: 25,
            name: "Officina Armchair",
            description: "A comfortable and versatile armchair, perfect for any room in your home.",
            price: 229.99,
            tags: ["modern", "armchair", "versatile", "seating"],
            image: "/assets/images/officina_armchair.jpg",
            threeDModel: "/path/to/officina_armchair_model.glb",
            quantity: 11
        },
        {
            id: 26,
            name: "Rotatus Armchair",
            description: "A unique and stylish armchair with a rotating base for added functionality.",
            price: 329.99,
            tags: ["modern", "armchair", "unique", "seating"],
            image: "/assets/images/rotatus_armchair.jpg",
            threeDModel: "/path/to/rotatus_armchair_model.glb",
            quantity: 9
        },
        {
            id: 27,
            name: "Siena Armchair",
            description: "A classic armchair with a modern twist, perfect for a traditional or contemporary setting.",
            price: 249.99,
            tags: ["modern", "armchair", "classic", "seating"],
            image: "/assets/images/siena_armchair.jpg",
            threeDModel: "/path/to/siena_armchair_model.glb",
            quantity: 16
        }
    ]
        },

        tables: {
          bedsideTables: [
            {
                id: 28,
                name: "Arrondi Bedside Table",
                description: "A stylish and functional bedside table with a rounded design.",
                price: 99.99,
                tags: ["modern", "bedside table", "rounded", "storage"],
                image: "/assets/images/arrondi_bedSide_table.jpg",
                threeDModel: "/path/to/arrondi_bedSide_table_model.glb",
                quantity: 15
            },
            {
                id: 29,
                name: "Atik Bedside Table",
                description: "A minimalist bedside table with a sleek design and ample storage space.",
                price: 89.99,
                tags: ["modern", "bedside table", "minimalist", "storage"],
                image: "/assets/images/atik_bedSide_table.jpg",
                threeDModel: "/path/to/atik_bedSide_table_model.glb",
                quantity: 10
            },
            {
                id: 30,
                name: "Brown Wood Bedside Table",
                description: "A classic bedside table with a warm wood finish and two drawers.",
                price: 129.99,
                tags: ["classic", "bedside table", "wood", "storage"],
                image: "/assets/images/brownWood_bedSide_table.jpg",
                threeDModel: "/path/to/brownWood_bedSide_table_model.glb",
                quantity: 12
            },
            {
                id: 31,
                name: "Drum Bedside Table",
                description: "A unique and stylish bedside table with a drum-shaped design.",
                price: 149.99,
                tags: ["modern", "bedside table", "unique", "storage"],
                image: "/assets/images/drum_bedSide_table.jpg",
                threeDModel: "/path/to/drum_bedSide_table_model.glb",
                quantity: 8
            },
            {
                id: 32,
                name: "Escaler Bedside Table",
                description: "A versatile bedside table with multiple shelves and drawers.",
                price: 119.99,
                tags: ["modern", "bedside table", "versatile", "storage"],
                image: "/assets/images/escaler_bedSide_table.jpg",
                threeDModel: "/path/to/escaler_bedSide_table_model.glb",
                quantity: 18
            },
            {
                id: 33,
                name: "Leather and Wood Bedside Table",
                description: "A luxurious bedside table with a leather top and wooden base.",
                price: 199.99,
                tags: ["luxury", "bedside table", "leather", "wood", "storage"],
                image: "/assets/images/letherAndWood_bedSide_table.jpg",
                threeDModel: "/path/to/letherAndWood_bedSide_table_model.glb",
                quantity: 6
            },
            {
                id: 34,
                name: "Minotti Bedside Table",
                description: "A stylish and modern bedside table with a sleek design.",
                price: 179.99,
                tags: ["modern", "bedside table", "stylish", "storage"],
                image: "/assets/images/minotti_bedSide_table.jpg",
                threeDModel: "/path/to/minotti_bedSide_table_model.glb",
                quantity: 14
            },
            {
                id: 35,
                name: "Modern Bedside Table",
                description: "A contemporary bedside table with clean lines and ample storage space.",
                price: 129.99,
                tags: ["modern", "bedside table", "contemporary", "storage"],
                image: "/assets/images/modern_bedSide_table.jpg",
                threeDModel: "/path/to/modern_bedSide_table_model.glb",
                quantity: 11
            },
            {
                id: 36,
                name: "Modern with Drawers Bedside Table",
                description: "A functional bedside table with drawers for convenient storage.",
                price: 149.99,
                tags: ["modern", "bedside table", "drawers", "storage"],
                image: "/assets/images/modernWthDrawers_bedSide_table.jpg",
                threeDModel: "/path/to/modernWthDrawers_bedSide_table_model.glb",
                quantity: 9
            },
            {
                id: 37,
                name: "Oak Bedside Table",
                description: "A sturdy and durable bedside table made from solid oak wood.",
                price: 169.99,
                tags: ["classic", "bedside table", "oak", "storage"],
                image: "/assets/images/oak_bedSide_table.jpg",
                threeDModel: "/path/to/oak_bedSide_table_model.glb",
                quantity: 16
            },
            {
                id: 38,
                name: "Pinus Bedside Table",
                description: "A rustic bedside table with a natural pine wood finish.",
                price: 119.99,
                tags: ["rustic", "bedside table", "pine", "storage"],
                image: "/assets/images/pinus_bedSide_table.jpg",
                threeDModel: "/path/to/pinus_bedSide_table_model.glb",
                quantity: 12
            },
            {
                id: 39,
                name: "White Bedside Table",
                description: "A sleek and modern bedside table with a clean white finish.",
                price: 99.99,
                tags: ["modern", "bedside table", "white", "storage"],
                image: "/assets/images/white_bedSide_table.jpg",
                threeDModel: "/path/to/white_bedSide_table_model.glb",
                quantity: 10
            },
            {
                id: 40,
                name: "Wooden Bedside Table",
                description: "A classic bedside table with a timeless wooden design.",
                price: 129.99,
                tags: ["classic", "bedside table", "wood", "storage"],
                image: "/assets/images/wooden_bedSide_table.jpg",
                threeDModel: "/path/to/wooden_bedSide_table_model.glb",
                quantity: 14
            }
        ],
        coffeeTables: [
          {
              id: 41,
              name: "Avilum Coffee Table",
              description: "A modern and stylish coffee table with a unique shape.",
              price: 199.99,
              tags: ["modern", "coffee table", "unique", "living room"],
              image: "/assets/images/avilum_coffee_table.jpg",
              threeDModel: "/path/to/avilum_coffee_table_model.glb",
              quantity: 12
          },
          {
              id: 42,
              name: "Bend Coffee Table",
              description: "A minimalist coffee table with a sleek design and clean lines.",
              price: 149.99,
              tags: ["modern", "coffee table", "minimalist", "living room"],
              image: "/assets/images/bend_coffee_table.jpg",
              threeDModel: "/path/to/bend_coffee_table_model.glb",
              quantity: 10
          },
          {
              id: 43,
              name: "FarmHouse Coffee Table",
              description: "A rustic coffee table with a reclaimed wood top and metal base.",
              price: 229.99,
              tags: ["rustic", "coffee table", "wood", "metal", "living room"],
              image: "/assets/images/farmHouse_coffee_table.jpg",
              threeDModel: "/path/to/farmHouse_coffee_table_model.glb",
              quantity: 15
          },
          {
              id: 44,
              name: "Glass Coffee Table",
              description: "A sleek and modern coffee table with a glass top and metal base.",
              price: 179.99,
              tags: ["modern", "coffee table", "glass", "metal", "living room"],
              image: "/assets/images/glass_coffee_table.jpg",
              threeDModel: "/path/to/glass_coffee_table_model.glb",
              quantity: 8
          },
          {
              id: 45,
              name: "Infinito Coffee Table",
              description: "A unique and stylish coffee table with an infinity-shaped design.",
              price: 249.99,
              tags: ["modern", "coffee table", "unique", "living room"],
              image: "/assets/images/infinito_coffee_table.jpg",
              threeDModel: "/path/to/infinito_coffee_table_model.glb",
              quantity: 18
          },
          {
              id: 46,
              name: "Marble Coffee Table",
              description: "A luxurious coffee table with a marble top and gold accents.",
              price: 399.99,
              tags: ["luxury", "coffee table", "marble", "gold", "living room"],
              image: "/assets/images/marble_coffee_table.jpg",
              threeDModel: "/path/to/marble_coffee_table_model.glb",
              quantity: 6
          },
          {
              id: 47,
              name: "Modern Coffee Table",
              description: "A stylish and modern coffee table with a minimalist design.",
              price: 199.99,
              tags: ["modern", "coffee table", "minimalist", "living room"],
              image: "/assets/images/moden_coffee_table.jpg",
              threeDModel: "/path/to/moden_coffee_table_model.glb",
              quantity: 14
          },
          {
              id: 48,
              name: "Oak Classic Coffee Table",
              description: "A timeless coffee table with a classic design and solid oak wood.",
              price: 229.99,
              tags: ["classic", "coffee table", "oak", "wood", "living room"],
              image: "/assets/images/oak_classic_coffee_table.jpg",
              threeDModel: "/path/to/oak_classic_coffee_table_model.glb",
              quantity: 11
          },
          {
              id: 49,
              name: "Oak Coffee Table",
              description: "A versatile coffee table with multiple storage options.",
              price: 249.99,
              tags: ["modern", "coffee table", "storage", "living room"],
              image: "/assets/images/oak_coffee_table.jpg",
              threeDModel: "/path/to/oak_coffee_table_model.glb",
              quantity: 9
          },
          {
              id: 50,
              name: "Surf Coffee Table",
              description: "A unique and stylish coffee table with a wave-like design.",
              price: 299.99,
              tags: ["modern", "coffee table", "unique", "living room"],
              image: "/assets/images/surf_coffee_table.jpg",
              threeDModel: "/path/to/surf_coffee_table_model.glb",
              quantity: 16
          },
          {
              id: 51,
              name: "Wals Coffee Table",
              description: "A minimalist coffee table with a sleek and modern design.",
              price: 169.99,
              tags: ["modern", "coffee table", "minimalist", "living room"],
              image: "/assets/images/wals_coffee_table.jpg",
              threeDModel: "/path/to/wals_coffee_table_model.glb",
              quantity: 12
          }
      ],
      diningTables: [
        {
            id: 52,
            name: "Antigua Dining Table",
            description: "A rustic dining table with a reclaimed wood top and metal base.",
            price: 399.99,
            tags: ["rustic", "dining table", "wood", "metal", "dining room"],
            image: "/assets/images/antigua_dining_table.jpg",
            threeDModel: "/path/to/antigua_dining_table_model.glb",
            quantity: 12
        },
        {
            id: 53,
            name: "Ares Dining Table",
            description: "A modern and stylish dining table with a unique shape.",
            price: 499.99,
            tags: ["modern", "dining table", "unique", "dining room"],
            image: "/assets/images/ares_dining_table.jpg",
            threeDModel: "/path/to/ares_dining_table_model.glb",
            quantity: 10
        },
        {
            id: 54,
            name: "Jakob Dining Table",
            description: "A minimalist dining table with a sleek design and clean lines.",
            price: 349.99,
            tags: ["modern", "dining table", "minimalist", "dining room"],
            image: "/assets/images/jakob_dining_table.jpg",
            threeDModel: "/path/to/jakob_dining_table_model.glb",
            quantity: 15
        },
        {
            id: 55,
            name: "Modern Dining Table",
            description: "A contemporary dining table with a glass top and metal base.",
            price: 429.99,
            tags: ["modern", "dining table", "glass", "metal", "dining room"],
            image: "/assets/images/modern_dining_table.jpg",
            threeDModel: "/path/to/modern_dining_table_model.glb",
            quantity: 8
        },
        {
            id: 56,
            name: "Oracle Dining Table",
            description: "A unique and stylish dining table with an oval shape and metal base.",
            price: 499.99,
            tags: ["modern", "dining table", "unique", "dining room"],
            image: "/assets/images/oracle_dining_table.jpg",
            threeDModel: "/path/to/oracle_dining_table_model.glb",
            quantity: 18
        },
        {
            id: 57,
            name: "Velvet Dining Table",
            description: "A luxurious dining table with a velvet upholstered top.",
            price: 599.99,
            tags: ["luxury", "dining table", "velvet", "dining room"],
            image: "/assets/images/velvet_dining_table.jpg",
            threeDModel: "/path/to/velvet_dining_table_model.glb",
            quantity: 6
        }
      ],
      desks: [
        {
            id: 58,
            name: "Balfield Desk",
            description: "A modern and stylish desk with a minimalist design.",
            price: 199.99,
            tags: ["modern", "desk", "minimalist", "office"],
            image: "/assets/images/balfield_desk.jpg",
            threeDModel: "/path/to/balfield_desk_model.glb",
            quantity: 12
        },
        {
            id: 59,
            name: "Computer Desk",
            description: "A functional desk designed specifically for computer work.",
            price: 149.99,
            tags: ["modern", "desk", "computer", "office"],
            image: "/assets/images/computer_desk.jpg",
            threeDModel: "/path/to/computer_desk_model.glb",
            quantity: 10
        },
        {
            id: 60,
            name: "Justine Desk",
            description: "A stylish and compact desk, perfect for small spaces.",
            price: 99.99,
            tags: ["modern", "desk", "compact", "office"],
            image: "/assets/images/justine_desk.jpg",
            threeDModel: "/path/to/justine_desk_model.glb",
            quantity: 15
        },
        {
            id: 61,
            name: "Mickie Desk",
            description: "A modern desk with a unique and playful design.",
            price: 179.99,
            tags: ["modern", "desk", "unique", "office"],
            image: "/assets/images/mickie_desk.jpg",
            threeDModel: "/path/to/mickie_desk_model.glb",
            quantity: 8
        },
        {
            id: 62,
            name: "Oak Desk",
            description: "A classic desk made from solid oak wood.",
            price: 299.99,
            tags: ["classic", "desk", "oak", "wood", "office"],
            image: "/assets/images/oak_desk.jpg",
            threeDModel: "/path/to/oak_desk_model.glb",
            quantity: 18
        },
        {
            id: 63,
            name: "Old Style Desk",
            description: "A vintage-inspired desk with a timeless design.",
            price: 249.99,
            tags: ["vintage", "desk", "classic", "office"],
            image: "/assets/images/old_style_desk.jpg",
            threeDModel: "/path/to/old_style_desk_model.glb",
            quantity: 6
        },
        {
            id: 64,
            name: "Petal Desk",
            description: "A modern and stylish desk with a unique petal-shaped design.",
            price: 229.99,
            tags: ["modern", "desk", "unique", "office"],
            image: "/assets/images/petal_desk.jpg",
            threeDModel: "/path/to/petal_desk_model.glb",
            quantity: 14
        },
        {
            id: 65,
            name: "Simple Office Desk",
            description: "A minimalist desk with a clean and simple design.",
            price: 149.99,
            tags: ["modern", "desk", "minimalist", "office"],
            image: "/assets/images/simple_office_desk.jpg",
            threeDModel: "/path/to/simple_office_desk_model.glb",
            quantity: 11
        },
        {
            id: 66,
            name: "Small Desk",
            description: "A compact desk, perfect for small spaces.",
            price: 99.99,
            tags: ["modern", "desk", "compact", "office"],
            image: "/assets/images/small_desk.jpg",
            threeDModel: "/path/to/small_desk_model.glb",
            quantity: 9
        },
        {
            id: 67,
            name: "Small Wooden Desk",
            description: "A classic wooden desk, perfect for a home office.",
            price: 169.99,
            tags: ["classic", "desk", "wood", "office"],
            image: "/assets/images/small_wooden_desk.jpg",
            threeDModel: "/path/to/small_wooden_desk_model.glb",
            quantity: 16
        },
        {
            id: 68,
            name: "Walnut Desk",
            description: "A luxurious desk made from high-quality walnut wood.",
            price: 399.99,
            tags: ["luxury", "desk", "walnut", "wood", "office"],
            image: "/assets/images/walnut_desk.jpg",
            threeDModel: "/path/to/walnut_desk_model.glb",
            quantity: 12
        },
        {
            id: 69,
            name: "White Office Desk",
            description: "A modern and stylish desk with a clean white finish.",
            price: 129.99,
            tags: ["modern", "desk", "white", "office"],
            image: "/assets/images/white_office_desk.jpg",
            threeDModel: "/path/to/white_office_desk_model.glb",
            quantity: 10
        },
        {
            id: 70,
            name: "Wooden Desk",
            description: "A classic wooden desk with a timeless design.",
            price: 199.99,
            tags: ["classic", "desk", "wood", "office"],
            image: "/assets/images/wooden_desk.jpg",
            threeDModel: "/path/to/wooden_desk_model.glb",
            quantity: 14
        },
        {
            id: 71,
            name: "Writing Desk",
            description: "A traditional writing desk, perfect for studying or writing.",
            price: 149.99,
            tags: ["classic", "desk", "writing", "office"],
            image: "/assets/images/writing_desk.jpg",
            threeDModel: "/path/to/writing_desk_model.glb",
            quantity: 11
        }
    ]
        },

        storage: {
          drawers: [
            {
                id: 72,
                name: "Cabinet Drawer",
                description: "A versatile drawer unit with multiple compartments for storage.",
                price: 129.99,
                tags: ["storage", "cabinet", "drawer"],
                image: "/assets/images/cabinet_drawer.jpg",
                threeDModel: "/path/to/cabinet_drawer_model.glb",
                quantity: 12
            },
            {
                id: 73,
                name: "Casters Drawer",
                description: "A mobile drawer unit with casters for easy movement.",
                price: 99.99,
                tags: ["storage", "drawer", "mobile"],
                image: "/assets/images/casters_drawer.jpg",
                threeDModel: "/path/to/casters_drawer_model.glb",
                quantity: 10
            },
            {
                id: 74,
                name: "Chest Cabinet Drawer",
                description: "A classic chest of drawers with ample storage space.",
                price: 199.99,
                tags: ["storage", "chest", "drawer"],
                image: "/assets/images/chest_cabinet_drawer.jpg",
                threeDModel: "/path/to/chest_cabinet_drawer_model.glb",
                quantity: 15
            },
            {
                id: 75,
                name: "Dakar Chest Drawer",
                description: "A modern chest of drawers with a sleek design.",
                price: 179.99,
                tags: ["modern", "storage", "chest", "drawer"],
                image: "/assets/images/dakar_chest_drawer.jpg",
                threeDModel: "/path/to/dakar_chest_drawer_model.glb",
                quantity: 8
            },
            {
                id: 76,
                name: "Giorgio Drawer",
                description: "A luxurious drawer unit with a high-gloss finish.",
                price: 299.99,
                tags: ["luxury", "storage", "drawer"],
                image: "/assets/images/giorgio_drawer.jpg",
                threeDModel: "/path/to/giorgio_drawer_model.glb",
                quantity: 18
            },
            {
                id: 77,
                name: "Latawn Drawer",
                description: "A vintage-inspired drawer unit with a distressed finish.",
                price: 249.99,
                tags: ["vintage", "storage", "drawer"],
                image: "/assets/images/latawn_drawer.jpg",
                threeDModel: "/path/to/latawn_drawer_model.glb",
                quantity: 6
            },
            {
                id: 78,
                name: "Metal Drawer",
                description: "A durable and stylish drawer unit made of metal.",
                price: 149.99,
                tags: ["modern", "storage", "drawer", "metal"],
                image: "/assets/images/metal_drawer.jpg",
                threeDModel: "/path/to/metal_drawer_model.glb",
                quantity: 14
            },
            {
                id: 79,
                name: "Oak Drawer",
                description: "A classic drawer unit made from solid oak wood.",
                price: 229.99,
                tags: ["classic", "storage", "drawer", "oak"],
                image: "/assets/images/oak_drawer.jpg",
                threeDModel: "/path/to/oak_drawer_model.glb",
                quantity: 11
            },
            {
                id: 80,
                name: "Rattan Drawer",
                description: "A unique and stylish drawer unit made from rattan.",
                price: 199.99,
                tags: ["unique", "storage", "drawer", "rattan"],
                image: "/assets/images/rattan_drawer.jpg",
                threeDModel: "/path/to/rattan_drawer_model.glb",
                quantity: 9
            },
            {
                id: 81,
                name: "Rigged Drawer",
                description: "A versatile drawer unit with adjustable shelves.",
                price: 169.99,
                tags: ["storage", "drawer", "adjustable"],
                image: "/assets/images/rigged_drawer.jpg",
                threeDModel: "/path/to/rigged_drawer_model.glb",
                quantity: 16
            },
            {
                id: 82,
                name: "Simple Drawer",
                description: "A minimalist drawer unit with a clean and simple design.",
                price: 99.99,
                tags: ["modern", "storage", "drawer", "minimalist"],
                image: "/assets/images/simple_drawer.jpg",
                threeDModel: "/path/to/simple_drawer_model.glb",
                quantity: 12
            },
            {
                id: 83,
                name: "Storage Box Drawer",
                description: "A compact drawer unit with built-in storage boxes.",
                price: 129.99,
                tags: ["storage", "drawer", "compact"],
                image: "/assets/images/storage_box_drawer.jpg",
                threeDModel: "/path/to/storage_box_drawer_model.glb",
                quantity: 10
            },
            {
                id: 84,
                name: "White Drawer",
                description: "A sleek and modern drawer unit with a white finish.",
                price: 149.99,
                tags: ["modern", "storage", "drawer", "white"],
                image: "/assets/images/white_drawer.jpg",
                threeDModel: "/path/to/white_drawer_model.glb",
                quantity: 14
            },
            {
                id: 85,
                name: "Wooden Drawer",
                description: "A classic drawer unit made from solid wood.",
                price: 199.99,
                tags: ["classic", "storage", "drawer", "wood"],
                image: "/assets/images/wooden_drawer.jpg",
                threeDModel: "/path/to/wooden_drawer_model.glb",
                quantity: 11
            }
        ],
        shelving: [
          {
              id: 86,
              name: "5tier Shelve",
              description: "A spacious and functional shelving unit with five tiers.",
              price: 129.99,
              tags: ["storage", "shelving", "5-tier"],
              image: "/assets/images/5tier_shelve.jpg",
              threeDModel: "/path/to/5tier_shelve_model.glb",
              quantity: 12
          },
          {
              id: 87,
              name: "Corner Shelve",
              description: "A space-saving shelving unit designed for corner placement.",
              price: 99.99,
              tags: ["storage", "shelving", "corner"],
              image: "/assets/images/corner_shelve.jpg",
              threeDModel: "/path/to/corner_shelve_model.glb",
              quantity: 10
          },
          {
              id: 88,
              name: "Industrial Shelve",
              description: "A stylish and industrial-inspired shelving unit.",
              price: 179.99,
              tags: ["modern", "storage", "shelving", "industrial"],
              image: "/assets/images/industrial_shelve.jpg",
              threeDModel: "/path/to/industrial_shelve_model.glb",
              quantity: 15
          },
          {
              id: 89,
              name: "Modern Modular Shelve",
              description: "A versatile and customizable modular shelving unit.",
              price: 149.99,
              tags: ["modern", "storage", "shelving", "modular"],
              image: "/assets/images/modern_modular_shelve.jpg",
              threeDModel: "/path/to/modern_modular_shelve_model.glb",
              quantity: 8
          },
          {
              id: 90,
              name: "Modern Rustic Shelve",
              description: "A stylish blend of rustic and modern design in a shelving unit.",
              price: 199.99,
              tags: ["modern", "rustic", "storage", "shelving"],
              image: "/assets/images/modern_rustic_shelve.jpg",
              threeDModel: "/path/to/modern_rustic_shelve_model.glb",
              quantity: 18
          },
          {
              id: 91,
              name: "Open Shelve",
              description: "A minimalist shelving unit with open shelves for easy access.",
              price: 129.99,
              tags: ["modern", "storage", "shelving", "open"],
              image: "/assets/images/open_shelve.jpg",
              threeDModel: "/path/to/open_shelve_model.glb",
              quantity: 6
          },
          {
              id: 92,
              name: "Stylish Shelve",
              description: "A stylish and functional shelving unit with a unique design.",
              price: 169.99,
              tags: ["modern", "storage", "shelving", "stylish"],
              image: "/assets/images/stylish_shelve.jpg",
              threeDModel: "/path/to/stylish_shelve_model.glb",
              quantity: 14
          },
          {
              id: 93,
              name: "Twisted Shelve",
              description: "A unique and eye-catching shelving unit with a twisted design.",
              price: 199.99,
              tags: ["modern", "storage", "shelving", "unique"],
              image: "/assets/images/twisted_shelve.jpg",
              threeDModel: "/path/to/twisted_shelve_model.glb",
              quantity: 11
          },
          {
              id: 94,
              name: "Wood Shelve",
              description: "A classic wooden shelving unit with a timeless design.",
              price: 149.99,
              tags: ["classic", "storage", "shelving", "wood"],
              image: "/assets/images/wood_shelve.jpg",
              threeDModel: "/path/to/wood_shelve_model.glb",
              quantity: 9
          },
          {
              id: 95,
              name: "Wooden Shelve",
              description: "A versatile wooden shelving unit with multiple shelves.",
              price: 129.99,
              tags: ["classic", "storage", "shelving", "wood"],
              image: "/assets/images/wooden_shelve.jpg",
              threeDModel: "/path/to/wooden_shelve_model.glb",
              quantity: 16
          }
      ]

          },

        bedRoom: {
          beds: [
            {
                id: 96,
                name: "B&B Bed",
                description: "A luxurious and stylish bed with a tufted headboard.",
                price: 999.99,
                tags: ["luxury", "bed", "tufted"],
                image: "/assets/images/B&B_bed.jpg",
                threeDModel: "/path/to/B&B_bed_model.glb",
                quantity: 5
            },
            {
                id: 97,
                name: "Blue Bed",
                description: "A modern and stylish bed with a blue upholstered headboard.",
                price: 799.99,
                tags: ["modern", "bed", "blue"],
                image: "/assets/images/blue_bed.jpg",
                threeDModel: "/path/to/blue_bed_model.glb",
                quantity: 8
            },
            {
                id: 98,
                name: "Letto Pixel Bed",
                description: "A minimalist bed with a sleek and modern design.",
                price: 699.99,
                tags: ["modern", "bed", "minimalist"],
                image: "/assets/images/letto_pixel_bed.jpg",
                threeDModel: "/path/to/letto_pixel_bed_model.glb",
                quantity: 10
            },
            {
                id: 99,
                name: "Modern Bed",
                description: "A contemporary bed with a simple and elegant design.",
                price: 899.99,
                tags: ["modern", "bed"],
                image: "/assets/images/modern_bed.jpg",
                threeDModel: "/path/to/modern_bed_model.glb",
                quantity: 7
            },
            {
                id: 100,
                name: "Modern Black Bed",
                description: "A stylish and sophisticated bed with a black finish.",
                price: 999.99,
                tags: ["modern", "bed", "black"],
                image: "/assets/images/modern_black_bed.jpg",
                threeDModel: "/path/to/modern_black_bed_model.glb",
                quantity: 6
            },
            {
                id: 101,
                name: "Orchid Bed",
                description: "A romantic and elegant bed with a soft and curved design.",
                price: 899.99,
                tags: ["romantic", "bed", "elegant"],
                image: "/assets/images/orchid_bed.jpg",
                threeDModel: "/path/to/orchid_bed_model.glb",
                quantity: 9
            },
            {
                id: 102,
                name: "Sahara Bed",
                description: "A luxurious and comfortable bed with a plush headboard.",
                price: 1199.99,
                tags: ["luxury", "bed", "plush"],
                image: "/assets/images/sahara_bed.jpg",
                threeDModel: "/path/to/sahara_bed_model.glb",
                quantity: 5
            }
          ]
        }


      };
      
  

  // Method to get all data
  getData() {
    return this.furnitureData;
  }

}
