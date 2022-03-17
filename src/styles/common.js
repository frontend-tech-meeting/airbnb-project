const flex = (direction = 'row', justify = 'center', align = 'center') => `
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
`;

const common = { flex };

export default common;
