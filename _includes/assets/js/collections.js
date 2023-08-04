if (window.ShopifyBuy) {
  var client = window.ShopifyBuy.buildClient({
    domain: "findesiecle.myshopify.com",
    storefrontAccessToken: "3b48fe364dd5aab98abc0d918366ad4f",
  });

  var ui = window.ShopifyBuy.UI.init(client);

  ui.createComponent("collection", {
    id: 360363753693,
    node: document.getElementById("ceramics-collection"),
    options: {
      product: {
        buttonDestination: "modal",
        text: {
          button: "View Details",
        },
        templates: {
          button: `{{#data.selectedVariant.available}}<div class="{{data.classes.product.buttonWrapper}}" data-element="product.buttonWrapper"><button {{#data.buttonDisabled}}disabled{{/data.buttonDisabled}} class="{{data.classes.product.button}} {{data.buttonClass}}" data-element="product.button">{{data.buttonText}}</button></div>{{/data.selectedVariant.available}}
          {{^data.selectedVariant.available}}<div class="{{data.classes.product.buttonWrapper}}" data-element="product.buttonWrapper"><button disabled class="{{data.classes.product.button}} {{data.buttonClass}}" data-element="product.button">SOLD</button></div>{{/data.selectedVariant.available}}`,
        },
        // events: {
        //   afterRender: function (component) {
        //     console.log(component.selectedVariant.available);
        //   },
        // },
      },
      productSet: {
        iframe: false,
      },
      cart: {
        popup: false,
      },
      modal: {
        iframe: false,
      },
      modalProduct: {
        contents: {
          img: false,
          imgWithCarousel: true,
        },
        text: {
          button: "Buy Now",
          outOfStock: "SOLD",
        },
        templates: {
          imgWithCarousel: `<div class="{{data.classes.product.imgWrapper}}" data-element="product.imageWrapper">
            <div class="main-image-wrapper">
              <button type="button" class="carousel-button carousel-button--previous">
                Left
                <img class="carousel-button-arrow" src="//sdks.shopifycdn.com/buy-button/latest/arrow.svg" alt="Carousel Arrow"/>
              </button>
              <img class="{{data.classes.product.img}}" alt="{{data.currentImage.altText}}" src="{{data.currentImage.srcLarge}}" data-element="product.img" />
              <button type="button" class="carousel-button carousel-button--next">
                Right
                <img class="carousel-button-arrow" src="//sdks.shopifycdn.com/buy-button/latest/arrow.svg" alt="Carousel Arrow"/>
              </button>
            </div>
            <div class="{{data.classes.product.carousel}}">
              {{#data.carouselImages}}
              <a data-element="product.carouselitem" aria-label="{{altText}}" href="{{src}}" class="{{data.classes.product.carouselItem}} {{#isSelected}} {{data.classes.product.carouselItemSelected}} {{/isSelected}}" data-image-id="{{id}}" style="background-image: url({{carouselSrc}})"></a>
              {{/data.carouselImages}}
            </div>
          </div>`,
        },
      },
    },
  });

  ui.createComponent("collection", {
    id: 360502165725,
    node: document.getElementById("paintings-collection"),
    options: {
      product: {
        buttonDestination: "modal",
        text: {
          button: "View Details",
        },
      },
      productSet: {
        iframe: false,
      },
      cart: {
        popup: false,
      },
      modal: {
        iframe: false,
      },
      modalProduct: {
        contents: {
          img: false,
          imgWithCarousel: true,
        },
        text: {
          button: "Buy Now",
          outOfStock: "SOLD",
        },
        templates: {
          imgWithCarousel: `<div class="{{data.classes.product.imgWrapper}}" data-element="product.imageWrapper">
            <div class="main-image-wrapper">
              <button type="button" class="carousel-button carousel-button--previous">
                Left
                <img class="carousel-button-arrow" src="//sdks.shopifycdn.com/buy-button/latest/arrow.svg" alt="Carousel Arrow"/>
              </button>
              <img class="{{data.classes.product.img}}" alt="{{data.currentImage.altText}}" src="{{data.currentImage.srcLarge}}" data-element="product.img" />
              <button type="button" class="carousel-button carousel-button--next">
                Right
                <img class="carousel-button-arrow" src="//sdks.shopifycdn.com/buy-button/latest/arrow.svg" alt="Carousel Arrow"/>
              </button>
            </div>
            <div class="{{data.classes.product.carousel}}">
              {{#data.carouselImages}}
              <a data-element="product.carouselitem" aria-label="{{altText}}" href="{{src}}" class="{{data.classes.product.carouselItem}} {{#isSelected}} {{data.classes.product.carouselItemSelected}} {{/isSelected}}" data-image-id="{{id}}" style="background-image: url({{carouselSrc}})"></a>
              {{/data.carouselImages}}
            </div>
          </div>`,
        },
      },
    },
  });

  ui.createComponent("collection", {
    id: 413752721629,
    node: document.getElementById("decorative-arts-collection"),
    options: {
      product: {
        buttonDestination: "modal",
        text: {
          button: "View Details",
        },
      },
      productSet: {
        iframe: false,
      },
      cart: {
        popup: false,
      },
      modal: {
        iframe: false,
      },
      modalProduct: {
        contents: {
          img: false,
          imgWithCarousel: true,
        },
        text: {
          button: "Buy Now",
          outOfStock: "SOLD",
        },
        templates: {
          imgWithCarousel: `<div class="{{data.classes.product.imgWrapper}}" data-element="product.imageWrapper">
            <div class="main-image-wrapper">
              <button type="button" class="carousel-button carousel-button--previous">
                Left
                <img class="carousel-button-arrow" src="//sdks.shopifycdn.com/buy-button/latest/arrow.svg" alt="Carousel Arrow"/>
              </button>
              <img class="{{data.classes.product.img}}" alt="{{data.currentImage.altText}}" src="{{data.currentImage.srcLarge}}" data-element="product.img" />
              <button type="button" class="carousel-button carousel-button--next">
                Right
                <img class="carousel-button-arrow" src="//sdks.shopifycdn.com/buy-button/latest/arrow.svg" alt="Carousel Arrow"/>
              </button>
            </div>
            <div class="{{data.classes.product.carousel}}">
              {{#data.carouselImages}}
              <a data-element="product.carouselitem" aria-label="{{altText}}" href="{{src}}" class="{{data.classes.product.carouselItem}} {{#isSelected}} {{data.classes.product.carouselItemSelected}} {{/isSelected}}" data-image-id="{{id}}" style="background-image: url({{carouselSrc}})"></a>
              {{/data.carouselImages}}
            </div>
          </div>`,
        },
      },
    },
  });
}
