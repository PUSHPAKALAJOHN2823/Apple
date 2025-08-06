import React from "react";

function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-200">
            {/* Legal Text Section */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="text-xs text-gray-600 leading-relaxed space-y-4">
                    <p>
                        ◊No Cost EMI is available with the purchase of an eligible product made using qualifying cards on 3-, 6-, 9- or 12-month tenures from most leading card issuers. Eligible AirPods, HomePod and Beats products are available with No Cost EMI on 3- and 6-month tenures only. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your card issuer, subject to your card issuer's terms and conditions. Minimum order spend applies as per your card issuer's threshold. No Cost EMI is not available to business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card issuer. Offer may be revised or withdrawn at any time without any prior notice. Terms apply.
                    </p>
                    <p>
                        Representative example: A purchase of ₹79900.00 repaid over 12 months with an interest rate of 15.99% p.a. and No Cost EMI savings of ₹6514.00 requires monthly payments of ₹6658.00. Total amount payable: ₹79900.00.
                    </p>
                    <p>
                        ‡Instant cashback is available with the purchase of an eligible product with qualifying American Express, Axis Bank and ICICI Bank cards only. Minimum transaction value of ₹10001.00 applies. Click here to see instant cashback amounts and eligible devices. Instant cashback is available for up to two orders per rolling 90-day period with an eligible card. Card eligibility is subject to terms and conditions between you and your card issuer. Total transaction value is calculated after any trade-in credit or eligible discount is applied. Any subsequent order adjustment(s) or cancellation(s) may result in instant cashback being recalculated, and any refund may be adjusted to account for instant cashback clawback; this may result in no refund being made to you. Offer may be revised or withdrawn at any time without any prior notice. Additional terms apply. Instant cashback is not available to Business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Multiple separate orders cannot be combined for instant cashback.
                    </p>
                    <p>
                        *Apple Education Pricing is available to current and newly accepted college students and their parents, as well as teachers and staff at all levels. For more information, visit apple.com/in-edu/store.
                    </p>
                    <p>
                        1. Qualified Purchasers can receive Promotion Savings when they purchase an eligible Mac or iPad with their choice of a Promotion Product at a Qualifying Location. Customers will be charged for all items in their cart, including the Promotion Product. Only one Promotion Product can be obtained per eligible Mac or iPad per Qualified Purchaser. The offer is subject to availability, while supplies last. View full terms and conditions of offer here.
                    </p>
                    <p>
                        2. Available in two models: AirPods 4 and AirPods 4 with Active Noise Cancellation.
                    </p>
                    <p>
                        Apple Intelligence is available in beta on all iPhone 16 models, iPhone 15 Pro, iPhone 15 Pro Max, iPad mini (A17 Pro), and iPad and Mac models with M1 and later, with Siri and device language set to the same supported language, as part of an iOS 18, iPadOS 18 and macOS Sequoia software update. Supported languages include English, French, German, Italian, Portuguese (Brazil), Spanish, Japanese, Korean and Chinese (Simplified). More languages are coming over the course of the year, including Vietnamese. Some features may not be available in all regions or languages.
                    </p>
                    <p>
                        A subscription is required for Apple TV+.
                    </p>
                    <p>
                        Features are subject to change. Some features, applications and services may not be available in all regions or all languages.
                    </p>
                </div>
            </div>

            {/* Navigation Links Section */}
            <div className="max-w-7xl mx-auto px-4 pb-8">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    {/* Shop and Learn */}
                    <div>
                        <h3 className="text-xs font-semibold text-gray-900 mb-3">Shop and Learn</h3>
                        <ul className="space-y-2 text-xs text-gray-600">
                            <li><a href="#" className="hover:text-gray-900">Store</a></li>
                            <li><a href="#" className="hover:text-gray-900">Mac</a></li>
                            <li><a href="#" className="hover:text-gray-900">iPad</a></li>
                            <li><a href="#" className="hover:text-gray-900">iPhone</a></li>
                            <li><a href="#" className="hover:text-gray-900">Watch</a></li>
                            <li><a href="#" className="hover:text-gray-900">AirPods</a></li>
                            <li><a href="#" className="hover:text-gray-900">TV & Home</a></li>
                            <li><a href="#" className="hover:text-gray-900">AirTag</a></li>
                            <li><a href="#" className="hover:text-gray-900">Accessories</a></li>
                            <li><a href="#" className="hover:text-gray-900">Gift Cards</a></li>
                        </ul>
                    </div>

                    {/* Account */}
                    <div>
                        <h3 className="text-xs font-semibold text-gray-900 mb-3">Account</h3>
                        <ul className="space-y-2 text-xs text-gray-600">
                            <li><a href="#" className="hover:text-gray-900">Manage Your Apple Account</a></li>
                            <li><a href="#" className="hover:text-gray-900">Apple Store Account</a></li>
                            <li><a href="#" className="hover:text-gray-900">iCloud.com</a></li>
                        </ul>
                        <h3 className="text-xs font-semibold text-gray-900 mb-3 mt-6">Entertainment</h3>
                        <ul className="space-y-2 text-xs text-gray-600">
                            <li><a href="#" className="hover:text-gray-900">Apple One</a></li>
                            <li><a href="#" className="hover:text-gray-900">Apple TV+</a></li>
                            <li><a href="#" className="hover:text-gray-900">Apple Music</a></li>
                            <li><a href="#" className="hover:text-gray-900">Apple Arcade</a></li>
                            <li><a href="#" className="hover:text-gray-900">Apple Podcasts</a></li>
                            <li><a href="#" className="hover:text-gray-900">Apple Books</a></li>
                            <li><a href="#" className="hover:text-gray-900">App Store</a></li>
                        </ul>
                    </div>

                    {/* Apple Store */}
                    <div>
                        <h3 className="text-xs font-semibold text-gray-900 mb-3">Apple Store</h3>
                        <ul className="space-y-2 text-xs text-gray-600">
                            <li><a href="#" className="hover:text-gray-900">Find a Store</a></li>
                            <li><a href="#" className="hover:text-gray-900">Genius Bar</a></li>
                            <li><a href="#" className="hover:text-gray-900">Today at Apple</a></li>
                            <li><a href="#" className="hover:text-gray-900">Group Reservations</a></li>
                            <li><a href="#" className="hover:text-gray-900">Apple Camp</a></li>
                            <li><a href="#" className="hover:text-gray-900">Apple Store App</a></li>
                            <li><a href="#" className="hover:text-gray-900">Certified Refurbished</a></li>
                            <li><a href="#" className="hover:text-gray-900">Apple Trade In</a></li>
                            <li><a href="#" className="hover:text-gray-900">Ways to Buy</a></li>
                            <li><a href="#" className="hover:text-gray-900">Recycling Programme</a></li>
                            <li><a href="#" className="hover:text-gray-900">Order Status</a></li>
                            <li><a href="#" className="hover:text-gray-900">Shopping Help</a></li>
                        </ul>
                    </div>

                    {/* For Business */}
                    <div>
                        <h3 className="text-xs font-semibold text-gray-900 mb-3">For Business</h3>
                        <ul className="space-y-2 text-xs text-gray-600">
                            <li><a href="#" className="hover:text-gray-900">Apple and Business</a></li>
                            <li><a href="#" className="hover:text-gray-900">Shop for Business</a></li>
                        </ul>
                        <h3 className="text-xs font-semibold text-gray-900 mb-3 mt-6">For Education</h3>
                        <ul className="space-y-2 text-xs text-gray-600">
                            <li><a href="#" className="hover:text-gray-900">Apple and Education</a></li>
                            <li><a href="#" className="hover:text-gray-900">Shop for Education</a></li>
                            <li><a href="#" className="hover:text-gray-900">Shop for University</a></li>
                        </ul>
                        <h3 className="text-xs font-semibold text-gray-900 mb-3 mt-6">For Healthcare</h3>
                        <ul className="space-y-2 text-xs text-gray-600">
                            <li><a href="#" className="hover:text-gray-900">Apple in Healthcare</a></li>
                            <li><a href="#" className="hover:text-gray-900">Mac in Healthcare</a></li>
                            <li><a href="#" className="hover:text-gray-900">Health on Apple Watch</a></li>
                        </ul>
                    </div>

                    {/* Apple Values */}
                    <div>
                        <h3 className="text-xs font-semibold text-gray-900 mb-3">Apple Values</h3>
                        <ul className="space-y-2 text-xs text-gray-600">
                            <li><a href="#" className="hover:text-gray-900">Accessibility</a></li>
                            <li><a href="#" className="hover:text-gray-900">Education</a></li>
                            <li><a href="#" className="hover:text-gray-900">Environment</a></li>
                            <li><a href="#" className="hover:text-gray-900">Privacy</a></li>
                            <li><a href="#" className="hover:text-gray-900">Supply Chain Innovation</a></li>
                        </ul>
                        <h3 className="text-xs font-semibold text-gray-900 mb-3 mt-6">About Apple</h3>
                        <ul className="space-y-2 text-xs text-gray-600">
                            <li><a href="#" className="hover:text-gray-900">Newsroom</a></li>
                            <li><a href="#" className="hover:text-gray-900">Apple Leadership</a></li>
                            <li><a href="#" className="hover:text-gray-900">Career Opportunities</a></li>
                            <li><a href="#" className="hover:text-gray-900">Investors</a></li>
                            <li><a href="#" className="hover:text-gray-900">Ethics & Compliance</a></li>
                            <li><a href="#" className="hover:text-gray-900">Events</a></li>
                            <li><a href="#" className="hover:text-gray-900">Contact Apple</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="max-w-7xl mx-auto px-4 py-4 border-t border-gray-200">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-xs text-gray-600">
                    <div className="mb-4 md:mb-0">
                        <p>More ways to shop: <a href="#" className="text-blue-600 hover:underline">Find an Apple Store</a> or <a href="#" className="text-blue-600 hover:underline">other retailer</a> near you. Or call 000800 040 1966.</p>
                    </div>
                    <div className="text-right">
                        <p>India</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4 text-xs text-gray-600">
                    <div className="mb-4 md:mb-0">
                        <p>Copyright © 2025 Apple Inc. All rights reserved.</p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <a href="#" className="hover:text-gray-900">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-900">Terms of Use</a>
                        <a href="#" className="hover:text-gray-900">Sales Policy</a>
                        <a href="#" className="hover:text-gray-900">Legal</a>
                        <a href="#" className="hover:text-gray-900">Site Map</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;