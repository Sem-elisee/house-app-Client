import * as z from "zod";

const ElementShema = z.object({
  title: z.string(),
  icon: z.any(),
  desc: z.string(),
  desc1: z.string(),
});

type ElementShema = z.infer<typeof ElementShema>;

export const ElementPay: ElementShema[] = [
  {
    title: "FREE SHOPPING",
    desc: "free shopping on git oders",
    desc1: "from USA",
    icon: "/livraison.png",
  },
  {
    title: "SECURE PAYMENT",
    desc: "we after sofa shopping",
    desc1: "garantise",
    icon: "/carte-de-credit.png",
  },
  {
    title: "100% SATISFACTION",
    desc: "14 day money back",
    desc1: "garantise",
    icon: "/portefeuille.png",
  },
];

// Data of AdminElement

const SpaceAdminShema = z.object({
  name: z.string(),
  image: z.any(),
  link: z.string(),
});

type SpaceAdminShema = z.infer<typeof SpaceAdminShema>;

export const elementAdmin: SpaceAdminShema[] = [
  { name: "Dashboard", image: "/grid.png", link: "dashboard" },
  { name: "Customer", image: "/groupe.png", link: "customer" },
  { name: "Order", image: "/carte-de-shopping.png", link: "order" },
  { name: "Stock", image: "/graphique.png", link: "stock" },
];

export const element2: { name: string; image: string; link: string }[] = [
  { name: "Supplier", image: "/groupe.png", link: "supplier" },
  // { name: "orderOnline", image: "/commande-en-ligne.png", link: "orderonline" },
  { name: "Setting", image: "/parametres-cog1.png", link: "setting" },
];

export const PagesLink: { id: number; link: string; name: string }[] = [
  { id: 0, link: "Design", name: "Design" },
  { id: 1, link: "Company", name: "Company" },
  { id: 2, link: "ourstore", name: "Our store" },
  { id: 3, link: "Contact", name: "Contact" },
];

export const categotyClient: { id: number; title: string }[] = [
  { id: 1, title: "PhysicsCust" },
  { id: 2, title: "OnlineCust" },
];
export const Order: { id: number; title: string }[] = [
  { id: 1, title: "PhysicsOrder" },
  { id: 2, title: "OnlineOrder" },
];
export const categotySupplier: { id: number; title: string }[] = [
  { id: 1, title: "PhysicsSupplier" },
  { id: 2, title: "OnlineSupplier" },
];

export const Trending: {
  name: string;
  image: string;
  WIDTH: number;
  HEIGHT: number;
  price: number;
  newPrice?: number;
  desc: string;
}[] = [
  {
    name: "Grey Table",
    image: "/Image8 (2).png",
    WIDTH: 48,
    HEIGHT: 30,
    price: 122,
    newPrice: 140,
    desc: "",
  },
  {
    name: "Modern Chair",
    image: "/image (3).png",
    WIDTH: 40,
    HEIGHT: 30,
    price: 130,
    newPrice: 150,
    desc: "",
  },
  {
    name: "Classic Holorge",
    image: "/Image8 (4).png",
    WIDTH: 35,
    HEIGHT: 28,
    price: 85,
    newPrice: 100,
    desc: "",
  },
  {
    name: "Table Classic Chair",
    image: "/Image8 (6).png",
    WIDTH: 80,
    HEIGHT: 60,
    price: 170,
    newPrice: 199,
    desc: "",
  },
];

export const Accessoiry: { id: number; image: string; name: string }[] = [
  { id: 1, image: "/etiqueter(1).png", name: "Sale" },
  { id: 2, image: "/sofa(2).png", name: "Small sofa" },
  { id: 3, image: "/oreiller.png", name: "Pillow" },
  { id: 4, image: "/palette-de-peinture.png", name: "Painting art" },
  { id: 5, image: "/sofa(1).png", name: "Long safa" },
  { id: 6, image: "/table-de-chevet.png", name: "Nightstand" },
  { id: 7, image: "/hotel.png", name: "Beds" },
  { id: 8, image: "/chaise.png", name: "Chairs" },
  { id: 9, image: "/lampe-de-table.png", name: "Table lamp" },
];

export const Payment: { id: number; image: string }[] = [
  { id: 1, image: "/payment1.png" },
  { id: 2, image: "/payment2.png" },
  { id: 3, image: "/payment3.png" },
  { id: 4, image: "/payment4.png" },
];
