export const tabs = () => [
  { id: '0001', title: 'Title 1', description: "<p>Description here</p>" },
  { id: '0010', title: 'Title 2', description: "<p>Description here</p>" },
  { id: '0101', title: 'Title 3', description: "<p>Description here</p>", media: "fake://img.con" }
];


export const tabGroup = () => ({
  tabs: tabs()
});