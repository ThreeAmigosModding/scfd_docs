# Tips & Tricks (/docs/tips)





<Cards>
  {getPageTreePeers(source.getPageTree(), "/docs/tips").map((peer) => (
      <Card key={peer.url} title={peer.name} href={peer.url}>
        {peer.description}
      </Card>
    ))}
</Cards>

***

# The Best Tip [#the-best-tip]

The best tip we can possibly provide you is **do not make asking for help your first step, instead make it your last**.

Before reaching out for support, take the time to:

* Read the documentation thouroughly to be sure you didn't miss something.
* Double or even triple check the installation instructions.
* Look through frequently asked questions
* Read the actual error you're getting, it might be overwhelming but error messages are usually there to help you and tell you whats happening.
* Search google, youtube, github, community forums etc to see if someone has had the same issue as you.

More often than not, the answer to your problem is already available. Spending a few minutes researching your problem can save both you and others a lot of time.

More importantly, try and understand *why* something works instead of only learning *how* to make something work. Every bug, error message, and unexpected behavior is an oppourtunity to learn.

Ask yourself questions like:

* Why is this variable `nil`?
* Why is this function returning an error?
* Where is this event being triggered?
* What data is this function expecting?
* What changed that caused this to stop working?

Developers improve by being curious, the more you investigate problems yourself the easier it becomes to solve future issues without needing to ask for help. That being said, there is nothing wrong with asking for help when you need it.

Give yourself 15-30 minutes to genuinely investigate a problem before asking for help. If you're still stuck after that, ask away - but be sure to explain what you've already tried. It shows others that you've put in the effort, and makes it much easier for them to help you.

A question that includes "Here's exactly what I expected to happen vs what is actually happening, and here's what i've tried so far..." is much more likely to get a useful answer than "x doesn't work".

Finally, Google and YouTube are your friends, learning how to search effectively is one of the most valuable skills any developer can have. No developer knows every function available in whatever language/system they're working with, developers reference existing content and ask questions constantly - it's part of being a developer.
