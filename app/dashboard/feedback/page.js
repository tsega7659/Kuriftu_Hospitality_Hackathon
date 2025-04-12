"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Check, MessageSquare, Star } from "lucide-react"

export default function FeedbackPage() {
  const [feedbackType, setFeedbackType] = useState("general")
  const [feedbackText, setFeedbackText] = useState("")
  const [rating, setRating] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <CardTitle className="text-2xl">Thank You for Your Feedback!</CardTitle>
          <CardDescription>We appreciate you taking the time to share your thoughts with us.</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="mb-6">
            Your feedback helps us improve our membership program and provide better experiences for all our guests.
          </p>
          <p className="text-sm text-gray-500">
            Our team will review your feedback and take appropriate action if needed.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            className="bg-kuriftu-green hover:bg-green-600 text-white"
            onClick={() => {
              setFeedbackType("general")
              setFeedbackText("")
              setRating(0)
              setIsSubmitted(false)
            }}
          >
            Submit Another Feedback
          </Button>
        </CardFooter>
      </Card>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <MessageSquare className="mr-2 h-5 w-5 text-kuriftu-green" />
            Share Your Feedback
          </CardTitle>
          <CardDescription>
            We value your opinion and would love to hear about your experience with our membership program.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <Label className="text-base">Feedback Type</Label>
                <RadioGroup
                  defaultValue="general"
                  className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3"
                  value={feedbackType}
                  onValueChange={setFeedbackType}
                >
                  <div>
                    <RadioGroupItem value="general" id="general" className="peer sr-only" />
                    <Label
                      htmlFor="general"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-kuriftu-green [&:has([data-state=checked])]:border-kuriftu-green"
                    >
                      <MessageSquare className="mb-3 h-6 w-6" />
                      <span className="text-sm font-medium">General Feedback</span>
                    </Label>
                  </div>

                  <div>
                    <RadioGroupItem value="suggestion" id="suggestion" className="peer sr-only" />
                    <Label
                      htmlFor="suggestion"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-kuriftu-green [&:has([data-state=checked])]:border-kuriftu-green"
                    >
                      <Star className="mb-3 h-6 w-6" />
                      <span className="text-sm font-medium">Suggestion</span>
                    </Label>
                  </div>

                  <div>
                    <RadioGroupItem value="issue" id="issue" className="peer sr-only" />
                    <Label
                      htmlFor="issue"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-kuriftu-green [&:has([data-state=checked])]:border-kuriftu-green"
                    >
                      <MessageSquare className="mb-3 h-6 w-6" />
                      <span className="text-sm font-medium">Report an Issue</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="rating" className="text-base">
                  Rate Your Experience
                </Label>
                <div className="flex items-center mt-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button key={star} type="button" className="p-1" onClick={() => setRating(star)}>
                      <Star
                        className={`h-8 w-8 ${rating >= star ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="feedback" className="text-base">
                  Your Feedback
                </Label>
                <Textarea
                  id="feedback"
                  placeholder="Please share your thoughts, suggestions, or report any issues you've experienced..."
                  className="mt-3 min-h-[150px]"
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-6">
              <Button
                type="submit"
                className="w-full bg-kuriftu-green hover:bg-green-600 text-white"
                disabled={isSubmitting || !feedbackText.trim()}
              >
                {isSubmitting ? "Submitting..." : "Submit Feedback"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>Find answers to common questions about our membership program</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-medium mb-1">How can I track my loyalty coins?</h3>
              <p className="text-gray-600 text-sm">
                You can track your loyalty coins through your member dashboard. Simply log in to your account and
                navigate to the "Loyalty Coins" section to view your balance and transaction history.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-1">How do I redeem my rewards?</h3>
              <p className="text-gray-600 text-sm">
                To redeem rewards, go to the "Rewards" section in your dashboard, select the reward you'd like to
                redeem, and follow the instructions. You'll receive a confirmation code that you can present at the
                resort.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-1">What is coin mining and how does it work?</h3>
              <p className="text-gray-600 text-sm">
                Coin mining is an exclusive feature for Pioneer members that allows you to earn additional loyalty coins
                without making a purchase. You can mine up to 500 coins daily through our blockchain-based system.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-1">How do I upgrade my membership tier?</h3>
              <p className="text-gray-600 text-sm">
                Your membership tier is determined by your activity with Kuriftu Resorts. To upgrade from Explorer to
                Adventurer, complete 3 stays within a 12-month period or accumulate 10,000 loyalty coins. To reach
                Pioneer status, complete 6 stays within a 12-month period or accumulate 25,000 loyalty coins.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
