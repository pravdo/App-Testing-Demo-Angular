export class MockCartService {
  getProducts() {
    return [
      {
        id: 2,
        name: 'Appium',
        price: 699,
        quantity: 1,
        status: '2 left',
        description: 'this course help us to understand automation testing',
        imgaddress:
          'https://www.gartner.com/imagesrv/peer-insights/vendors/logos/appium.png',
      },
      {
        id: 3,
        name: 'Devops',
        price: 299,
        quantity: 1,
        status: '4 left',
        description: 'this course help us to understand automation testing',
        imgaddress:
          'https://learn.microsoft.com/en-us/devops/_img/devops-lifecycle.png',
      },
    ];
  }
}
