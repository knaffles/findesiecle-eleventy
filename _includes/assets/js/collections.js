// See default templates at: https://github.com/Shopify/buy-button-js/blob/master/src/templates/product.js

if (window.ShopifyBuy) {
  const client = window.ShopifyBuy.buildClient({
    domain: "findesiecle.myshopify.com",
    storefrontAccessToken: "3b48fe364dd5aab98abc0d918366ad4f",
  });

  const ui = window.ShopifyBuy.UI.init(client);
  const imgWithCarouselTemplate = `<div class="{{data.classes.product.imgWrapper}}" data-element="product.imageWrapper">
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
</div>`;


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
          img: `{{#data.currentImage.srcLarge}}<div class="{{data.classes.product.imgWrapper}}" data-element="product.imgWrapper"><img alt="{{data.currentImage.altText}}" data-element="product.img" class="{{data.classes.product.img}}" src="{{data.currentImage.srcLarge}}" /></div>{{/data.currentImage.srcLarge}}`,
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
          imgWithCarousel: imgWithCarouselTemplate,
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
          imgWithCarousel: imgWithCarouselTemplate,
        },
      },
    },
  });

  ui.createComponent("collection", {
    id: 421302796509,
    node: document.getElementById("pennsylvania-collection"),
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
          imgWithCarousel: imgWithCarouselTemplate,
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
          imgWithCarousel: imgWithCarouselTemplate,
        },
      },
    },
  });


  const clickedImage = (target => {
    if (target.classList.contains('shopify-buy__product__variant-img') || target.classList.contains('shopify-buy__product__title')) {
      console.log('yes!')
      target.parentElement.parentElement.querySelector('.shopify-buy__btn').click();
    }
  })

  document.getElementById('products').addEventListener("click", (event) => {clickedImage(event.target)}, true); 

}
