describe('My first suite tests E2E', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  /* 
  beforeEach(async () => {
    await device.reloadReactNative();
  });
  */

  it('should have info about cancel subscription', async () => {
    //const info = await element(by.text('Efootball')); // Para simular error
    const info = await element(by.text('Cancel anytime. Ofter terms apply.'));
    await expect(info).toBeVisible();
  });

  it('should subscribe to the premium plan', async() => {
    await element(by.id('option-premium')).tap();
    //await new Promise((r) => setTimeout(r, 2000)); // Delay de etapas
    await element(by.id('input-email')).typeText('bruno@gmail.com');
    await element(by.id('keyboard')).tap();
    await element(by.id('button-subscribe')).tap();
    await device.takeScreenshot('snapshot-premium-plan-text');
    await expect(element(by.id('confirmation-message'))).toBeVisible();
    await new Promise((r) => setTimeout(r, 5000));
  });

});
