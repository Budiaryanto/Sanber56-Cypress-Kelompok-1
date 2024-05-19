class ProductPage {
    Login_Dashboard = 'https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9jdXN0b21lci9hY2NvdW50L2NyZWF0ZS8%2C/'
    
    Gear_Products = '#ui-id-6 > :nth-child(2)'

    Bags_Category = "dd > .items > :nth-child(1) > a"
    Overnight_Duffle = ":nth-child(2) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo"
    

    Fitness_Equipment_Category = "dd > .items > :nth-child(2) > a"
    Sprite_Yoga_Companion_Kit = ':nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo'
    Quest_Lumaflex_Band = ':nth-child(6) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo'
    Sprite_Yoga_Strap = ':nth-child(2) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo'
    Update_Qty_Fitness1 = '#cart-item-60484-qty'
    Update_Qty_Fitness2 = '#cart-60484-qty'

    Delete = '.odd > :nth-child(1) > .product-item-details > .product > .secondary > .action'
    
    Watches_Category = "dd > .items > :nth-child(3) > a"
    Clamber_Watch = ':nth-child(2) > .product-item-info > .details > .name > .product-item-link'
    

    Error_Message = '.message-error'
    Counters_Cart = '.showcart > .counter'
    Add_To_Cart_Button = '#product-addtocart-button'
    Details = '#tab-label-description-title'
    More_Information = '#tab-label-additional-title'
    Reviews = '#tab-label-reviews-title'
    Confirmation_Dialog = '.confirm > .modal-inner-wrap > .modal-header'
    Cancel = '.action-secondary'
    Ok = '.action-primary'
    Next = '.fotorama__arr--next'
    Previous = '.fotorama__arr--prev'
    View_Details = ':nth-child(7) > .secondary > .action > span'
}
export default new ProductPage()