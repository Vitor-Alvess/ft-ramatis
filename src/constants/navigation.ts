export interface INavigationItem {
  name: string;
  href: string;
}

export const navigation: INavigationItem[] = [
  { name: "Início", href: "/" },
  { name: "Sobre", href: "/sobre" },
  { name: "Serviços", href: "/servicos" },
  { name: "Matrícula", href: "/matricula" },
  { name: "Loja", href: "/loja" },
  { name: "Doações", href: "/doacoes" },
  { name: "Transparência", href: "/transparencia" },
  { name: "Contato", href: "/contato" },
  { name: "Fotos", href: "/fotos" },
];
