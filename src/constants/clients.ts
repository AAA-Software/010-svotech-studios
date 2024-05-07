export const clients = [...new Array(5)].map((client, index) => ({
  href: `/clients/${index + 1}.png`,
}));
