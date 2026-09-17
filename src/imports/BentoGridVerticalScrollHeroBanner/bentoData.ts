import imgModeloVivo41 from "./fa55f0d5a0d38553c96fa3868c21e2d03d5059d2.png";
import imgModeloVivo91 from "./c97a489900de7049ab1af5a41c833b54faa18ef3.png";
import imgNaoFale11 from "./d2e7fff7c06f797ee2df1799e9adf002c7ac0978.png";
import imgSaturno11 from "./webp/34aefeaf36b4ca18c8a894382fc4d73849990d94.webp";
import imgVoceps1 from "./webp/31b987d48b55ae0d380d55b606e724bf3544c6c9.webp";
import imgWhatsapp11 from "./45682f0bb42f52ea25e7afb65882323223f373c9.png";
import imgDwfil1 from "./webp/58c297329c1ac1ecf8640cf710a833d5b9f66889.webp";
import imgMockupBrujas1 from "./webp/5c23cdb286671bb32713c9f44d544e5992214dee.webp";
import imgOlivia1 from "./webp/706f235535651ea82b8a8ee21a4ce6f6b071afdc.webp";
import imgSaturno21 from "./webp/48098828d3da16fd14d65dea3adf57a6afbf4b07.webp";
import img11 from "./webp/a494829f78b94076d42063c7cac197ac956da5af.webp";
import img4OpacidadeEMato1 from "./webp/466c4a25c909f31cd0e89bf07738181956d6233d.webp";
import imgAdesivoLetrasrusso1 from "./7774c8e140efc679559acec7c8a3edf4b50d42de.png";
import imgArtboard11 from "./0eec0ec8fed9b99dbb7705f92d2bcc8069a82024.png";
import imgBlase21 from "./webp/b2b15ef80d9af22949f9aad71867e2ff81733955.webp";
import imgComeover3Png1 from "./62d3e9647c7fbdfee3411f2a2e79efdcf75db302.png";
import imgFerida1 from "./webp/24a5be9b0cdcced0649b79b79e9846387dc13b6c.webp";
import imgGarfoEmDiaDeSopa1 from "./webp/f74b5cbae58aea17716137638b3554e7220d5a8d.webp";
import imgInstagramPost481 from "./826741a0e1807a5e3d2faa029f10533d19676b4c.png";
import imgInstagram11 from "./5a92885aea90ab3737a6da74d5cc2d679de2ec9c.png";
import imgInternet1 from "./webp/c6846af0cd20c49df3e5bc7683e2d9284ace4d0c.webp";
import imgMockupposterfinal1 from "./webp/1c2e7bb5772e3f1e4e1b66b067a2e27c830c1bfc.webp";
import imgPlenaMock1 from "./webp/3bf02a77c104a53c65dbc421ef258ee25a8e3185.webp";
import imgPosterSab1 from "./webp/04642ce666e1ebe1f353055c84e7a66ed9ed48ac.webp";
import imgTruman2Postar1 from "./webp/e009d3f2ee7824ea26946910f14ad0fca7a38920.webp";
import imgVillageMock1 from "./webp/c03d2627e48623155db261670d164eeb04aecb75.webp";
import imgIlha21 from "./webp/64afe0d58fb470265c3455222edb0766c8da5baf.webp";
import imgModeloVivo51 from "./faca351fef57aa4893b6ce3fd72f351f4479a862.png";
import imgModeloVivo11 from "./ca6e8e5ef32a3ac46e6d1108e36c51eec4d300da.png";
import imgModeloVivo31 from "./9c091ab4bf46899772bcfbea55bd6bd9fea63636.png";

export type BentoItem = {
  id: string;
  image: string;
  x: number;
  y: number;
  width: number;
  height: number;
  crop?: {
    width: string;
    height: string;
    left: string;
    top: string;
  };
};

export const bentoItems: BentoItem[] = [
  {
    id: "modelo-vivo4-1",
    image: imgModeloVivo41,
    x: 1475,
    y: 1451,
    width: 1381,
    height: 1644,
    crop: {
      width: "127.26%",
      height: "133.61%",
      left: "-17.21%",
      top: "0",
    },
  },
  {
    id: "modelo-vivo9-1",
    image: imgModeloVivo91,
    x: 3200,
    y: 4920,
    width: 1043,
    height: 2030,
    crop: {
      width: "155.7%",
      height: "100%",
      left: "-36.24%",
      top: "0",
    },
  },
  {
    id: "nao-fale1-1",
    image: imgNaoFale11,
    x: 6,
    y: 1842,
    width: 1418,
    height: 1418,
  },
  {
    id: "saturno-1-1",
    image: imgSaturno11,
    x: 2921,
    y: 1451,
    width: 1316,
    height: 1644,
  },
  {
    id: "voceps-1-1",
    image: imgVoceps1,
    x: 0,
    y: 18327,
    width: 2504,
    height: 3130,
  },
  {
    id: "whatsapp1-1",
    image: imgWhatsapp11,
    x: 0,
    y: 5543,
    width: 1418,
    height: 1418,
  },
  {
    id: "dwfil-1-1",
    image: imgDwfil1,
    x: 6,
    y: 0,
    width: 1418,
    height: 1772,
  },
  {
    id: "mockup-brujas-1-1",
    image: imgMockupBrujas1,
    x: 1247,
    y: 15022,
    width: 1891,
    height: 1234,
    crop: {
      width: "106.26%",
      height: "122.12%",
      left: "-4.87%",
      top: "-10.68%",
    },
  },
  {
    id: "olivia-1-1",
    image: imgOlivia1,
    x: 0,
    y: 17373,
    width: 1156,
    height: 879,
    crop: {
      width: "100%",
      height: "186.01%",
      left: "0",
      top: "0",
    },
  },
  {
    id: "saturno-2-1",
    image: imgSaturno21,
    x: 1475,
    y: 4920,
    width: 1624,
    height: 2030,
  },
  {
    id: "1-1",
    image: img11,
    x: 0,
    y: 7046.44,
    width: 1831,
    height: 2290,
  },
  {
    id: "4-opacidade-e-mato-1",
    image: img4OpacidadeEMato1,
    x: 1935,
    y: 7046,
    width: 2308,
    height: 1731,
  },
  {
    id: "adesivo_letrasrusso-1",
    image: imgAdesivoLetrasrusso1,
    x: 1475,
    y: 2,
    width: 2762,
    height: 1380,
  },
  {
    id: "artboard-1-1",
    image: imgArtboard11,
    x: 1475,
    y: 3175,
    width: 2768,
    height: 1648,
    crop: {
      width: "100%",
      height: "111.96%",
      left: "0",
      top: "-11.96%",
    },
  },
  {
    id: "blase2-1-1",
    image: imgBlase21,
    x: 6,
    y: 3350,
    width: 1412,
    height: 2103,
    crop: {
      width: "119.15%",
      height: "100%",
      left: "-7.68%",
      top: "0",
    },
  },
  {
    id: "comeover3png-1",
    image: imgComeover3Png1,
    x: 0,
    y: 10904,
    width: 1832,
    height: 2605,
    crop: {
      width: "113.8%",
      height: "100.02%",
      left: "-6.89%",
      top: "0",
    },
  },
  {
    id: "ferida 1",
    image: imgFerida1,
    x: 2594,
    y: 18327,
    width: 1649,
    height: 2061,
  },
  {
    id: "garfo-em-dia-de-sopa-1",
    image: imgGarfoEmDiaDeSopa1,
    x: 1935,
    y: 8895,
    width: 2308,
    height: 2885,
  },
  {
    id: "instagram-post-48-1",
    image: imgInstagramPost481,
    x: 3228,
    y: 11859,
    width: 1015,
    height: 1269,
  },
  {
    id: "instagram1-1",
    image: imgInstagram11,
    x: 1247,
    y: 16353,
    width: 1899,
    height: 1899,
  },
  {
    id: "internet-1-1",
    image: imgInternet1,
    x: 3228,
    y: 17303,
    width: 1015,
    height: 949,
    crop: {
      width: "115.15%",
      height: "153.9%",
      left: "-8%",
      top: "-0.03%",
    },
  },
  {
    id: "mockupposterfinal 1",
    image: imgMockupposterfinal1,
    x: 1935,
    y: 11859,
    width: 1203,
    height: 1650,
    crop: {
      width: "182.83%",
      height: "100%",
      left: "-47.73%",
      top: "0",
    },
  },
  {
    id: "plena-mock-1",
    image: imgPlenaMock1,
    x: 1247,
    y: 13593,
    width: 1891,
    height: 1345,
  },
  {
    id: "poster-sab-1",
    image: imgPosterSab1,
    x: 0,
    y: 9433,
    width: 1832,
    height: 1374,
  },
  {
    id: "truman2-postar-1",
    image: imgTruman2Postar1,
    x: -28,
    y: 13593,
    width: 1205.091,
    height: 1506.364,
  },
  {
    id: "village-mock-1",
    image: imgVillageMock1,
    x: 0,
    y: 21545,
    width: 2504,
    height: 1767,
    crop: {
      width: "100%",
      height: "106.28%",
      left: "0",
      top: "-6.28%",
    },
  },
  {
    id: "ilha2-1",
    image: imgIlha21,
    x: 3228,
    y: 15797,
    width: 1015,
    height: 1446,
    crop: {
      width: "114.01%",
      height: "100.02%",
      left: "-7.76%",
      top: "0",
    },
  },
  {
    id: "modelo-vivo-5-1",
    image: imgModeloVivo51,
    x: 3228,
    y: 13217,
    width: 1015,
    height: 2466,
    crop: {
      width: "228.24%",
      height: "117.41%",
      left: "-65.72%",
      top: "-2.88%",
    },
  },
  {
    id: "modelo-vivo-1-1",
    image: imgModeloVivo11,
    x: 0,
    y: 15227,
    width: 1156,
    height: 2057,
    crop: {
      width: "142.31%",
      height: "100%",
      left: "-21.56%",
      top: "0",
    },
  },
  {
    id: "modelo-vivo-3-1",
    image: imgModeloVivo31,
    x: 2594,
    y: 20486,
    width: 1649,
    height: 2826,
    crop: {
      width: "137.11%",
      height: "100.01%",
      left: "-28.39%",
      top: "0",
    },
  },
];