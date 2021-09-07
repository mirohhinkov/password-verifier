# Thank you for applying for The Joy Club

Thank you for expressing an interest in joining our engineering team, here at The Joy Club.

## Introduction

The purpose of this exercise is to see how you approach a problem. We're interested to see how you structure your code, your command of the language and good design and testing principles - please bear this in mind throughout.

### Hint
Show your workings - good commit messages, test first approach and clean code principles will set you off on the right track.

Have fun.

## The challenge

Security of customer data is paramount to the success of any business. The challenge is to create a password verification library. Included in the project is the `jasmine` test suite. Please feel free to replace with `jest` if you want to.

### The following verifications should occur;
1. The password should be larger than 8 chars
2. The password should not be null
3. The password should have one uppercase letter at least
4. The password should have one lowercase letter at least
5. The password should have one number at least

Each one of these should throw an exception with a different message of your choosing.

### Once the basics have been achieved, there are some additional requirements to implement.

These are;

1. Add feature: Password is OK if at least three of the previous conditions is true
2. Add feature: password is never OK if item 4 is not true.

### Extra consideration
1. Assume each verification takes 1 second to complete. How would you solve items 3 and 4 so tests can run faster?

## Ready to begin?

Fork the repository, solve the challenge and let us know via `recruitment@thejoyclub.com` providing a link to your fork.

Alternatively, if you're just looking for a nice little challenge to do, without submitting to us,
again that's cool! Enjoy the kata, you can find more at https://github.com/garora/TDD-Katas

## Design Challenge (Senior Engineer and Above)

We want to see how you approach the scaling and processing of data. The problem is as follows...

You are tasked with integrating to a marketing automation platform/email marketing service. It is a greenfield piece of work and involves a standard API integration. The use case is that when a user signs up, they will receive an onboarding email, and vice-versa, will then receive emails every 7 days of membership with different templates and content.

Design and document your ideology and ways to ensure that this integration will scale, ensuring delivery of communication ready to talk us through it at the interview stage.
