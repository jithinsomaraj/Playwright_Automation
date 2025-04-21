import { config } from '../../support/config';
import { BasePage } from '../../utils/BasePage';
import { Locator, Page } from '@playwright/test';


export default class ClientTicketPurchase extends BasePage {
    page: Page;
    loc_BuyTicket_Btn: Locator;
    loc_TermsAndConditions_Btn: Locator;
    loc_AgeConditions_Btn: Locator;
    loc_DisclosureConditions_Btn: Locator;

    loc_ProceedTopaymen_Btn: Locator;

    loc_Ticketcountfor2set_Btn: Locator;
    loc_Ticketcountfor20set_Btn: Locator;
    loc_Client_subtotalXpath_Label: string;
    formattedTotalArray: string[] = [];

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.loc_BuyTicket_Btn = page.getByRole('button', { name: 'チケットを購入する' });
        this.loc_Ticketcountfor2set_Btn = this.page.locator("//div[@id='mui-component-select-setOf2Tickets']");
        this.loc_Ticketcountfor20set_Btn = this.page.locator("//div[@id='mui-component-select-setOf20Tickets']");
        this.loc_TermsAndConditions_Btn = page.getByTestId('agree-terms-1');
        this.loc_AgeConditions_Btn = page.getByTestId('agree-terms-2');
        this.loc_DisclosureConditions_Btn = page.getByTestId('agree-terms-3');
        this.loc_ProceedTopaymen_Btn = page.getByTestId('submit-button');
        this.loc_Client_subtotalXpath_Label = '//*[text()="合計"]/following::*[contains(text(),"value")]'
    }


    public async navigateToTicketPurchasePage() {
        this.waitForSecond(3);
        await this.page.goto(config.ticketPurchasePageURL);
    }
    public async selectticketcountfor2set() {
        await this.loc_Ticketcountfor2set_Btn.click();
        const desiredOption = this.page.locator("//li[normalize-space()='5']");
        await desiredOption.click();
        await this.waitForSecond(3);

    }

    public async selectticketcountfor20set() {

        await this.loc_Ticketcountfor20set_Btn.click();
        const desiredOption = this.page.locator("//li[normalize-space()='5']");
        await desiredOption.click();
        await this.waitForSecond(3);

    }
    public async clickBuyTicketButton() {
        await this.loc_BuyTicket_Btn.click();

    }
    public async clickTermsAndConditionsButton() {
        await this.loc_TermsAndConditions_Btn.click();

    }
    public async clickageConditionsButton() {
        await this.loc_AgeConditions_Btn.click();

    }

    public async clickdisclosureConditionsButton() {
        await this.loc_DisclosureConditions_Btn.click();

    }




    public async verifySubtotalInTicketPage() {
        let Countset2 = 5
        let Countset20 = 5

        const total = Countset2 * 66000 + Countset20 * 550000
        function formatNumberWithComma(number: number) {
            return number.toLocaleString('en-IN', { useGrouping: false }).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        }

        const formattedTotal = formatNumberWithComma(total);
        this.formattedTotalArray.push(formattedTotal);
        const dynamicSubtotalXpath = this.loc_Client_subtotalXpath_Label.replace('value', formattedTotal.toString());
        const subtotalLocator = this.page.locator(dynamicSubtotalXpath);
        console.log(subtotalLocator);
        await this.locatorShouldBePresent(subtotalLocator);
        this.waitForSecond(3);

    }
    public async clickProceedTopaymentButton() {
        await this.loc_ProceedTopaymen_Btn.click();
        this.waitForSecond(2)

    }

}