---
title: Being Asynchronous
type: event
date: 2017-10-10
starttime: 18:30
endtime: 21:00
presenter: David Wood
presenter_url: https://codesleuth.co.uk
presenter_img: https://avatars1.githubusercontent.com/u/5011956?v=4&amp;u=ee852ded4742bdd76f7605018d443d28a426c985
presenter_bio: |

  Dave is a Contract Software Developer currently working at
  [nearForm](https://www.nearform.com/).  Specialising in Node.js, Dave is
  working hard to deliver ambitious and complicated systems in JavaScript.
  Being a former [Esendex Developer](https://www.esendex.co.uk/careers), he has
  strong opinions on TDD, DDD and clean code.

  In 2016 Dave helped write [Hackbot](https://github.com/TechNottingham/Hackbot)
  and the [Hack24-API](https://github.com/TechNottingham/Hack24-API) for use at
  various hack events, and spends his free time dabbling in many unfinished
  projects. He is an advocate for TypeScript, prefers to avoid .NET (at last),
  and recently converted to veganism to help save the world from self
  destruction.

github_url: https://github.com/Codesleuth
twitter_url: https://twitter.com/codesleuth
---

> Dot catch! Dot catch!<br />- _[David Wood](https://twitter.com/codesleuth/)_

Many of us know about the benefits of offloading concurrent I/O operations
through the use of callbacks, libraries such as async and bluebird, or using the
new Promise support in browsers and Node.js. But, do you know how these work,
and when you should use them?

In this talk we will review the benefits, pitfalls, and ways to implement
concurrent JavaScript code in Node.js and the browser. We'll look at the support
for `async`/`await`, how this differs from callbacks and asynchronous libraries,
and take a brief look at how these have been implemented to gain a better
understanding of what's going on under the hood.

At the end of this talk you will be able to make more informed decisions about
the use of synchronous API methods such as readFileSync, choosing to listen to
error events, and why wrapping function calls in `try..catch` may or
may not be useful.
