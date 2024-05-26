class ReviewProductLocators {
    WriteReviewButton= '//a[text()= "Write a review"]'
    WriteReviewHeader= '//div[text()= "Write a review"]'
    CustomerReviewTitle= '//h2[text()="Customer Reviews"]'
    SummaryStar= '//div[@class="jdgm-rev-widg__summary"]'
    RatingLabel= '//label[text()= "Rating"]'
    StarRating1= '//a[@aria-label="1 star"]'
    StarRating2= '//a[@aria-label="2 stars"]'
    StarRating3= '//a[@aria-label="3 stars"]'
    StarRating4= '//a[@aria-label="4 stars"]'
    StarRating5= '//a[@aria-label="5 stars"]'
    ReviewTitleLabel= '//label[text()= "Review Title"][1]'
    ReviewTitleInput= '//input[@placeholder="Give your review a title"]'
    ReviewLabel= '//label[text()= "Review"][1]'
    ReviewInput= '//textarea[@placeholder="Write your comments here"]'
    UploadImg= '//input[@type="file"][1]'
    ReviewNameInput= '//input[@name="reviewer_name"]'
    ReviewEmailInput= '//input[@name="reviewer_email"]'
    CancelReviewButton= '//a[text()= "Cancel review"][2]'
    SubmitReviewButton= '//input[@value="Submit Review"]'
    CfSuccessfullMsg= '//div[text()= "Review Submitted!"]'
    RequiredErrorMsg= '//div[text()="This field is required."]'
    InvalidErrorMsg= '//div[text()="Please enter a valid email address."]'

    ReviewLists= '//div[@class="jdgm-rev-widg__reviews"]'
    RatedStar= '//span[@class="jdgm-rev__rating"]'
    ReviewerProfile= '//div[@class="jdgm-row-profile"]'
    ReviewName= '//span[@class="jdgm-rev__author"]'
    ReviewTitle= '//b[@class="jdgm-rev__title"]'
    ReviewContent= '//div[@class="jdgm-rev__body"]/p'
}

const reviewProductLocator = new ReviewProductLocators()
export default reviewProductLocator