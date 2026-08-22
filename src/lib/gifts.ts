export interface Gift {
  id: number;
  name: string;
  goal: number;
  current: number;
  description: string;
  image: string;
  imageHint?: string;
  storeUrl?: string;
  category: "casamento" | "cha";
}

export const allGifts: Gift[] = [


  {
    id: 13,
    name: "Jogo de Pano de Prato",
    category: "cha",
    goal: 39.99,
    current: 0,
    description: "Home Style",
    image:
      "https://img.camicado.com.br/item/101270659/zoom/1.jpg?ims=fit-in/x566",
    imageHint: "Pano de Prato",
    storeUrl:
      "https://www.camicado.com.br/p/jogo-de-pano-de-prato-home-style-drai/-/A-101128388-br.lc?sku=101270659",
  },
  {
    id: 14,
    category: "casamento",
    name: "Almofadas",
    goal: 40,
    current: 0,
    description: "Mantendo a Sala sempre fofinha",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2IQOG_ov9Y8rVPPZRlPOrY1p2U04cDODGWQ&s",
    imageHint: "almofadas",
  },
  {
    id: 15,
    category: "casamento",
    name: "Jogo de Cama",
    goal: 460,
    current: 460,
    description: "",
    image:
      "https://d1l2khdhnk6ii8.cloudfront.net/Custom/Content/Products/10/03/1003540_kit-alexandre-herchcovitch-5-pecas-edredom-jogo-de-cama-casal-branco_z1_637526300710111336.webp",
    imageHint: "bed sheets",
  },
  {
    id: 16,
    category: "cha",
    name: "Assadeira",
    goal: 139.99,
    current: 0,
    description: "Para fazer uma deliciosa lasanha no Domingo.",
    image: "https://img.camicado.com.br/item/100835427/medium/1.jpg",
    imageHint: "coffee machine",
    storeUrl:
      "https://www.camicado.com.br/p/assadeira-refrataria-home-style-neutre-35-cm-x-24-cm/-/A-100835419-br.lc?sku=100835427",
  },
  {
    id: 17,
    category: "cha",
    name: "Luva Térmica",
    goal: 29.9,
    current: 0,
    description: "Para preparar bolos e sobremesas deliciosas.",
    image:
      "https://imgmarketplace.lojasrenner.com.br/20000/3830/7010705803603/7510712560529/0.jpeg?ims=fit-in/x566",
    imageHint: "luva térmica",
    storeUrl:
      "https://www.camicado.com.br/p/kit-2-luvas-termicas-pegador-em-silicone-cinza/-/A-7010705803603-br.lc?sku=7510712560529",
  },
  {
    id: 18,
    category: "cha",
    name: "Escorredor de Massa",
    goal: 57.31,
    current: 0,
    description: "",
    image:
      "https://imgmarketplace.lojasrenner.com.br/20000/5594/7010704516840/7510709302175/0.jpeg?ims=fit-in/x566",
    imageHint: "escorredor de massa",
    storeUrl:
      "https://www.camicado.com.br/p/escorredor-de-alimentos-inteligente-massa-legumes-lavador-de-arroz-2l-plastico-plasvale-branco/-/A-7010704516840-br.lc?sku=7510709302175",
  },
  {
    id: 19,
    category: "cha",
    name: "Forma de gelo",
    goal: 29.99,
    current: 0,
    description: "",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl9K5bdZmkOAViweIU2pbbcfQE0tnPgXj4_zAfCTgF6y60yA",
    imageHint: "forma de gelo",
    storeUrl:
      "https://www.camicado.com.br/p/forma-de-gelo-home-style-cocinero-15-cubos/-/A-100880578-br.lc?sku=100880586",
  },
  {
    id: 20,
    category: "cha",
    name: "Jogo de Medidores",
    goal: 25.99,
    current: 0,
    description: "",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSxTV7tcGEjO2T2BPqQXe9YF607vZsRujLja9PkzaoP3edJLQ",
    imageHint: "jogo de medidores",
    storeUrl:
      "https://www.camicado.com.br/p/jogo-de-medidores-home-style-cocinero/-/A-100463678-br.lc?sku=100463686",
  },
  {
    id: 21,
    category: "cha",
    name: "Ralador",
    goal: 59.99,
    current: 0,
    description: "",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS8qV4L93UwNdkK06ILiQ-dePsSo3q3qZCt_9Ait4TIzhcGoA",
    imageHint: "ralador",
    storeUrl:
      "https://www.camicado.com.br/p/ralador-4-faces-home-style-utile/-/A-100898241-br.lc?sku=100898250",
  },
  {
    id: 22,
    category: "cha",
    name: "Galheteiro de Azeite",
    goal: 59.99,
    current: 0,
    description: "",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQidX0TkASXkvrqgb3RK0niYQ9g7DcpccNT5nwUIfJA40jrXQ",
    imageHint: "fechadura eletronica",
    storeUrl:
      "https://www.camicado.com.br/p/galheteiro-home-style-duo/-/A-101182430-br.lc?sku=101182448",
  },
  {
    id: 23,
    category: "cha",
    name: "Escumadeira",
    goal: 29.99,
    current: 0,
    description: "",
    image:
      "https://img.camicado.com.br/item/000000000000045414/zoom/1.jpg?ims=fit-in/x566",
    imageHint: "escumadeira",
    storeUrl:
      "https://www.camicado.com.br/p/escumadeira-home-style-cocinero-pro/-/A-100715100-br.lc?sku=000000000000045414",
  },
  {
    id: 24,
    category: "cha",
    name: "Concha",
    goal: 29.99,
    current: 0,
    description: "",
    image:
      "https://img.camicado.com.br/item/000000000000045408/zoom/1.jpg?ims=fit-in/x566",
    imageHint: "concha",
    storeUrl:
      "https://www.camicado.com.br/p/concha-home-style-cocinero-31-cm/-/A-300045408-br.lc?sku=000000000000045408",
  },
  {
    id: 25,
    category: "cha",
    name: "Cortador de Pizza",
    goal: 35.36,
    current: 0,
    description: " ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrGPXknvCltSdvxEndV9GTLFeIyeoLfJfjOcHWIqlsTbZuXQ",
    imageHint: "cortador de pizzau",
    storeUrl:
      "https://www.camicado.com.br/p/cortador-para-pizza-tramontina-verano-com-lamina-de-aco-inox-e-cabo-de-polipropileno-onix-tramontina/-/A-701451937-br.lc?sku=754539558",
  },
  {
    id: 26,
    category: "cha",
    name: "Espátula de Bolo",
    goal: 26.22,
    current: 0,
    description: " ",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTrDhpz6on9nFChmWE_zWb4KpiqozFNfysmUBOiR2zJfYtIIg",
    imageHint: "espátula para bolo",
    storeUrl:
      "https://www.camicado.com.br/p/pa-para-cortar-bolo-espatula-cortador-de-fatia-pizza-inox-ta/-/A-7010704510019-br.lc?sku=7510709290439",
  },
  {
    id: 27,
    category: "cha",
    name: "Colher de Arroz",
    goal: 29.99,
    current: 0,
    description: " ",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRMikFQ08Em6VWL2jpJZrUzvlUwGT00h6bvantvONQKC-nfLw",
    imageHint: "colher de arroz",
    storeUrl:
      "https://www.camicado.com.br/p/colher-de-arroz-home-style-cocinero-34-cm/-/A-300045409-br.lc?sku=000000000000045409",
  },
  {
    id: 28,
    category: "cha",
    name: "Pilão",
    goal: 89.99,
    current: 0,
    description: " ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcjl-LeQhwUmDUgDJgscageKgeTUkmLfr5cN3cdiy_zpPPsg",
    imageHint: "record player",
    storeUrl:
      "https://www.camicado.com.br/p/pilao-home-style-petra-11cm/-/A-100226381-br.lc?sku=100226390",
  },
  {
    id: 29,
    category: "cha",
    name: "Amassador de Batata",
    goal: 68.19,
    current: 0,
    description: "Inox",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQolkzgLq8h4NK2JE0wFz7uEYVfuwkwEX55hjA6mO3xa145hg",
    imageHint: "amassador de batata",
    storeUrl:
      "https://www.camicado.com.br/p/amassador-de-batatas-tramontina-marffim-em-aco-inox-tramontina/-/A-701258496-br.lc?sku=754087817",
  },
  {
    id: 30,
    category: "cha",
    name: "Colher de silicone",
    goal: 76.9,
    current: 0,
    description: "",
    image:
      "https://imgmarketplace.lojasrenner.com.br/20000/1024/700626681/752118421/0.jpeg?ims=fit-in/300x300",
    imageHint: "colher de silicone",
    storeUrl:
      "https://imgmarketplace.lojasrenner.com.br/20000/1024/700626681/752118421/0.jpeg?ims=fit-in/300x300",
  },
  {
    id: 31,
    category: "cha",
    name: "Tesoura de Cozinha",
    goal: 59.99,
    current: 0,
    description: "",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDjYjW33li-mh7Ospf9stLuMyiefdS6HALpyW73-cO9N6M_g",
    imageHint: "tesoura de cozinha",
    storeUrl:
      "https://www.camicado.com.br/p/tesoura-home-style-cocinero-pro/-/A-100757043-br.lc?sku=100757051",
  },
  {
    id: 32,
    category: "cha",
    name: "Abridor de Latas",
    goal: 59.99,
    current: 0,
    description: " ",
    image:
      "https://img.camicado.com.br/item/100720110/zoom/1.jpg?ims=fit-in/x566",
    imageHint: "abridor de latas",
    storeUrl:
      "https://www.camicado.com.br/p/abridor-de-latas-home-style-utile/-/A-100720101-br.lc?sku=100720110",
  },
  {
    id: 33,
    category: "cha",
    name: "Espátula Pão duro",
    goal: 29.99,
    current: 0,
    description: " ",
    image:
      "https://img.camicado.com.br/item/101027077/zoom/1.jpg?ims=fit-in/x566",
    imageHint: "espátula pão duro",
    storeUrl:
      "https://www.camicado.com.br/p/espatula-pao-duro-home-style-cocinero-33-cm/-/A-101027069-br.lc?sku=101027077",
  },
  {
    id: 34,
    category: "cha",
    name: "Espátula Vazada",
    goal: 29.99,
    current: 0,
    description: " ",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRajIOJd_H_aMFjhvXrprpn2GLtVBXrVP8JjTLqY2qap46sKw",
    imageHint: "Espátula vazada",
    storeUrl:
      "https://www.camicado.com.br/p/espatula-vazada-home-style-cocinero-36-cm/-/A-300045406-br.lc?sku=000000000000045406",
  },
  {
    id: 35,
    category: "cha",
    name: "Pegador",
    goal: 35.99,
    current: 0,
    description: " ",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRnpkQXsWEdLYwrYqPUhxH2lSAuS70Au6wTjdz3Upcjc-oVGA",
    imageHint: "pegador",
    storeUrl:
      "https://www.camicado.com.br/p/pegador-home-style-cocinero-33-cm/-/A-101027106-br.lc?sku=101027114",
  },
  {
    id: 36,
    category: "cha",
    name: "Colheres de Medida",
    goal: 44.9,
    current: 0,
    description: " ",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTvQ89AUXICMaHVO5PM6Hy9Xpyt0xr26OlCPDTjgVKAF1wPvQ",
    imageHint: "colher de medida",
    storeUrl:
      "https://www.camicado.com.br/p/conjunto-de-5-colheres-medidoras-cozinha-cinza-kitchenaid/-/A-7010703994578-br.lc?sku=7510708125900",
  },
  {
    id: 37,
    category: "cha",
    name: "Secador de Salada",
    goal: 179.99,
    current: 0,
    description: " ",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRKm8-mv94HVACjAK9u06VGD_a41_ACAreHRKTNk9MCQC9zrQ",
    imageHint: "Secador de Salada",
    storeUrl:
      "https://www.camicado.com.br/p/secador-de-salada-home-style-cocinero-24cm/-/A-300044810-br.lc?sku=000000000000044810",
  },
  {
    id: 38,
    category: "cha",
    name: "Açucareiro",
    goal: 49.99,
    current: 0,
    description: " ",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSDzfTozAmVdKfMT3Bf90oD9o41vckq4L-PfMa5EmnqIe3XwA",
    imageHint: "açucareiro",
    storeUrl:
      "https://www.camicado.com.br/p/acucareiro-home-style-holy/-/A-101466539-br.lc?sku=101466547",
  },
  {
    id: 39,
    category: "cha",
    name: "Jarra para suco",
    goal: 79.99,
    current: 0,
    description: "",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRMNdyrHMn1-JnWNudKEoZotpgdhEQOj885klfFb0GLzgbjkg",
    imageHint: "jarra para suco",
    storeUrl:
      "https://www.camicado.com.br/p/jarra-home-style-new-gaelle/-/A-101307482-br.lc?sku=101307491",
  },
  {
    id: 40,
    category: "cha",
    name: "Toalha de Mesa",
    goal: 199.99,
    current: 0,
    description: " ",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5Vy9dHLUsyv3pbAYUI71i5zO9xI6lVSshnIlf18S8QF1yDg",
    imageHint: "toalha de mesa",
    storeUrl:
      "https://www.camicado.com.br/p/toalha-de-mesa-home-style-quadri/-/A-101282633-br.lc?sku=101282641",
  },
  {
    id: 41,
    category: "casamento",
    name: "Panela de Pressão",
    goal: 174,
    current: 0,
    description: " ",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT-BDMgiJLU51Zi94WdVIcAWUh4xxShS8Csh41XsGiEbGQjPA",
    imageHint: "panela de pressão",
    storeUrl:
      "https://www.amazon.com.br/Tramontina-Vancouver-Alum%C3%ADnio-Revestimento-Antiaderente/dp/B0CD4SCM33/ref=zg_bs_g_17124947011_d_sccl_3/142-9777363-4041438?psc=1",
  },
  {
    id: 42,
    category: "cha",
    name: "Jogo de taças",
    goal: 149.99,
    current: 0,
    description: " ",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSdgi2s7gjff9oP9JGbhd0jPR6ATVHOh5-xj8voVsSV5xXKug",
    imageHint: "jogas de taças",
    storeUrl:
      "https://www.camicado.com.br/p/jogo-de-taca-agua-e-vinho-bohemia-gastro/-/A-300038761-br.lc?sku=000000000000038761",
  },
  {
    id: 43,
    category: "cha",
    name: "Jogo de xícaras",
    goal: 79.0,
    current: 0,
    description: " ",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTlUTLcXWgH-329_LV9x7_cspLxjIXMyJIpcatHBR71XNIUQg",
    imageHint: "jogo de xícaras",
    storeUrl:
      "https://www.camicado.com.br/p/jogo-xicaras-de-cha-cafe-com-pires-210ml-kit-6-pecas-ceramica/-/A-7010704840109-br.lc?sku=7510710186672",
  },

  {
    id: 45,
    category: "cha",
    name: "Fuet",
    goal: 39.99,
    current: 0,
    description: " ",
    image: "https://m.media-amazon.com/images/I/41VEGNIGjoL._AC_SL1000_.jpg",
    imageHint: "fuet",
    storeUrl:
      "https://www.amazon.com.br/Batedor-A%C3%A7o-Inox-Marffim-Tramontina/dp/B086YHYJPB/ref=asc_df_B086YHYJPB?tag=googleshopp00-20&hvadid=709964506241&hvpos=&hvnetw=g&hvrand=1093062790629447688&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9196708&hvtargid=pla-1194829311048&psc=1&language=pt_BR",
  },
  {
    id: 46,
    category: "cha",
    name: "Jogo com 6 Cumbucas",
    goal: 107.59,
    current: 0,
    description: " ",
    image:
      "https://imgmarketplace.lojasrenner.com.br/20000/5592/7010704432078/7510709137029/0.jpeg?ims=fit-in/x566",
    imageHint: "cumbuca",
    storeUrl:
      "https://www.camicado.com.br/p/6-tigelas-680ml-cumbucas-bowls-de-ceramica-lyor-bege-cronus-sobremesa-sopa/-/A-7010704432078-br.lc?sku=7510709137029",
  },
  {
    id: 47,
    category: "casamento",
    name: "Sanduicheira",
    goal: 99.99,
    current: 0,
    description: " ",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSHzAtjT_ig6YEPtLquXXnWsz0hYSpiIFpX2xlZ5NVY4zSTKA",
    imageHint: "online learning",
    storeUrl:
      "https://www.amazon.com.br/Sanduicheira-El%C3%A9trica-Cadence-Click-220V/dp/B0CDJ5DQ7M/ref=sr_1_4?dib=eyJ2IjoiMSJ9.UzCUWFzZFZ66hdicWvWpyeJORgikoJugoTQYyIwQSGWtZBG_3eFVH1nBpvVhchBtss3IBWm7PkQ5_PwDtEcydEdRlx24k1feh86evdbKx-20WDXNVqjPTR5XwNXMQH0HrAhPYkIeZP6Xt35UTd0m4YfoPZDdtQzWEaJ2Nf9arrgr--sDJNXvWdqu7DCid2F4X8L-CAy33bZNACOsvKyUNh3ymzDl62V8cYJ7Lhwdk0DfG0DPJT5Wt6e0iYqCVbumnfRrR-rwwvw8v9UxZVHBUQ08ms2ooZl0uIVvbYBJoD-ROYHUlzqCRS8p8fqJzO2gnPbl1BVrf_MsYB7HzZXlS5aLEFPcT5EYR2yddM604m4grtNbYJ8nAck5DkU5zoa2KDD_e7fDsw1GkcUK7pfW3JqLdjRGnRbJ2q18lJ0HZwZjneP4j07aukhsuRJTtnEX.6M8F_OLQwovFJjIGMrK3PKksBeGOgubMfdi5b_FZU9E&dib_tag=se&keywords=sanduicheira&qid=1736125833&sr=8-4&ufe=app_do:amzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9&th=1",
  },
  {
    id: 48,
    category: "cha",
    name: "Jogo de Marinex de Vidro",
    goal: 129,
    current: 0,
    description: "Serve pra tudo.",
    image: "https://m.media-amazon.com/images/I/51X6C1aXaxL._AC_SL1000_.jpg",
    imageHint: "jogo de assadeira",
    storeUrl:
      "https://www.amazon.com.br/Assadeiras-Marinex-Pe%C3%A7as-Tampa-Vidro/dp/B082M6W4VX/ref=asc_df_B082M6W4VX?tag=googleshopp00-20&hvadid=709870389015&hvpos=&hvnetw=g&hvrand=15470083941174972509&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9196708&hvtargid=pla-896953145889&psc=1&language=pt_BR",
  },
  {
    id: 53,
    category: "casamento",
    name: "Batedeira Planetária",
    goal: 266,
    current: 0,
    description: "Bolin com fefézin.",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_809500-MLA99934080747_112025-F.webp",
    imageHint: "Batedeira",
    storeUrl:
      "https://www.mercadolivre.com.br/batedeira-planetaria-britnia-bbpe01-12-velocidades-4l-500w-cor-preto/p/MLB28681453?pdp_filters=item_id:MLB5577846204&from=gshop&matt_tool=80488341&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22090193747&matt_ad_group_id=194474625594&matt_match_type=&matt_network=g&matt_device=c&matt_creative=792355615584&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735098639&matt_product_id=MLB28681453-product&matt_product_partition_id=2452779771262&matt_target_id=aud-1966858076296:pla-2452779771262&cq_src=google_ads&cq_cmp=22090193747&cq_net=g&cq_plt=gp&cq_med=pla&gad_campaignid=22090193747&gbraid=0AAAAAD93qcButA8cepQ2aKc5nFqbjlN_V",
  },
  {
    id: 55,
    category: "casamento",
    name: "Aparelho de Jantar",
    goal: 481,
    current: 0,
    description: "30 peças.",
    image: "https://m.media-amazon.com/images/I/51HjUseflNS._AC_SL1000_.jpg",
    imageHint: "Jogo de pratos",
    storeUrl:
      "https://www.amazon.com.br/Aparelho-Jantar-Ch%C3%A1-Oxford-Maresia/dp/B0BZ53C13F?&linkCode=sl1&tag=apromoperfe04-20&linkId=78052b8d2f5e89fec131865848b23e09&language=pt_BR&ref_=as_li_ss_tl",
  },
  {
    id: 56,
    category: "casamento",
    name: "Gaveteiro para escrivaninha",
    goal: 439.98,
    current: 0,
    description: "Pra noiva organizar seu Home office.",
    image:
      "https://product-hub-prd.madeiramadeira.com.br/564238/images/0de105e1-1d3f-446f-abb5-0c8b54691332oveis79081672267652600x600.jpg?width=700&canvas=1:1&bg-color=FFF",
    imageHint: "gaveteiro de madeira",
    storeUrl:
      "https://www.madeiramadeira.com.br/gaveteiro-volante-4-gavetas-kugv44-kuadra-espresso-moveis-564238.html",
  },
  {
    id: 57,
    category: "casamento",
    name: "Cota para Escrivaninha com gaveteiro",
    goal: 340,
    current: 0,
    description: "Pra montar nosso Home Studio.",
    image:
      "https://product-hub-prd.madeiramadeira.com.br/665288/images/d851b049-e741-4814-a625-4f93bc2c2850adracompace66528816600x600.jpg?width=700&canvas=1:1&bg-color=FFF",
    imageHint: "mesa e gaveteiro.",
    storeUrl:
      "https://www.madeiramadeira.com.br/kit-2-pecas-com-1-escrivaninha-e-1-gaveteiro-4-gavetas-kuadra-665288.html",
  },
  {
    id: 59,
    category: "casamento",
    name: "Persiana",
    goal: 270.18,
    current: 0,
    description: "Para dar mais privacidade e aconchego.",
    image:
      "https://cdn.leroymerlin.com.br/products/cortina_persiana_rolo_tela_solar_5percent_1,40_larg_x_1,30_alt_bege_1570807584_3a5d_600x600.jpg",
    imageHint: "window curtains",
    storeUrl:
      "https://www.leroymerlin.com.br/cortina-persiana-rolo-tela-solar-5percent-1,40-larg-x-1,30-alt-bege_1570807584",
  },
  {
    id: 60,
    category: "cha",
    name: "Chaleira Elétrica",
    goal: 133.44,
    current: 0,
    description: "Para preparar um chazinho.",
    image: "https://m.media-amazon.com/images/I/5157j9NnlaL._AC_SX679_.jpg",
    imageHint: "Chaleira elétrica",
    storeUrl:
      "https://www.amazon.com.br/Chaleira-El%C3%A9trica-Electrolux-Efficient-EEK10/dp/B09CBTSBQL/ref=asc_df_B09CBTSBQL?tag=googleshopp00-20&hvadid=709886750320&hvpos=&hvnetw=g&hvrand=1237403468521124945&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9196708&hvtargid=pla-1519241764002&psc=1&language=pt_BR",
  },
  {
    id: 61,
    category: "cha",
    name: "Balança de alimentos",
    goal: 28.79,
    current: 0,
    description: "Para medir a dose de creatina.",
    image: "https://m.media-amazon.com/images/I/51UinvUFAgL._SL1200_.jpg",
    imageHint: "Balança de alimentos",
    storeUrl:
      "https://www.amazon.com.br/Balan%C3%A7a-Alimentos-Resistente-Antiderrapante-Defini%C3%A7%C3%A3o/dp/B0CX23Y6LP/ref=asc_df_B0CX23Y6LP?tag=googleshopp00-20&hvadid=709886750320&hvpos=&hvnetw=g&hvrand=4699866380119707679&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9196708&hvtargid=pla-2485896357592&psc=1&language=pt_BR",
  },
  {
    id: 62,
    category: "cha",
    name: "Tábua de queijos",
    goal: 69.99,
    current: 0,
    description: "Queijos e fanta uva.",
    image:
      "https://www.havan.com.br/media/catalog/product/cache/820af7facfa7aca6eb3c138e3457dc8d/t/a/tabua-de-queijos-bambu-havan-casa-3pecas_730625.webp",
    imageHint: "Tábua de queijos",
    storeUrl:
      "https://www.havan.com.br/tabua-de-queijos-bambu-havan-casa-3pecas-bambu/p",
  },
  {
    id: 63,
    category: "cha",
    name: "Balde de Gelo",
    goal: 199,
    current: 0,
    description: "Para dar mais privacidade e aconchego.",
    image: "https://img.camicado.com.br/item/000000000000055018/zoom/1.jpg",
    imageHint: "Balde de Gelo",
    storeUrl:
      "https://www.camicado.com.br/p/balde-de-gelo-home-style-vegas/-/A-300055018-br.lc?sku=000000000000055018",
  },
  {
    id: 65,
    category: "cha",
    name: "Amolador de facas",
    goal: 83.9,
    current: 0,
    description: "",
    image:
      "https://http2.mlstatic.com/D_Q_NP_661386-MLB97818556506_112025-F-aco-tungstnio-magnetico-rolamento-afiador-ajustavel.webp",
    storeUrl:
      "https://produto.mercadolivre.com.br/MLB-5934272508-aco-tungstnio-magnetico-rolamento-afiador-ajustavel-_JM?matt_tool=31493002&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22090354070&matt_ad_group_id=173090533636&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727882727487&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=5679225946&matt_product_id=MLB5934272508&matt_product_partition_id=2391703468697&matt_target_id=aud-1966857867496:pla-2391703468697&cq_src=google_ads&cq_cmp=22090354070&cq_net=g&cq_plt=gp&cq_med=pla&gad_campaignid=22090354070&gbraid=0AAAAAD93qcCC_JSn3MPmyQjxI7OlYHyB9",
  },

  {
    id: 68,
    category: "casamento",
    name: "Duas Banquetas",
    goal: 1200,
    current: 0,
    description: "Bater um papo no balcão",
    image:
      "https://www.havan.com.br/media/catalog/product/cache/820af7facfa7aca6eb3c138e3457dc8d/b/a/banqueta-giratoria-turim-104-cm-havan-casa_993236.webp",

    storeUrl:
      "https://www.havan.com.br/banqueta-giratoria-turim-104-cm-havan-casa-off-white/p",
  },
  {
    id: 69,
    category: "casamento",
    name: "Tapete",
    goal: 99,
    current: 0,
    description: "A criatividade pra descrição às vezes falta.",
    image: "https://m.media-amazon.com/images/I/81JkcCT1xUL._AC_SL1500_.jpg",

    storeUrl:
      "https://www.amazon.com.br/FIicy-boas-vindas-decora%C3%A7%C3%A3o-vers%C3%ADculo-aben%C3%A7oado/dp/B0DYVDKCM8",
  },
  {
    id: 70,
    category: "cha",
    name: "Ralador de queijo",
    goal: 119.99,
    current: 0,
    description: "Pra noiva não sofrer ralando o queijo do carbonara.",
    image: "https://img.camicado.com.br/item/100876202/zoom/1.jpg",

    storeUrl:
      "https://www.camicado.com.br/p/ralador-de-queijo-home-style-utile/-/A-100876190-br.lc?sku=100876202&gad_campaignid=20305907174",
  },

  {
    id: 76,
    category: "cha",
    name: "Moedor de pimenta",
    goal: 29.9,
    current: 0,
    description: "Vamos evitar comida de hospital, ok?",
    image:
      "https://down-br.img.susercontent.com/file/sg-11134201-7rd5y-luyxhsb44tyeea.webp",
    storeUrl:
      "https://shopee.com.br/product/352576129/21599235506?gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkVEdTU3BlMW9zMXB6bGYrZ0J1VEdQdUsrRmY4Y2dKOWVxMlpoMktmQ1pjR3hxdGFnM2VXS0tETlpNMFY0L0k3NlFKUGl5K3RTYWZzSHB4ODNwMTZCUXhybTVkd21MQ1JGKzJnbjBtck56Y04zQVh2cm56RnNqcnJoUzFFWG84bHZ3PT0&gad_campaignid=23451162212&gbraid=0AAAAACoEtRnIfCF3OM8SHA7e6IWKy3B-k",
  },
  {
    id: 78,
    category: "casamento",
    name: "Panela Elétrica",
    goal: 361.5,
    current: 0,
    description: "Quem sabe a gente não arrisca um sushi",
    image:
      "https://m.magazineluiza.com.br/a-static/420x420/panela-de-pressao-eletrica-digital-mondial-5l-900w-digital-master-cooker-pe-38/magazineluiza/236680400/7b4d7c601ba9dab8b092fc417f42153a.jpg",
    storeUrl:
      "https://www.magazineluiza.com.br/panela-de-pressao-eletrica-digital-mondial-5l-900w-digital-master-cooker-pe-38/p/236680400/ep/eppe/?&seller_id=magazineluiza&partner_id=83254&gad_campaignid=23347244387&gbraid=0AAAAAD4zZmTTaiBh_XdzmONnJdqGjaf4F",
  },
  {
    id: 79,
    category: "casamento",
    name: "Mesa de jantar",
    goal: 1899.98,
    current: 0,
    description: "Mesa de jantar para receber os amigos",
    image:
      "https://product-hub-prd.madeiramadeira.com.br/872306/images/20bbcb44-8222-4705-aa9f-7a0b8abd9515ilaMesaExtensC3ADvel1500px.jpg?width=700&canvas=1:1&bg-color=FFF",
    storeUrl:
      "https://www.madeiramadeira.com.br/mesa-extensivel-redonda-de-160cm-tarsila-cabecasa-madeiraoriginals-872306.html",
  },
  {
    id: 80,
    category: "casamento",
    name: "Cadeiras de jantar",
    goal: 2099.96,
    current: 0,
    description: "Cadeiras de jantar para os amigos não sentarem no chão",
    image:
      "https://product-hub-prd.madeiramadeira.com.br/975335/images/0ff529d1-5836-475a-ae42-45d12c975c0e83ffa58a9753351951500x1500.jpg?width=700&canvas=1:1&bg-color=FFF",
    storeUrl:
      "https://www.madeiramadeira.com.br/kit-4-cadeiras-sala-de-jantar-pequi-cabecasa-madeiraoriginals-975335.html",
  },
  {
    id: 82,
    category: "casamento",
    name: "Ferro de passar roupas",
    goal: 87.9,
    current: 0,
    description:
      "Ferro de passar já que a sociedade não aceita roupas amassadas",
    image:
      "https://m.magazineluiza.com.br/a-static/420x420/ferro-de-passar-a-vapor-oster-gcstbs5002-220v-base-antiaderente-200ml-filtro-anticalcario-1400w-verde/generaleletro/102650/fb90e45d3d2e95d2e53969578cea36c3.jpeg",
    storeUrl:
      "https://www.magazineluiza.com.br/ferro-de-passar-a-vapor-oster-gcstbs5002-220v-base-antiaderente-200ml-filtro-anticalcario-1400w-verde/p/gh1jd41ckd/ep/elfv/?seller_id=generaleletro",
  },

  {
    id: 84,
    category: "cha",
    name: "Funil",
    goal: 11,
    current: 0,
    description: "Para facilitar o processo de despejo de líquidos",
    image: "https://m.media-amazon.com/images/I/71V+vs9ytQL._SL1500_.jpg",
    storeUrl:
      "https://www.amazon.com.br/Conjunto-inoxid%C3%A1vel-aliment%C3%ADcio-recipientes-ferramentas/dp/B0FWXM8B83/ref=asc_df_B0FWXM8B83?tag=googleshopp00-20&hvadid=773381654827&hvpos=&hvnetw=g&hvrand=156957948833557635&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198389&hvtargid=pla-2451974827145&psc=1&language=pt_BR",
  },

  {
    id: 86,
    category: "cha",
    name: "Jogo de Sobremesa",
    goal: 55.9,
    current: 0,
    description: "Para degustar docinhos fit",
    image: "https://m.media-amazon.com/images/I/71YRKI04U2L._AC_SL1500_.jpg",
    storeUrl:
      "https://www.amazon.com.br/Conjunto-Caneladas-Elegante-Sobremesa-Resistente/dp/B0FZDFTMSB/ref=asc_df_B0FZDFTMSB?tag=googleshopp00-20&hvadid=775796362723&hvpos=&hvnetw=g&hvrand=4243411698005435754&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9196708&hvtargid=pla-2450520752853&psc=1&language=pt_BR",
  },
  {
    id: 87,
    category: "cha",
    name: "Boleira",
    goal: 159.9,
    current: 0,
    description: "Para guardar os bolos deliciosos",
    image: "https://m.media-amazon.com/images/I/51w9cESBnzL._AC_SL1000_.jpg",
    storeUrl:
      "https://www.amazon.com.br/WOLFF-Prato-Vidro-Tampa-Bangkok/dp/B0CYNBJMPZ/ref=asc_df_B0CYNBJMPZ?tag=googleshopp00-20&hvadid=709964506304&hvpos=&hvnetw=g&hvrand=7986866585619089799&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9196708&hvtargid=pla-2310963379172&psc=1&language=pt_BR",
  },
  {
    id: 88,
    category: "cha",
    name: "Porta condimentos",
    goal: 59.9,
    current: 0,
    description: "Tempeirinhos sempre a mão",
    image:
      "https://www.havan.com.br/media/catalog/product/cache/820af7facfa7aca6eb3c138e3457dc8d/j/o/jogo-de-porta-condimentos-cristal-com-suporte-plasutil_1146258.webp",
    storeUrl:
      "https://www.havan.com.br/jogo-de-porta-condimentos-cristal-com-suporte-plasutil-7-peas/p",
  },
  {
    id: 89,
    category: "cha",
    name: "Porta-guardanapo",
    goal: 28.9,
    current: 0,
    description: "Uma mesa posta nunca fez mal a ninguém",
    image: "https://m.media-amazon.com/images/I/515ddE9TmEL._AC_SL1104_.jpg",
    storeUrl:
      "https://www.amazon.com.br/Suporte-Rolos-Porta-Toalha-Passerini/dp/B07P5J5WCQ/ref=asc_df_B07P5J5WCQ?tag=googleshopp00-20&hvadid=709864975911&hvpos=&hvnetw=g&hvrand=5164868768774381459&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9196708&hvtargid=pla-985062320396&psc=1&language=pt_BR",
  },
  {
    id: 90,
    category: "cha",
    name: "Jogo de Copos",
    goal: 41.9,
    current: 0,
    description: "Para brindar os bons momentos",
    image: "https://m.media-amazon.com/images/I/61iO5Jz4WQL._AC_SL1500_.jpg",
    storeUrl:
      "https://www.amazon.com.br/Jogo-Copos-Vidro-Luxo-465ml/dp/B0FJPJ9NZ1/ref=asc_df_B0FJPJ9NZ1?tag=googleshopp00-20&hvadid=733520772620&hvpos=&hvnetw=g&hvrand=5025529259554370349&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9196708&hvtargid=pla-2442441210625&psc=1&language=pt_BR",
  },
  {
    id: 91,
    category: "cha",
    name: "Lixeira Grande de Inox",
    goal: 155.9,
    current: 0,
    description: "Para manter a cozinha limpa",
    image: "https://m.media-amazon.com/images/I/51Y2Rii0GJL._SL1280_.jpg",
    storeUrl:
      "https://www.amazon.com.br/Lixeira-Pedal-Balde-Interno-Litros/dp/B0FRJH6P1Z/ref=asc_df_B0FRJH6P1Z?tag=googleshopp00-20&hvadid=744064087802&hvpos=&hvnetw=g&hvrand=8187229579125183801&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9196708&hvtargid=pla-2442498897806&psc=1&language=pt_BR",
  },
  {
    id: 92,
    category: "cha",
    name: "Lixeira Pequena de Inox",
    goal: 38.9,
    current: 0,
    description: "Para manter o banheiro limpo",
    image: "https://m.media-amazon.com/images/I/51WL5FuUQWL._AC_SL1000_.jpg",
    storeUrl:
      "https://www.amazon.com.br/Lixeira-Redonda-Litros-Pedal-Emborrachado/dp/B08W28Z2XW/ref=asc_df_B08W28Z2XW?tag=googleshopp00-20&hvadid=709968341236&hvpos=&hvnetw=g&hvrand=18142956474129023295&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9196708&hvtargid=pla-1646777958667&psc=1&language=pt_BR",
  },
  {
    id: 93,
    category: "cha",
    name: "Porta Mantimentos",
    goal: 65.99,
    current: 0,
    description: "Para organizar a despensa",
    image: "https://m.media-amazon.com/images/I/31STxo+pzSL._AC_SL1000_.jpg",
    storeUrl:
      "https://www.amazon.com.br/Pote-Mantimentos-Metal-Linha-Sense/dp/B0D1SJY7B6?source=ps-sl-shoppingads-lpcontext&psc=1&smid=A2QLMZWZW3KIO",
  },
  {
    id: 94,
    category: "cha",
    name: "Manteigueira Francesa",
    goal: 57.9,
    current: 0,
    description: "Armazenar a manteiga com estilo",
    image: "https://m.media-amazon.com/images/I/31TByo8mr4L._AC_.jpg",
    storeUrl:
      "https://www.amazon.com.br/Manteigueira-Francesa-Redonda-Servir-Decorar/dp/B09TG5LLMS/ref=asc_df_B09TG5LLMS?tag=googleshopp00-20&hvadid=709878548112&hvpos=&hvnetw=g&hvrand=9257653954168176403&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9196708&hvtargid=pla-1645925547975&psc=1&language=pt_BR",
  },
  {
    id: 95,
    category: "cha",
    name: "Escorredor de Louças",
    goal: 118.9,
    current: 0,
    description: "Deixando o ar seco de BSB secar as louças",
    image: "https://m.media-amazon.com/images/I/71JRIdVx+xL._AC_SL1200_.jpg",
    storeUrl:
      "https://www.amazon.com.br/Decolab-Escorredor-Lou%C3%A7a-Bandeja-Talheres/dp/B0F1DRKPBL/ref=asc_df_B0F1DRKPBL?tag=googleshopp00-20&hvadid=742212429005&hvpos=&hvnetw=g&hvrand=14467424541673862981&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9196708&hvtargid=pla-2420896794858&language=pt_BR&th=1",
  },
  {
    id: 96,
    category: "cha",
    name: "Modelador de hambúrguer",
    goal: 29.9,
    current: 0,
    description: "O hambúrguer do noivo é especial.",
    image: "https://m.media-amazon.com/images/I/61sH6luMu3L._AC_SL1001_.jpg",
    storeUrl:
      "https://www.amazon.com.br/Forma-para-Moldar-Hamb%C3%BArguer-Recheado/dp/B0FS7RLRFS/ref=sr_1_3_sspa?crid=26NEPKSEB7OKH&dib=eyJ2IjoiMSJ9.KcEHDqevXNwfOmtcUQCFOL7EZLjm-66pPig-EGBCs_lBSdEFuKhWRUPf2gu5-i6XlczMHj2WBxrOconWqvkO-NfdlUaxqalKpwPqaBvSXN-ItRpaQKmt03fS_M26op4n4Ef1333HaWUkjgDa_boJxsjk3FTI730R5UKC0sCWQDi7NVy6JtWnmZLkS951-xkz-1e1_hly2HY9fwC3KyDEl20lf063hRHqCHkzbJrdugjlTood0XyqbYf5gHUzkXuXiaD2IpKz-Iy7DfHksUKsGyGCfGtm7vmJKzmThkAtQYg.TP35U5xaLQdtybAjbwu-281wvAUVrxpCS1gbCTsm9do&dib_tag=se&keywords=molde+de+hamburguer&qid=1770607244&sprefix=molde+de+,aps,315&sr=8-3-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
  },



  {
    id: 100,
    category: "cha",
    name: "Termômetro culinário",
    goal: 59.99,
    current: 0,
    description: " ",
    image: "https://m.media-amazon.com/images/I/51BwJtd-4iL._SL1000_.jpg",
    storeUrl:
      "https://www.amazon.com.br/Term%C3%B4metro-Digital-Infravermelho-Culin%C3%A1rio-Laser/dp/B0F2Z78F4J/ref=asc_df_B0F2Z78F4J?tag=googleshopp00-20&hvadid=754710229179&hvpos=&hvnetw=g&hvrand=7542002732959074299&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9196708&hvtargid=pla-2438934655905&psc=1&language=pt_BR",
  },

  {
    id: 102,
    category: "casamento",
    name: "Cadeira ergonômica",
    goal: 405.55,
    current: 0,
    description: "Home office ergonômico",
    image: "https://m.media-amazon.com/images/I/61H3dhK2+BL._AC_SL1200_.jpg",
    storeUrl:
      "https://www.amazon.com.br/escrit%C3%B3rio-ergon%C3%B4mico-independente-respir%C3%A1vel-ajust%C3%A1vel%EF%BC%88Preto/dp/B0CG8J3N2H/ref=asc_df_B0CG8J3N2H?tag=googleshopp00-20&hvadid=721185796203&hvpos=&hvnetw=g&hvrand=13589312507683787360&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9196708&hvtargid=pla-2381201824264&th=1",
  },

  {
    id: 104,
    category: "casamento",
    name: "Escada",
    goal: 159,
    current: 0,
    description: "Pro noivo trocar a lâmpada.",
    image:
      "https://cdn.leroymerlin.com.br/products/escada_aluminio_5_degraus_1,53m_120kg_prata_e_vermelho_91713286_0001_600x600.jpg",
    imageHint: "television screen",
    storeUrl:
      "https://www.leroymerlin.com.br/escada-aluminio-5-degraus-1,53m-120kg-prata-e-vermelho-reisam_91713286?region=outros&region_id=31000&gad_campaignid=23148513989&gbraid=0AAAAADkzLZ4Gc75A_O_dKdHf2CJsm5hIb",
  },


  {
    id: 109,
    category: "casamento",
    name: "Furadeira",
    goal: 132,
    current: 0,
    description: "Vruum",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_707948-MLA83202915938_042025-F.webp",
    storeUrl:
      "https://www.mercadolivre.com.br/parafusadeira-e-furadeira-a-bateria-li-ion-wap-wf-12k32-carregador-com-maleta-e-kit-de-11-acessorios/p/MLB46189259?pdp_filters=item_id:MLB4361263765&from=gshop&matt_tool=56938998&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22090193672&matt_ad_group_id=174661944604&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727914178240&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735125422&matt_product_id=MLB46189259-product&matt_product_partition_id=2388009257986&matt_target_id=aud-1966857867496:pla-2388009257986&cq_src=google_ads&cq_cmp=22090193672&cq_net=g&cq_plt=gp&cq_med=pla&gad_campaignid=22090193672&gbraid=0AAAAAD93qcA0Qxyf19azgIUHkuI5AAOTu",
  },


  {
    id: 113,
    category: "casamento",
    name: "Zester.",
    goal: 80.44,
    current: 0,
    description: "Aquela raspinha na torta de limão",
    image: "https://m.media-amazon.com/images/I/41puBWMce3L._AC_SL1200_.jpg",
    storeUrl:
      "https://www.amazon.com.br/Microplane-40020-GRATER-ZESTER/dp/B00004S7V8/ref=asc_df_B00004S7V8?tag=googleshopp00-20&hvadid=709964506241&hvpos=&hvnetw=g&hvrand=16268248562095527595&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198389&hvtargid=pla-387297469372&psc=1&language=pt_BR",
  },

  {
    id: 115,
    category: "cha",
    name: "Peneiras.",
    goal: 33.19,
    current: 0,
    description: "Coar um suquinho",
    image: "https://m.media-amazon.com/images/I/51E5IJI0JQL._AC_SL1300_.jpg",
    storeUrl:
      "https://www.amazon.com.br/Conjunto-Peneiras-Coador-Resistentes-Cozinha/dp/B0D4JMMJ9V/ref=asc_df_B0D4JMMJ9V?tag=googleshopp00-20&hvadid=709964506295&hvpos=&hvnetw=g&hvrand=880991048014220565&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198389&hvtargid=pla-2323403493036&psc=1&language=pt_BR",
  },


  {
    id: 118,
    category: "casamento",
    name: "Cesto Air Fryer oven.",
    goal: 109.5,
    current: 0,
    description: "O noivo compro a Air Fryer errada kkkkk",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_793046-MLB92669507504_092025-F.webp",
    storeUrl:
      "https://www.mercadolivre.com.br/cesto-quadrado-5l-original-p-air-fryer-mondial-oven-afo12l/up/MLBU3440026516?pdp_filters=item_id:MLB5730465458&from=gshop&matt_tool=82549977&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22120855437&matt_ad_group_id=179138689851&matt_match_type=&matt_network=g&matt_device=c&matt_creative=729092955325&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=5703590571&matt_product_id=MLBU3440026516&matt_product_partition_id=2391385612761&matt_target_id=aud-1966857867496:pla-2391385612761&cq_src=google_ads&cq_cmp=22120855437&cq_net=g&cq_plt=gp&cq_med=pla&gad_campaignid=22120855437&gbraid=0AAAAAD93qcA1I5CWteFwNqOpMMzRQWhTJ",
  },
  {
    id: 119,
    category: "cha",
    name: "Forma de silicone Air Fryer.",
    goal: 23.88,
    current: 0,
    description: "Deixar mais fácil de limpar",
    image: "https://m.media-amazon.com/images/I/61LXaniK8XL._AC_SL1500_.jpg",
    storeUrl:
      "https://www.amazon.com.br/Formas-Silicone-Quadrada-Antiaderente-18x18x5/dp/B0CY3L5XQ3/ref=asc_df_B0CY3L5XQ3?tag=googleshopp00-20&hvadid=709886750320&hvpos=&hvnetw=g&hvrand=7748593810246664989&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198389&hvtargid=pla-2295915393058&psc=1&language=pt_BR",
  },
  {
    id: 120,
    category: "casamento",
    name: "Euros para a viagem de lua de mel.",
    goal: 310,
    current: 0,
    description: "O cambio tá maluco",
    image:
      "https://images.unsplash.com/photo-1621280336935-ed7cae618aac?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 121,
    category: "casamento",
    name: "Ventilador.",
    goal: 188.9,
    current: 0,
    description: "Tufão silencioso",
    image: "https://m.media-amazon.com/images/I/8194vs7pwxL._AC_SL1500_.jpg",
    storeUrl:
      "https://www.amazon.com.br/WAP-FLOW-TURBO-Ventilador-Velocidades/dp/B0BT4Z9LZB/ref=sr_1_34?dib=eyJ2IjoiMSJ9.BQZS4_3fq_LYySH5Zp2bKZC_A00Sf3s6ehjkvJx73L8bwZh8V-rZu9W5ff76n9VLkf7dE9ByJblv7r3CgBUHwHUCSp67qxgC8t8APBVWAIpJJXoYUYRAkjUZpnsT3csFEcvSmQZaXC9iUlD9jssW2PFpe6ZjOymT3sG0NmzOvzw.XOhk9iTt0ue7VeCuRNCFPS1g7vz_JYrRMBN3z5WFjuM&dib_tag=se&qid=1771027028&s=home&sr=1-34&ufe=app_do:amzn1.fos.fcd6d665-32ba-4479-9f21-b774e276a678&xpid=BfyVrD9_kXNvL",
  },

  {
    id: 123,
    category: "cha",
    name: "Tapete de silicone.",
    goal: 25.9,
    current: 0,
    description: "Não gruda nada.",
    image: "https://m.media-amazon.com/images/I/61xruwPDxML._AC_SL1024_.jpg",
    storeUrl:
      "https://www.amazon.com.br/Culin%C3%A1rio-Silicone-Cozinhar-Americano-Antiaderente/dp/B0CSF3VK8H/ref=asc_df_B0CSF3VK8H?tag=googleshopp00-20&hvadid=709964506214&hvpos=&hvnetw=g&hvrand=14976376871228541808&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9196708&hvtargid=pla-2284583800758&psc=1&language=pt_BR",
  },
  {
    id: 124,
    category: "cha",
    name: "Grade de descanso.",
    goal: 19.9,
    current: 0,
    description: "Pro noivo errar o bolo com propriedade.",
    image: "https://m.media-amazon.com/images/I/61Z4-LfyKjL._AC_SL1000_.jpg",
    storeUrl:
      "https://www.amazon.com.br/Antiaderente-Resfriar-Biscoitos-Mimo-Style/dp/B08T6Q3KF4/ref=sr_1_1?dib=eyJ2IjoiMSJ9.QnQaz_QrPvPd94MArYP-HlobT0boS7GqQzIrCkHP_ypVnvVDV7Ab9W7uMnua1OjbKTflNoewCudh_V5ZS5Af6o21xDxb2gD77ANT5YrtSBtOpME7T6q8l7FTrnZcmsrT1MaS2vEGAZWuPmTXWhi_dGy2bsTy0Cd3QSqHp6JpQhDs9MfTrtV5GI9-L3ZIfKSjK_G1D28I8TccwbUbq3CYJxgAzFF_phVFRXM9ZzToYqFBjZGbNBHfxTTVvqkC0uPI15LEh5z4Byv5iANQBh185W-cpFuOnkOKc_4M4zxmxus.rVF3Jn9LPqduCUfK1pfYS554xAX0Md16FUn7421q300&dib_tag=se&keywords=grade+de+descanso&qid=1771554534&sr=8-1",
  },
  {
    id: 125,
    category: "cha",
    name: "Espátula culinária.",
    goal: 15.28,
    current: 0,
    description: "Aquela massa fresca.",
    image: "https://m.media-amazon.com/images/I/61wa0vESFoS._AC_SL1000_.jpg",
    storeUrl:
      "https://www.amazon.com.br/Esp%C3%A1tula-Pr%C3%A1tica-Mimo-Style-ASA1619/dp/B076JLCYFR/ref=pd_bxgy_d_sccl_1/143-0154244-4098363?pd_rd_w=TeQU4&content-id=amzn1.sym.47455c19-0288-451a-a02f-0d639e613616&pf_rd_p=47455c19-0288-451a-a02f-0d639e613616&pf_rd_r=N8451EZRB0BV1MPJ2DVF&pd_rd_wg=fOiWu&pd_rd_r=bbe8144e-48e7-48bc-a519-bf592a93ebb8&pd_rd_i=B076JLCYFR&psc=1",
  },

  {
    id: 127,
    category: "cha",
    name: "Rodinho de pia.",
    goal: 19.9,
    current: 0,
    description: "Pra deixar brilhando.",
    image: "https://m.media-amazon.com/images/I/41xoBvLmQjL._AC_SL1200_.jpg",
    storeUrl:
      "https://www.amazon.com.br/Rodo-Multiuso-Bege-Linha-Flow/dp/B0CZTTVLWK/ref=asc_df_B0CZTTVLWK?tag=googleshopp00-20&hvadid=709968341005&hvpos=&hvnetw=g&hvrand=17428490845761627483&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9197471&hvtargid=pla-2309959181970&psc=1&language=pt_BR",
  },
  {
    id: 128,
    category: "cha",
    name: "Assadeira antiaderente.",
    goal: 153.74,
    current: 0,
    description: "",
    image: "https://m.media-amazon.com/images/I/51RKjJvDP8L._AC_SL1500_.jpg",
    storeUrl:
      "https://www.amazon.com.br/Assadeiras-Alum%C3%ADnio-Revestimento-Antiaderente-Tramontina/dp/B008R7SQ40/ref=asc_df_B008R7SQ40?tag=googleshopp00-20&hvadid=709964506292&hvpos=&hvnetw=g&hvrand=11003154257735349522&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9196708&hvtargid=pla-457736022201&psc=1&language=pt_BR",
  },
  {
    id: 129,
    category: "cha",
    name: "Avental",
    goal: 28.9,
    current: 0,
    description: "Afinal de contas, não queremos sujar a roupa.",
    image: "https://m.media-amazon.com/images/I/315mLsQKgyL._AC_.jpg",
    storeUrl:
      "https://www.amazon.com.br/Avental-Oxford-Refor%C3%A7ado-Cozinha-Churrasqueiro/dp/B0D8M5C5TW/ref=asc_df_B0D8M5C5TW?tag=googleshopp00-20&hvadid=709968340999&hvpos=&hvnetw=g&hvrand=15351316072760704347&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9196708&hvtargid=pla-2382633469105&psc=1&language=pt_BR",
  },
  {
    id: 130,
    category: "cha",
    name: "Bandeja Café da manhã",
    goal: 27.9,
    current: 0,
    description: "Café na cama é vida.",
    image: "https://m.media-amazon.com/images/I/41Z7r3059eL._AC_.jpg",
    storeUrl:
      "https://www.amazon.com.br/Dobr%C3%A1vel-Multiuso-Port%C3%A1til-Infantil-Notebook/dp/B0FTQDJ18V/ref=asc_df_B0FTQDJ18V?tag=googleshopp00-20&hvadid=709878548112&hvpos=&hvnetw=g&hvrand=4400953222938412268&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9196708&hvtargid=pla-2454935586381&psc=1&language=pt_BR",
  },
  {
    id: 131,
    category: "cha",
    name: "Cesta para pão",
    goal: 69,
    current: 0,
    description: "kit com 3 cestos",
    image: "https://m.media-amazon.com/images/I/51pogfXgOYL._AC_SL1000_.jpg",
    storeUrl:
      "https://www.amazon.com.br/Mimo-Style-Organizadores-Lavanderias-Decora%C3%A7%C3%B5es/dp/B087XBSGYH/ref=asc_df_B087XBSGYH?tag=googleshopp00-20&hvadid=709968341206&hvpos=&hvnetw=g&hvrand=944985241240405123&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9196708&hvtargid=pla-936318376217&language=pt_BR&th=1",
  },
  {
    id: 132,
    category: "cha",
    name: "Cuscuzeira",
    goal: 39.9,
    current: 0,
    description: "Energia pro dia a dia.",
    image: "https://m.media-amazon.com/images/I/61jt4ZG5ONL._AC_SL1200_.jpg",
    storeUrl:
      "https://www.amazon.com.br/Cuscuzeira-Alum%C3%ADnio-Polido-Tampas-Resistentes/dp/B0F8R5B9KC/ref=asc_df_B0F8R5B9KC?tag=googleshopp00-20&hvadid=742212429005&hvpos=&hvnetw=g&hvrand=16966571738110314430&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9196708&hvtargid=pla-2423597425171&psc=1&language=pt_BR",
  },
  {
    id: 133,
    category: "cha",
    name: "Descanso de panela",
    goal: 19.9,
    current: 0,
    description: "Kit 5 descansos de panela",
    image:
      "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m8p3um7ad5vm04.webp",
    storeUrl:
      "https://shopee.com.br/product/1398327824/22898413786?gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkU1hZSjF1Ym94QW1tdXlLQVFLQ3hjN01mNmhVVGFUVHY2TURuZWFZQWt1dVp1QjRwMndoZXFJeHIxZHlUVGtwR1dqZlJKaGdLNGZ6eUdwUXRiSjkxUjRkTzl0bDhWUTVYVm9yU2N5NUpIY2hpa2RkYU96ajU3UFlLYnp0ZmxrZmNRPT0&gad_campaignid=23353217471&gbraid=0AAAAACoEtRk4RFjxBdj5aud4LxWwpI86a",
  },
  {
    id: 134,
    category: "cha",
    name: "Descascador de legumes",
    goal: 38.9,
    current: 0,
    description: "Descascador de legumes com acabamento em zinco",
    image: "https://m.media-amazon.com/images/I/41S3eyWO4IL._AC_SL1000_.jpg",
    storeUrl:
      "https://www.amazon.com.br/Descascador-Legumes-Liga-Zinco-Antiderrapante/dp/B0CH8YMR8M/ref=asc_df_B0CH8YMR8M?tag=googleshopp00-20&hvadid=709964506289&hvpos=&hvnetw=g&hvrand=11614169312440600875&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9196708&hvtargid=pla-2373772352583&psc=1&language=pt_BR",
  },
  {
    id: 135,
    category: "cha",
    name: "Porta frios",
    goal: 29.9,
    current: 0,
    description: "",
    image: "https://m.media-amazon.com/images/I/514RyVWXuQL._AC_SL1000_.jpg",
    storeUrl:
      "https://www.amazon.com.br/Pote-Herm%C3%A9tico-Divis%C3%B3rias-Escorredor-Plasutil/dp/B09YVLJ46V/ref=asc_df_B09YVLJ46V?tag=googleshopp00-20&hvadid=709964506241&hvpos=&hvnetw=g&hvrand=179438211716724328&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9196708&hvtargid=pla-1885716833412&psc=1&language=pt_BR",
  },
  {
    id: 136,
    category: "cha",
    name: "Potes de vidro",
    goal: 70,
    current: 0,
    description: "Kit com 5 potes de vidro",
    image: "https://m.media-amazon.com/images/I/81gk+30f37L._AC_SL1500_.jpg",
    storeUrl:
      "https://www.amazon.com.br/Potes-Vidro-Retangular-Tampa-Herm%C3%A9tica/dp/B08CPLKQ32/ref=asc_df_B08CPLKQ32?tag=googleshopp00-20&hvadid=721185796203&hvpos=&hvnetw=g&hvrand=7516904244720523447&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9196708&hvtargid=pla-2381201824264&psc=1",
  },
  {
    id: 137,
    category: "cha",
    name: "Pincel de silicone",
    goal: 8.9,
    current: 0,
    description: "",
    image: "https://m.media-amazon.com/images/I/41Z0UT4nPHL._AC_SL1000_.jpg",
    storeUrl:
      "https://www.amazon.com.br/Pincel-Silicone-Mimo-Style-SN1740P/dp/B07D1LNHMJ/ref=asc_df_B07D1LNHMJ?tag=googleshopp00-20&hvadid=709964506214&hvpos=&hvnetw=g&hvrand=1300099075161196214&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9196708&hvtargid=pla-852472587985&language=pt_BR&th=1",
  },
  {
    id: 138,
    category: "cha",
    name: "Conjunto de pegadores",
    goal: 28.9,
    current: 0,
    description: "",
    image: "https://m.media-amazon.com/images/I/51JIIz0PfML._AC_SL1024_.jpg",
    storeUrl:
      "https://www.amazon.com.br/Conjunto-Pegadores-Inox-20cm-Pe%C3%A7as/dp/B0FTNSBXYR/ref=asc_df_B0FTNSBXYR?tag=googleshopp00-20&hvadid=709964506283&hvpos=&hvnetw=g&hvrand=10105438831586029752&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9196708&hvtargid=pla-2449795199990&psc=1&language=pt_BR",
  },
  {
    id: 139,
    category: "cha",
    name: "Cabides",
    goal: 56.84,
    current: 0,
    description: "Jogo com 50 cabides",
    image:
      "https://m.magazineluiza.com.br/a-static/420x420/kit-50-cabide-de-veludo-adulto-ultra-fino-antideslizante-kontuz-home/nawebutilidade/cab50-01/479dc17ce0f5250c83436268ed0ff1ae.jpeg",
    storeUrl:
      "https://www.magazineluiza.com.br/kit-50-cabide-de-veludo-adulto-ultra-fino-antideslizante-kontuz-home/p/bae6dh6g79/ud/caro/?&seller_id=nawebutilidade&partner_id=83242&gad_campaignid=23346818141&gbraid=0AAAAAD4zZmRZIfuTk12nwgrDmC0lXy0QO",
  },
  {
    id: 140,
    category: "cha",
    name: "Tábua de passar roupa",
    goal: 156.84,
    current: 0,
    description: "Deixar tudo lisinho",
    image: "https://m.media-amazon.com/images/I/312oxn3VZ0L._AC_.jpg",
    storeUrl:
      "https://www.amazon.com.br/T%C3%A1bua-Passar-Roupa-Extra-Dobr%C3%A1vel/dp/B0CHG1M88Y/ref=asc_df_B0CHG1M88Y?tag=googleshopp00-20&hvadid=709964506235&hvpos=&hvnetw=g&hvrand=2145285726155273880&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9197471&hvtargid=pla-2244489947747&psc=1&language=pt_BR",
  },
  {
    id: 141,
    category: "cha",
    name: "Prensa francesa",
    goal: 23.29,
    current: 0,
    description: "Aquele cafezinho da tarde",
    image: "https://m.media-amazon.com/images/I/41VP6123-BS._AC_SL1000_.jpg",
    storeUrl:
      "https://www.amazon.com.br/Mimo-Style-AFP350-CAFETEIRA-FRANCESA/dp/B07TBHLGQT/ref=asc_df_B07TBHLGQT?tag=googleshopp00-20&hvadid=709964506256&hvpos=&hvnetw=g&hvrand=12972529490692218585&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9197471&hvtargid=pla-902619401228&language=pt_BR&th=1",
  },

  {
    id: 148,
    category: "casamento",
    name: "Passeio na Lua de Mel",
    goal: 100,
    current: 0,
    description: "Ajude-nos a ter uma lua de mel inesquecível!",
    image:
      "https://fastly.picsum.photos/id/49/1280/792.jpg?hmac=NnUJy0O9-pXHLmY2loqVs2pJmgw9xzuixgYOk4ALCXU",
    imageHint: "honeymoon travel",
  },
  {
    id: 149,
    category: "casamento",
    name: "Passeio na Lua de Mel",
    goal: 100,
    current: 0,
    description: "Ajude-nos a ter uma lua de mel inesquecível!",
    image:
      "https://fastly.picsum.photos/id/49/1280/792.jpg?hmac=NnUJy0O9-pXHLmY2loqVs2pJmgw9xzuixgYOk4ALCXU",
    imageHint: "honeymoon travel",
  },
  {
    id: 150,
    category: "casamento",
    name: "Passeio na Lua de Mel",
    goal: 100,
    current: 0,
    description: "Ajude-nos a ter uma lua de mel inesquecível!",
    image:
      "https://fastly.picsum.photos/id/49/1280/792.jpg?hmac=NnUJy0O9-pXHLmY2loqVs2pJmgw9xzuixgYOk4ALCXU",
    imageHint: "honeymoon travel",
  },



  {
    id: 155,
    category: "casamento",
    name: "Euros para a viagem de lua de mel.",
    goal: 300,
    current: 0,
    description: "O cambio tá maluco",
    image:
      "https://images.unsplash.com/photo-1621280336935-ed7cae618aac?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

];

