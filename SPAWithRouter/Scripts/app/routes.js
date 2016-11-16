define({
    /* TODO: add all client side routes
     If using HTML5 history (real URLs instead of hashes),
     remember to modify the server side 404 responder to return index.html as the response and change response code to 200. */
    /* *
    *  Notes on routes definitions:
    *
    *  order by dictionary
    *  group by top-level dictionary (1st url path component)
    *
    *  mapping:
    *  '<root-relative url>': '<page module definition>[ page module's corresponding controller]'
    *
    *  notes: 1. slash (/) in url is converted to underscore (_) in page module definition; dash (-) in url is retained as is (-) in page module definition
    *         2. page module's JS file should be defined as a named AMD module with CamelCase as the module alias, e.g: my_page-name -> MyPageName
    *         3. controller is optional but most likely needed unless there are no other internal links (url change but page doesn't) on the page
    *         4. controller name should be the same as the dynamic part of the url and starting with root (/);
    *            in the rare cases where page module definition has different value than the 1 url path component then controller name should match the whole url
    * */
    //error
    // '/error404/:code': 'Error /:code',

    // //helpconsumer
    // '/SelfService/HelpConsumer': 'HelpConsumer',

    // //settings Consumer
    // '/SelfService/SettingConsumer': 'SettingsConsumer /',

    // //customer dashboard
    // '/SelfService/CustomerDashboard': 'CustomerDashboard /',

    // //personal info Consumer
    // '/SelfService/PersonalInfoConsumer': 'PersonalInfoConsumer /',


    // // money transfer Consumer
    // '/SelfService/MoneyTransferConsumer/StartPositionCode/:startPositionCode': 'MoneyTransferConsumer /StartPositionCode/:startPositionCode',
    // '/SelfService/MoneyTransferConsumer/:receiptNumber': 'MoneyTransferConsumer /:receiptNumber',
    // '/SelfService/MoneyTransferConsumer/:receiptNumber/:receiverCardHolderId': 'MoneyTransferConsumer /:receiptNumber/:receiverCardHolderId',

    // '/SelfService/BillPayConsumer/StartPositionCode/:startPositionCode': 'BillPayConsumer /StartPositionCode/:startPositionCode',
    // '/SelfService/BillPayConsumer/:receiptNumber': 'BillPayConsumer /:receiptNumber',
    // '/SelfService/BillPayConsumer/:billingAccountId/:accountType': 'BillPayConsumer /:billingAccountId/:accountType',

    // '/SelfService/ExchangeRatesConsumer': 'ExchangeRatesConsumer',
    // '/SelfService/ReferralLandingConsumer': 'ReferralLandingConsumer',
    // '/SelfService/ReferralHistoryConsumer': 'ReferralHistoryConsumer',
    // '/SelfService/ReferralViaEmailConsumer': 'ReferralViaEmailConsumer',
    // '/SelfService/ReferralHelperConsumer': 'ReferralHelperConsumer',

    // '/SelfService/AccountConsumer': 'AccountConsumer /',
    //'/SelfService/AccountConsumer/:receiptNumber': 'AccountConsumer /:receiptNumber',

    // '/SelfService/IncreaseLimitConsumer': 'IncreaseLimitConsumer',
    // '/SelfService/UpgradeLevelConsumer/:levelUpgradeType': 'UpgradeLevelConsumer /:levelUpgradeType',
    // '/SelfService/UpgradeViaEmailConsumer': 'UpgradeViaEmailConsumer',
    // //bill pay lcr
    // '/SelfService/BillPayLCRConsumer/StartPositionCode/:startPositionCode': 'BillPayLCRConsumer /StartPositionCode/:startPositionCode',
    // '/SelfService/BillPayLCRConsumer/:receiptNumber': 'BillPayLCRConsumer /:receiptNumber',
    // '/SelfService/BillPayLCRConsumer/:receiptNumber/:billingAccountId': 'BillPayLCRConsumer /:receiptNumber/:billingAccountId',

    // //top ups reload Consumer
    // '/SelfService/TopUpsReloadConsumer/StartPositionCode/:startPositionCode': 'TopUpsReloadConsumer /StartPositionCode/:startPositionCode',
    // '/SelfService/TopUpsReloadConsumer/:receiptNumber/:billingAccountId': 'TopUpsReloadConsumer /:receiptNumber/:billingAccountId',

    // //top ups pinless Consumer
    // '/SelfService/TopUpsPinlessConsumer/StartPositionCode/:startPositionCode': 'TopUpsPinlessConsumer /StartPositionCode/:startPositionCode',
    // '/SelfService/TopUpsPinlessConsumer/:receiptNumber/:billingAccountId': 'TopUpsPinlessConsumer /:receiptNumber/:billingAccountId',

    // //top ups purchase Consumer
    // '/SelfService/TopUpsPurchaseConsumer/StartPositionCode/:startPositionCode': 'TopUpsPurchaseConsumer /StartPositionCode/:startPositionCode',
    // '/SelfService/TopUpsPurchaseConsumer/:receiptNumber': 'TopUpsPurchaseConsumer /:receiptNumber',

    // //fee calculator.
    //'/SelfService/FeeCalculatorConsumer': 'FeeCalculatorConsumer /',
    '/a': 'a /',
    '/b': 'b /',
    '/spa/SpaPage': 'a /'
    //'/SelfService/AccountConsumer/:receiptNumber': 'AccountConsumer /:receiptNumber',
});
