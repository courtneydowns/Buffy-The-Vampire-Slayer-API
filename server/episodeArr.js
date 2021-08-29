class Episode {
  constructor(
    season,
    episode_number,
    title,
    air_date,
    director,
    writers,
    plot,
    quote,
    trivia,
    imdb_url
  ) {
    this.season = season;
    this.episode_number = episode_number;
    this.title = title;
    this.air_date = air_date;
    this.director = director;
    this.writers = writers;
    this.plot = plot;
    this.quote = quote;
    this.trivia = trivia;
    this.imdb_url = imdb_url;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

const Episode1 = new Episode(
  1,
  1,
  "Welcome to the Hellmouth",
  "March 10, 1997",
  "Charles Martin Smith",
  ["Joss Whedon"],
  "When teen vampire slayer Buffy tries to start a new life at Sunnydale High, she discovers that the school sits atop a demonic dimensional portal",
  `Buffy Summers: "Now, we can do this the hard way or... Well, actually, there's just the hard way." Darla: "That's fine with me" Buffy Summers: "Are you sure? Now, this is not gonna be pretty. We're talking violence, strong language, adult content."`,
  "The scene with Buffy and Giles at the Bronze was Anthony Head's audition scene.",
  "https://www.imdb.com/title/tt0452716/?ref_=ttep_ep2"
);

const Episode2 = new Episode(
  1,
  2,
  "The Harvest",
  "March 10, 1997",
  "John T. Kretchmer",
  ["Joss Whedon"],
  "Buffy and her friends encounter a powerful vampire bent on opening a portal to a dimension inhabited by demons.",
  `Willow Rosenberg: "Oh, I-I need to sit down." Buffy Summers: "You are sitting down." Willow Rosenberg: "Oh, good for me."`,
  "Sixteen-year-old Mercedes McNab and nineteen-year-old Sarah Michelle Gellar were the only two cast members to be actual teenagers at the time this episode was filmed in 1996.",
  "https://www.imdb.com/title/tt0452716/?ref_=ttep_ep2"
);

const Episode3 = new Episode(
  1,
  3,
  "Witch",
  "March 17, 1997",
  "Stephen Cragg",
  ["Dana Reston"],
  "Buffy suspects she has a witch on her hands when the cheerleading squad falls victim to sudden blindness and spontaneous combustion.",
  `Xander Harris: "Oh, ha! I laugh in the face of danger. Then I hide until it goes away."`,
  "Charisma Carpenter had cheerleading experience from cheering for the San Diego Chargers in 1991.",
  "https://www.imdb.com/title/tt0533501/?ref_=ttep_ep3"
);

const Episode4 = new Episode(
  1,
  4,
  "Teacher's Pet",
  "March 25, 1997",
  "Bruce Seth Green",
  ["David Greenwalt"],
  "Buffy's biology teacher is killed by a giant praying mantis that assumes the form of a beautiful substitute teacher.",
  `Buffy Summers: "No, I'm not saying she craned her neck. We are talking full-on Exorcist twist."`,
  "The praying mantis puppet is actually a re-use of the Na'Grath prop from the first season of Babylon 5 (1993), which used the same make-up company. Musetta Vander, who plays the She-Mantis, also guest-starred in Babylon 5.",
  "https://www.imdb.com/title/tt0533494/?ref_=ttep_ep5"
);

const Episode5 = new Episode(
  1,
  5,
  "Never Kill a Boy on the First Date",
  "March 31, 1997",
  "David Semal",
  ["Rob Des Hotel", "Dean Batali"],
  "With Buffy preoccupied by her date with Owen, Giles is trapped by a group of vampires seeing to raise a powerful leader.",
  `Rupert Giles: "All right. I'll just jump into my time machine, go back to the 12th century and ask the vampires to postpone their ancient prophecy for a few days while you take in dinner and a show. Buffy Summers: "Okay, at this point, you're abusing sarcasm."`,
  "Giles' assertion that he doesn't have an instruction manual is not strictly true. Apparently, there is a Slayer Handbook but Giles just decided not to use it with Buffy.",
  "https://www.imdb.com/title/tt0533459/?ref_=ttep_ep6"
);

const Episode6 = new Episode(
  1,
  6,
  "The Pack",
  "April 7, 1997",
  "Bruce Seth Green",
  ["Matt Kiene", "Joe Reinkemeyer"],
  "Xander and several other students are possessed by the spirit of a demonic breed of hyenas that wreak havoc at the high school.",
  `Rupert Giles: "Xander's taken to teasing the less fortunate?" Buffy Summers: "Uh-huh." Rupert Giles: "And, uh, there's a noticeable change in both clothing and demeanor?" Buffy Summers: "Yes." Rupert Giles: "And, well, otherwise, all his spare time's spent lounging about with imbeciles?" Buffy Summers: "It's bad, isn't it?" Rupert Giles: "It's devastating. He's turned into a sixteen-year-old boy. Of course, you'll have to kill him."`,
  "In the library, Giles consults the Malleus Maleficarum, an actual historical text on Witchcraft. Written in the late 15th century it was essentially a how to manual on how to identify, capture and kill witches, demons and other foul creatures. Even for those times it was considered extreme and vile and was banned by the pope in the early 16th century. Unfortunately, it was written the same time that the printing press was taking off in Europe and it became the 2nd most popular book in Europe for decades. It is credited with being one of the major causes of the witch hunts that swept Europe. It is also the source of many of the stereotypes of redheads, which were described in the book as Vampire demons which had no souls and could not walk in the daylight. The book was so prevalent that mothers were known to drown newborn babies if they had red hair, and some towns even purged all redheads, often by burning at the stake.",
  "https://www.imdb.com/title/tt0533505/?ref_=ttep_ep7"
);

const Episode7 = new Episode(
  1,
  7,
  "Angel",
  "April 14, 1997",
  "Scott Brazil",
  ["David Greenwalt"],
  "Buffy discovers Angel's dark secret and hesitates to do anything about it, which could spell danger for someone she loves.",
  `Buffy Summers: "Angel." Angel: "Hmm?" Buffy Summers: "Do you snore?" Angel: I don't know. It's been a long time since anybody's been in a position to let me know."`,
  "Joyce meets Giles, Angel, and Darla for the first time. It's also her first interaction with Xander",
  "https://www.imdb.com/title/tt0533388/?ref_=ttep_ep8"
);

const Episode8 = new Episode(
  1,
  8,
  "I Robot... You, Jane",
  "April 28, 1997",
  "Stephen Posey",
  ["Ashley Gable", "Thomas A. Swyden"],
  "Willow's new Internet chat buddy turns out to be a powerful demon electronically unleashed from a centuries-old, newly digitized book.",
  `Jenny Calendar: "You here again? You kids really dig the library, don't ya?" Buffy Summers: "We're literary." Xander Harris: "To read makes our speaking English good."`,
  "Jenny Calendar was originally going to be named Nicki, but it was later changed in order to avoid on-set confusion with Nicholas Brendon who was called Nicky.",
  "https://www.imdb.com/title/tt0533445/?ref_=ttep_ep9"
);

const Episode9 = new Episode(
  1,
  9,
  "The Puppet Show",
  "May 5, 1997",
  "Ellen S. Pressman",
  ["Rob Des Hotel", "Dean Batali"],
  "Buffy suspects that a ventriloquist's dummy may be harvesting organs from classmates performing in a talent show.",
  `Principal Snyder: "Kids today need discipline. It's an unpopular word these days: discipline. I know Principal Flutie would have said, 'Kids need understanding. Kids are human beings.' That's the kind of woolly-headed liberal thinking that leads to being eaten." Rupert Giles: "I-I think perhaps it was a little more complex than, um...",`,
  "Sarah Michelle Gellar admitted having nightmares about puppets after filming.",
  "https://www.imdb.com/title/tt0533507/?ref_=ttep_ep10"
);

const Episode10 = new Episode(
  1,
  10,
  "Nightmares",
  "May 12, 1997",
  "Bruce Seth Green",
  ["Joss Whedon", "David Greenwalt"],
  "A series of strange occurrences lead Buffy and her friends to discover their worst nightmares have literally become reality",
  `Willow Rosenberg: "Personal question?" Xander Harris: "Yeah, shoot." Willow Rosenberg: "When Buffy was a vampire, you weren't still, like, attracted to her, were you?" Xander Harris: "Willow, how can you... I mean, that's really *bent*. She was... grotesque." Willow Rosenberg: "Still dug her, huh? Xander Harris: I'm sick. I need help." Willow Rosenberg: "Don't I know it."`,
  `Willow has a "Nerf Herder" poster in her locker. The Buffy theme is by "Nerf Herder", and it was Alyson Hannigan, who plays Willow, that turned Joss Whedon onto using them for the theme.`,
  "https://www.imdb.com/title/tt0533462/?ref_=ttep_ep11"
);

const Episode11 = new Episode(
  1,
  11,
  "Out of Mind, Out of Sight",
  "May 19, 1997",
  "Rexa Badiyi",
  ["Joss Whedon, Ashley Gable, Thomas A. Swyden"],
  "When an invisible menace starts attacking students and faculty at Sunnydale High, the Scooby Gang traces the problem back to Cordelia",
  `Cordelia Chase: "Hey, you think I'm never lonely because I'm so cute and popular? I can be surrounded by people and be completely alone. It's not like any of them really know me. I don't even know if they like me half the time... People just want to be in a popular zone. Sometimes when I talk... everyone's so busy agreeing with me, they don't hear a word I say." Buffy Summers: Well, if you feel so alone, then why do you work so hard at being popular? Cordelia Chase: Well, it beats being alone all by yourself."`,
  'The final scene is of Marcy reading a textbook chapter titled "Assassination and Infiltration" with a subtitle referring to targeting the leader of a cult as an example. However, the actual text begins with the date August 2, 19XX and this is followed by the lyrics of The Beatles song, "Happiness is a Warm Gun" only they are written as prose, with the line "Happiness is a warm gun" changed to "Joy is a hot revolver".',
  "https://www.imdb.com/title/tt0533467/?ref_=ttep_ep12"
);

const Episode12 = new Episode(
  1,
  12,
  "Prophecy Girl",
  "June 2, 1997",
  "Joss Whedon",
  ["Joss Whedon"],
  "Giles Discovers an ancient book foretelling Buffy's death at the hands of the Master",
  `The Master: "You're dead." Buffy Summers: "I may be dead, but I'm still pretty. Which is more than I can say for you." The Master: "You were destined to die. It was written." Buffy Summers: "What can I say? I flunked the written."`,
  "Originally, another sign of the impending apocalypse was going to be stones raining down on Sunnydale High. It was cut out due to budget costs.",
  "https://www.imdb.com/title/tt0533474/?ref_=ttep_ep13"
);

const Episode13 = new Episode(
  2,
  1,
  "When She Was Bad",
  "September 15, 1997",
  "Joss Whedon",
  ["Joss Whedon"],
  "Buffy returns from summer vacation sporting an attitude and suffers recurring nightmares involving the Master. Meanwhile the Annointed One and his followers plot their revenge.",
  `Willow Rosenberg: "I mean, why else would she be acting like such a B-I-T-C-H?" Rupert Giles: "Willow, I-I think we're all a little too old to be spelling things out." Xander Harris: "A bitca?"`,
  "David Boreanaz played The Master in the non-flashback footage.",
  "https://www.imdb.com/title/tt0533523/?ref_=ttep_ep1"
);

const Episode14 = new Episode(
  2,
  2,
  "Some Assembly Required",
  "September 22, 1997",
  "Bruce Seth Green",
  ["Ty King"],
  'Two science club nerds use body parts to create the "perfect girlfriend" for a teenager who has been brough back from the dead.',
  `Xander Harris: "Y'know, this might go a lot faster if you femmes actually picked up a shovel, too." Rupert Giles: "Hear, hear!" Buffy Summers: "Sorry, but I'm an old-fashioned gal. I was raised to believe that men dig up the corpses and women have the babies."`,
  "Angel reveals that he is 241 years old.",
  "https://www.imdb.com/title/tt0533487/?ref_=ttep_ep2"
);

const Episode15 = new Episode(
  2,
  3,
  "School Hard",
  "September 29, 1997",
  "John T. Kretchmer",
  ["David Greenwalt, Joss Whedon"],
  "Buffy's mother and friends become trapped inside Sunnydale High School when a vampire named Spike launches an attack against the Slayer on Parent-Teacher night.",
  `Big Ugly: "When I kill her, it'll be the greatest event since the Crucifixion. And I should know. I was there." Spike: "You were there? Oh, please! If every vampire who said he was at the Crucifixion was actually there, it would have been like Woodstock." Big Ugly: "I oughta rip your throat out." Spike: "I was actually at Woodstock. That was a weird gig. I fed off a flower person, and I spent the next six hours watchin' my hand move."`,
  "Juliet Landau didn't have to audition for the part of Drusilla. Joss Whedon had been very taken by her performance in Ed Wood (1994) so she was offered the part within an hour of meeting with Whedon.",
  "https://www.imdb.com/title/tt0533480/?ref_=ttep_ep3"
);

const Episode16 = new Episode(
  2,
  4,
  "Inca Mummy Girl",
  "October 6, 1997",
  "Ellen S. Pressman",
  ["Matt Kiene, Joe Reinkemeyer"],
  "An Incan Pricess mummy is reanimated in Sunnydale where she sucks the life force from others in order to stay alive.",
  `Willow Rosenberg: "Well, you know, I have a choice. I can spend my life waiting for Xander to go out with every other girl in the world until he notices me, or I can just get on with my life." Buffy Summers: "Good for you." Willow Rosenberg: "Well, I didn't choose yet."`,
  "Both Nicholas Brendon and Ara Celi had to eat up to ten twinkies each for each take of the scene in which they are eating lunch.",
  "https://www.imdb.com/title/tt0533447/?ref_=ttep_ep4"
);

const Episode17 = new Episode(
  2,
  5,
  "Reptile Boy",
  "October 13, 1997",
  "David Greenwalt",
  ["David Greenwalt"],
  "Buffy and Coredelia attend a frat party where they are offered as human sacrifices to a reptile-like creature.",
  `Buffy Summers: "Well, say it." Xander Harris: "I'm not gonna say it." Willow Rosenberg: "You lied to Giles." Xander Harris: "'Cause she will."`,
  `The term "patrolling" is first used. Prior to this, Buffy's graveyard exploits are referred to as hunting. Furthermore, this marks the first time that she patrols with no specific purpose. From this point on, she will patrol nightly.`,
  "https://www.imdb.com/title/tt0533476/?ref_=ttep_ep5"
);

const Episode18 = new Episode(
  2,
  6,
  "Halloween",
  "October 27, 1997",
  "Bruce Seth Green",
  ["Carl Ellsworth"],
  "On Halloween, Buffy and her friends patronize an unusual costume shop where customers turn into whatever costume they are wearing",
  `Cordelia Chase: Are you guys playing tonight? Oz: At the Shelter Club. Cordelia Chase: Is Mister "I'm the lead singer I'm so great I don't have to show up for my date or even call" gonna be there? Oz: Yeah, you know, he's just going by "Devon" now.`,
  `It is learned that Giles' nickname in his youth was Ripper. At one point, a prequel spin-off named "Ripper", detailing adventures of young Giles, was proposed.`,
  "https://www.imdb.com/title/tt0533437/?ref_=ttep_ep6"
);

const Episode19 = new Episode(
  2,
  7,
  "Lie to Me",
  "November 3, 1997",
  "Joss Whedon",
  ["Joss Whedon"],
  "Buffy is lured into a trap by a group of undead wannabes who hope that Spike will make them vampires in exchange for giving him the Slayer",
  `Willow Rosenberg: Sore thumbs. Do they stick out? I mean, have you ever seen a thumb and gone "Wow! That baby is sore"? Xander Harris: You have too many thoughts.`,
  "When Buffy reminisced about Ford at her old high school, she mentions the song I Touch Myself by Divinyls. The same band provides much of the music for Buffy the Vampire Slayer (1992).",
  "https://www.imdb.com/title/tt0533453/?ref_=ttep_ep7"
);

const Episode20 = new Episode(
  2,
  8,
  "The Dark Age",
  "November 10, 1997",
  "Bruce Seth Green",
  ["Dean Batali, Rob Des Hotel"],
  "Giles' past comes back to haunt him as a demon he and Ethan Rayne summoned in their wild youth seeks them out in Sunnydale",
  `Xander Harris: Giles lived for school. He's actually still bitter that there were only twelve grades. Buffy Summers: He probably sat in math class thinking, "There should be more math. This could be mathier." Willow Rosenberg: Come on. You don't think he ever got restless as a kid? Buffy Summers: Are you kidding? His diapers were tweed.`,
  "There is a photo of a young Rupert Giles holding a bass guitar. The production crew faked the photo by superimposing his head onto a photo of Sid Vicious.",
  "https://www.imdb.com/title/tt0533497/?ref_=ttep_ep8"
);

const Episode21 = new Episode(
  2,
  9,
  "What's My Line?: Part 1",
  "November 17, 1997",
  "David Solomon",
  ["Howard Gordon", "Marti Noxon"],
  "Spike brings in three professional bounty hunters to eliminate Buffy while she ponders what her profession might be if her fate wasn't already sealed",
  `Angel: "I lurk."`,
  `The term "Scooby Gang" is used for the first time, when Xander tells Cordelia "You want to be a member of the Scooby Gang you gotta be willing to be inconvenienced every now and then."`,
  "https://www.imdb.com/title/tt0533521/?ref_=ttep_ep9"
);

const Episode22 = new Episode(
  2,
  10,
  "What's My Line?: Part 2",
  "November 24, 1997",
  "David Semel",
  ["Marti Noxon"],
  "Buffy joins forces with another Slayer in hopes of saving Angel from the clutches of Spike and Drusilla",
  `Kendra: "Then he is all right. We can return to your Watcher for orders." Buffy Summers: "I don't take orders. I do things my way." Kendra: "No wonder you died." Buffy Summers: "Let's go."`,
  "Marti Noxon said in her commentary for the season four DVD, that all the lines after Oz's compliment about Willow's smile were ad-libbed by Seth Green and Alyson Hannigan.",
  "https://www.imdb.com/title/tt0533522/?ref_=ttep_ep10"
);

const Episode23 = new Episode(
  2,
  11,
  "Ted",
  "December 8, 1997",
  "Bruce Seth Green",
  ["David Greenwalt", "Joss Whedon"],
  "Buffy's mom introduces her new boyfriend, who charms everyone except Buffy. When she confronts his dark side, she is left questioning her actions",
  `Cordelia Chase: "What's wrong with you?" Xander Harris: "I gave you a compliment." Cordelia Chase: "In front of your friends! They're gonna know!" Xander Harris: "Know what?" Cordelia Chase: "Please! It's too traumatic for me to even say it!" Xander Harris: "That we kissed?" Cordelia Chase: "Ugh!" Xander Harris: "Look, I'm not gonna tell. They're not gonna know. Not your friends, not my friends. You wanna go to the utility closet and make out?" Cordelia Chase: "God, is that all you ever think about?... Okay."`,
  "John Ritter was the first actor on the show to be billed as a Special Guest Star.",
  "https://www.imdb.com/title/tt0533495/?ref_=ttep_ep11"
);

const Episode24 = new Episode(
  2,
  12,
  "Bad Eggs",
  "January 12, 1998",
  "David Greenwalt",
  ["Marti Noxon"],
  "Buffy and her friends encounter even more trouble than expected when the eggs they are given in health class turn out to be prehistoric parasites that take over their lives.",
  `Xander Harris: "Can I just say... *gyeurgh*!" Buffy Summers: "I see your gyeurgh, and raise you a nargh."`,
  "For most of the kissing scenes between Buffy and Angel, Sarah Michelle Gellar and David Boreanaz would prank each other by eating onions, garlic, cheese and the like to force each other to kiss with stinky breath.",
  "https://www.imdb.com/title/tt0533391/?ref_=ttep_ep12"
);

const Episode25 = new Episode(
  2,
  13,
  "Surprise",
  "January 19, 1998",
  "Michael Lange",
  ["Marti Noxon"],
  "To give Buffy a surprise on her 17th Birthday, Drusilla and Spike bring together the body parts of a dismembered demon who cannot be killed.",
  `Oz: I'm gonna ask you to go out with me tomorrow night. And I'm kinda nervous about it, actually. It's interesting." Willow Rosenberg: "Oh. Well, if it helps at all, I'm gonna say yes." Oz: "Yeah, it helps. It-it creates a comfort zone... Do you wanna go out with me tomorrow night?" Willow Rosenberg: "Oh, I can't!" Oz: "Well, see, I like that you're unpredictable."`,
  "In giving Buffy a Claddagh ring, and remarking that it is a tradition of his people, it suggests Angel is originally from Ireland.",
  "https://www.imdb.com/title/tt0533492/?ref_=ttep_ep13"
);

const Episode26 = new Episode(
  2,
  14,
  "Innocence",
  "January 20, 1998",
  "Joss Whedon",
  ["Joss Whedon"],
  "Buffy and her friends battle the Judge and face unexpected danger from Angel, who has lost his soul after experiencing a moment of true happiness.",
  `Rupert Giles: "It's not over. I-I suppose you know that... He'll come after you... particularly. His profile, uh, well, he... he's likely to strike out at the things that made him the most human." Buffy Summers: "You must be so disappointed in me." Rupert Giles: "No. No. No, I'm not." Buffy Summers: "This is all my fault." Rupert Giles: "No. I don't believe it is. Do you want me to wag my finger at you and tell you that you acted rashly? You did, and I can... I know that you loved him. And he... has proven more than once that he loved you. You couldn't have known what would happen... The coming months a-are gonna- are gonna be hard... I-I suspect on all of us. But... if it's guilt you're looking for, Buffy, I'm-I'm not your man. All you will get from me is, is my support... and my respect."`,
  "This is Joss Whedon's favorite Buffy",
  "https://www.imdb.com/title/tt0533448/?ref_=ttep_ep14"
);

const Episode27 = new Episode(
  2,
  15,
  "Phases",
  "January 27, 1998",
  "Bruce Seth Green",
  ["Rob Des Hotel", "Dean Batali"],
  "Buffy and her friends discover secrets about themselves as they battle a werewolf, its hunter, and their own emotions.",
  `Oz: "It's not everyday you find out that you're a werewolf. That's fairly freaksome. It may take a couple of days of getting used to." Willow Rosenberg: "Yeah. It's a complication." Oz: "So... Maybe it'd be best if I just... sorta..." Willow Rosenberg: "What?" Oz: "Well, you know, like... stayed out of your way for a while." Willow Rosenberg: "I don't know. I'm kind of okay with you being *in* my life." Oz: "You mean... you'd still...?" Willow Rosenberg: "Well... I like you. You're nice and you're funny. And you don't smoke. Yeah, okay, werewolf, that's not all the time. I mean three days out of the month, I'm not much fun to be around either." Oz: "You are quite a human." Willow Rosenberg: "So... I'd still... if you'd still." Oz: "I'd still. I'd very still." Willow Rosenberg: "Okay... No biting, though."`,
  "Buffy the Vampire Slayer (1997) was one of the first TV series to cause quite a stir on the Internet with numerous fan sites and message boards springing up. This is acknowledged when Buffy stops in front of a noticeboard. There's a small note on the board thanking all of the Buffy fans at the official website.",
  "https://www.imdb.com/title/tt0533471/?ref_=ttep_ep15"
);

const Episode28 = new Episode(
  2,
  16,
  "Bewitched, Bothered and Bewildered",
  "February 10, 1998",
  "James A. Conter",
  ["Marti Noxon"],
  "As Valentine's Day approaches, Xander tries to improve his love life through witchcraft and finds himself with too much of a good thing.",
  `Buffy Summers: "Hi, Oz!" Oz: "Hi." Buffy Summers: "I seem to be having a slight case of nudity here." Oz: "But you're not a rat... so call it an upside."`,
  "Nicholas Brendon claims this as one of his favorites, and found it hard not to laugh while filming the seduction scenes.",
  "https://www.imdb.com/title/tt0533401/?ref_=ttep_ep16"
);

const Episode29 = new Episode(
  2,
  17,
  "Passion",
  "February 24, 1998",
  "Michael E. Gershman",
  ["Ty King"],
  "Angel steps up his torment of Buffy and her friends as Jenny searches for a way to restore his soul.",
  `Buffy Summers: "It's so weird... Every time something like this happens, my first instinct is still to run to Angel. I can't believe it's the same person. He's completely different from the guy that I knew." Willow Rosenberg: "Well, sort of, except..." Buffy Summers: "Except what?" Willow Rosenberg: "You're still the only thing he thinks about."`,
  `In an interview with the BBC, Anthony Head says this is his favorite , "because it was beautifully shot and a beautifully written one."`,
  "https://www.imdb.com/title/tt0533470/?ref_=ttep_ep17"
);

const Episode30 = new Episode(
  2,
  18,
  "Killed by Death",
  "March 3, 1998",
  "Deran Sarafian",
  ["Rob Des Hotel", "Dean Batali"],
  "While hospitalized with a severe case of the flu, Buffy battles a demon that sucks the life out of sick children.",
  `Xander Harris: "Cordelia, someone's gotta watch her back." Cordelia Chase: "Yeah, well, I've seen you watch her back." Xander Harris: "What is that supposed to mean?" Cordelia Chase: "Well, it was using the phrase "watch her back" as a euphemism for looking at her butt."`,
  `It has been conjectured that Der Kindestod may have been inspired by Freddy Krueger, the antagonist of A Nightmare on Elm Street (1984). However, Joss Whedon says that this character was "based on a 'this thing creeped me out as a kid' thing," as with many of the monsters on the show. In general, the monsters were suggested by the vague bogeyman figures that bedevil many children.`,
  "https://www.imdb.com/title/tt0533451/?ref_=ttep_ep18"
);

const Episode31 = new Episode(
  2,
  19,
  "I Only Have Eyes For You",
  "April 28, 1998",
  "James Whitmore Jr.",
  ["Marti Noxon"],
  "Sunnydale High School is haunted by the ghosts of a former student and teacher who reenact their tragic roman through the bodies of the schools current inhabitants.",
  `Xander Harris: "Something weird is going on." Isn't that our school motto?`,
  "The show has dealt with many disturbing subjects, but this is the first one that has prompted a public-service announcement. Following the end of the final act, Sarah Michelle Gellar did a voice-over on the dangers of teenage suicide.",
  "https://www.imdb.com/title/tt0533444/?ref_=ttep_ep19"
);

const Episode32 = new Episode(
  2,
  20,
  "Go Fish",
  "May 5, 1998",
  "David Semel",
  ["Elin Hampton, David Fury"],
  "Members of the Sunnydale swim team are killed by a gill monster of unknown origins.",
  `Cordelia Chase: "It's about time our school excelled at something." Willow Rosenberg: "Hmm. You're forgetting our high mortality rate." Xander Harris: "We're number one!"`,
  "This is the last time the opening prologue is used.",
  "https://www.imdb.com/title/tt0533431/?ref_=ttep_ep20"
);

const Episode33 = new Episode(
  2,
  21,
  "Becoming: Part 1",
  "May 12, 1998",
  "Joss Whedon",
  ["Joss Whedon"],
  "Angel plots to retrieve an ancient demon bent on sweeping everything on earth into hell itself.",
  `Kendra: "In case the curse does not succeed, this is my lucky stake. I have killed many vampires with it. I call it Mr. Pointy." Buffy Summers: "You named your stake?" Kendra: "Yes." Buffy Summers: "Remind me to get you a stuffed animal."`,
  "Whistler was originally going to be Angel's sidekick for the Angel (1999) spin-off, however, Max Perlich could not commit.",
  "https://www.imdb.com/title/tt0533397/?ref_=ttep_ep21"
);

const Episode34 = new Episode(
  2,
  22,
  "Becoming: Part 2",
  "May 19, 1998",
  "Joss Whedon",
  ["Joss Whedon"],
  "Spike strikes an unlikely alliance with Buffy to keep Angel from destroying the world.",
  `Joyce Summers: Have we met? Spike: Um... You hit me with an ax one time. Remember, uh, "Get the hell away from my daughter"?`,
  `At the end, during the "Mutant Enemy" logo, the monster walks across the screen and says, "Oh, I need a hug!", instead of his more common, "Grrr, Argh!!""`,
  "https://www.imdb.com/title/tt0533398/?ref_=ttep_ep22"
);

const Episode35 = new Episode(
  3,
  1,
  "Anne",
  "September 29, 1998",
  "Joss Whedon",
  ["Joss Whedon"],
  "Buffy -- living on her own in a big city -- assists a girl whose boyfriend has mysteriously vanished. Back in Sunnydale, Buffy's friends do their best to battle the forces of evil without her.",
  `Larry: "This is our year, I'm telling you. Best football season ever. I'm so in shape, I'm a rock. It's all about egg whites. If we can focus, keep discipline, and not have quite as many mysterious deaths, Sunnydale is gonna *rule!*"`,
  "The scene in school at the beginning, from about 6:43 to 10 minutes on DVD, is all filmed in a single take. From the library, through the cafeteria to the hallway, with six main actors, about a hundred extras and nearly fifty lines of dialogue.",
  "https://www.imdb.com/title/tt0533389/?ref_=ttep_ep1"
);

const Episode36 = new Episode(
  3,
  2,
  "Dead Man's Party",
  "October 6, 1998",
  "James Whitmore Jr.",
  ["Marti Noxon"],
  "A Nigerian mask reanimates the dead, forcing Buffy to battle a horde of zombies.",
  `Oz: "We should figure out what kinda deal this is. I mean, is it a-a gathering, a shindig or a hootenanny?" Cordelia Chase: "What's the difference?" Oz: "Well, a gathering is brie, mellow song stylings. Shindig, dip, less mellow song stylings, perhaps a large amount of malt beverage, and hootenanny, well, it's chock full of hoot, just a little bit of nanny." Xander Harris: "Well, I hate brie." Cordelia Chase: "I know. It smells like Giles' cat. Rupert Giles: It's not my..."`,
  `"Pat mentions to Buffy that Joyce read "The Deep End of the Ocean" while Buffy was gone. It is a 1996 novel by Jacquelyn Mitchard about a suburban middle-class family much like Buffy's that is torn apart when the youngest son disappears, only to reappear at the front doorstep years later."`,
  "https://www.imdb.com/title/tt0533411/?ref_=ttep_ep2"
);

const Episode37 = new Episode(
  3,
  3,
  "Faith, Hope & Trick",
  "October 13, 1998",
  "James A. Contner",
  ["David Greenwalt"],
  "A charismatic Slayer visits Sunnydale and wins over many of Buffy's friends. Meanwhile, two powerful vampires plot an attack.",
  "Mr. Trick: Sunnydale. Town's got quaint. And the people? He called me sir. Don't you just miss that? I mean, admittedly, it's not a haven for the brothers. You know, strictly the Caucasian persuasion here in the 'Dale. But, you know, you just gotta stand up and salute that death rate. I ran a statistical analysis. and hello, darkness. It makes DC look like Mayberry, and ain't nobody saying boo about it. We could fit right in here, have us some fun.",
  "The vampire seen dancing with Faith uses somewhat dated dance moves, harkening back to Buffy the Vampire Slayer: Welcome to the Hellmouth (1997) in which Buffy picks a vampire out of a crowd based solely on his out-of-fashion clothes. Joss Whedon had originally wanted vampires to wear clothing from the era of their human lives, but felt that this would make them less frightening.",
  "https://www.imdb.com/title/tt0533422/?ref_=ttep_ep3"
);

const Episode38 = new Episode(
  3,
  4,
  "Beauty and Beasts",
  "October 20, 1998",
  "James Whitmore Jr.",
  ["Marti Noxon"],
  "Oz becomes the prime suspect when a series of animal-like attacks occur in Sunnydale.",
  `Buffy Summers: "Not too crazy? Those are your credentials?" Mr. Platt: "Look, Buffy, any person, grown-up, shrink, Pope, any person who claims to be totally sane is either lying or not very bright. I mean, everyone has problems. Everybody has demons, right?" Buffy Summers: "Gotta say I'm with you on that."`,
  "The lunchbox Willow uses to hold tools in the morgue is Scooby-doo themed.",
  "https://www.imdb.com/title/tt0533396/?ref_=ttep_ep4"
);

const Episode39 = new Episode(
  3,
  5,
  "Homecoming",
  "November 3, 1998",
  "David Greenwalt",
  ["David Greenwalt"],
  "As Buffy and Cordelia vie for Homecoming Queen, a group of killers gather to participate in Slayerfest '98.",
  `Xander Harris: "Okay, let's not say something we'll, uh, regret later, okay?" Cordelia Chase: "You crazy freak!" Buffy Summers: "Vapid whore!" Xander Harris: "Like that."`,
  `Buffy's list of Cordelia's strengths reads: "Popular With Boys, Makes Friends Easily, Has Money To Buy Votes, Expensive Clothes, Perfect Teeth." Her list of weaknesses reads: "Manipulative, Two-Faced, Bad in Sports, Superficial, No Sense of Humor, Fake Smile, Brie, Xander." In Buffy the Vampire Slayer: Dead Man's Party (1998), both Cordelia and Xander express a dislike for brie cheese."`,
  "https://www.imdb.com/title/tt0533442/?ref_=ttep_ep5"
);

const Episode40 = new Episode(
  3,
  6,
  "Band Candy",
  "November 10, 1998",
  "Michael Lange",
  ["Jane Espenson"],
  "Adults throughout Sunnydale behave like immature teenagers after they eat cursed candy.",
  `Xander Harris: "I don't get this. The candy's supposed to make you feel all immature and stuff but I've had a ton, and I don't feel any diff... Never mind."`,
  "The accent used by Anthony Head for Young Giles is not his own accent. Head's accent, while not as upper class as Giles's, is a much more refined Southern accent. The accent he uses for the younger Giles is a real working class London accent.",
  "https://www.imdb.com/title/tt0533393/?ref_=ttep_ep6"
);

const Episode41 = new Episode(
  3,
  7,
  "Revelations",
  "November 17, 1998",
  "James A Contner",
  ["Douglas Petrie"],
  "With some help from Faith's new watcher, Buffy seeks to destroy a weapon-like glove before it falls into the hands of a demon.",
  `Buffy Summers: "How are you? Faith: "Five by five." Buffy Summers: "I'll interpret that as good."`,
  "The lightning that shoots from the Glove of Myneghon was drawn frame by frame by an artist per Joss Whedon's request.",
  "https://www.imdb.com/title/tt0533478/?ref_=ttep_ep7"
);

const Episode42 = new Episode(
  3,
  8,
  "Lover's Walk",
  "November 24, 1998",
  "David Semel",
  ["Dan Vebber"],
  "Spike returns to Sunnydale and kidnaps Willow in hopes of creating a magic spell that will make Drusilla love him again.",
  `Spike: "The last time I looked in on you two, you were fightin' to the death. Now you're back making googly-eyes at each other like nothing happened. Makes me want to heave." Buffy Summers: "I don't know what you're talking about." Spike: "Oh, yeah. You're just friends." Angel: "That's right." Spike: "You're *not* friends... You'll never be friends. You'll be in love till it kills you both. You'll fight and you'll shag and you'll hate each other till it makes you quiver, but you'll never be friends... Love isn't brains, children, it's blood. Blood screaming inside you to work its will... I may be love's bitch but at least I'm man enough to admit it."`,
  "According to James Marsters he burnt his hand quite badly whilst filming the scene where Spike is struck by sunlight while passed out drunk. But rather than go to the on-set medic, he pretended everything was fine and went to a hospital directly after shooting wrapped.",
  "https://www.imdb.com/title/tt0533458/?ref_=ttep_ep8"
);

const Episode43 = new Episode(
  3,
  9,
  "The Wish",
  "December 8, 1998",
  "David Greenwalt",
  ["Marti Noxon"],
  "Cordelia's wish for a Buffy-free Sunnydale comes true, plunging her into a world where vampires have control of the town.",
  `Angel: "The Master rose. He let me live... to punish me. I kept hopin' maybe you'd come... My destiny." Buffy Summers: "Is this a get-in-my-pants thing? You guys in Sunnydale talk like I'm the Second Coming."`,
  "The vampire dusting effect now starts to feature the vampire's skeleton as they turn to dust.",
  "https://www.imdb.com/title/tt0533510/?ref_=ttep_ep9"
);

const Episode44 = new Episode(
  3,
  10,
  "Amends",
  "December 15, 1998",
  "Joss Whedon",
  ["Joss Whedon"],
  "As the Christmas holiday approaches, Angel is tormented by evil apparitions who want him to eliminate Buffy.",
  `Angel: "Look, I'm weak. I've never been anything else. It's not the demon in me that needs killing, Buffy. It's the man." Buffy Summers: "You're weak. Everybody is. Everybody fails. Maybe this evil did bring you back, but if it did, it's because it needs you. And that means that you can hurt it... Angel, you have the power to do real good, to make amends. But if you die now, then all that you ever were was a monster."`,
  "The only Christmas episode in the show's run.",
  "https://www.imdb.com/title/tt0533387/?ref_=ttep_ep10"
);

const Episode45 = new Episode(
  3,
  11,
  "Gingerbread",
  "January 12, 1999",
  "James Whitmore Jr.",
  ["Thania St. John, Jane Espenson"],
  "After discovering the corpses of two young children bearing a symbol linked to the occult, Joyce spearheads a campaign to rid Sunnydale of witches.",
  `Willow Rosenberg: "A doodle. I do doodle. You too. You do doodle, too."`,
  "The only appearance of Willow's mother Sheila Rosenberg.",
  "https://www.imdb.com/title/tt0533430/?ref_=ttep_ep11"
);

const Episode46 = new Episode(
  3,
  12,
  "Helpless",
  "January 19, 1999",
  "James A. Contner",
  ["David Fury"],
  "As her birthday approaches, Buffy loses her slayer powers and must do battle with a vampire who is not only extremely powerful but also quite mad.",
  `Angel: "Um, am I gonna see you this weekend? You, uh, you-you probably have plans." Buffy Summers: "Right, birthday. Um... actually, I-I do have a thing." Angel: "Oh, a thing? A date?" Buffy Summers: "Nice attempt at casual. Actually, I do have a date. Older man. Very handsome. Likes it when I call him Daddy." Angel: "Huh, your father. It is your father, right?"`,
  "This marks the only time Buffy celebrates her birthday without Spike featured in any way.",
  "https://www.imdb.com/title/tt0533440/?ref_=ttep_ep12"
);

const Episode47 = new Episode(
  3,
  13,
  "The Zeppo",
  "January 26, 1999",
  "James Whitmore Jr.",
  ["Dan Vebber"],
  "Xander experiences an adventure of his own when he encounters a group of reanimated corpses out to construct a bomb. Meanwhile, Buffy and her friends battle the forces of evil when the Hellmouth reopens.",
  `Xander Harris: "No. You're in a band. That's like a business-class ticket to cool with complementary mojo after takeoff. I gotta learn an instrument. Is it hard to play guitar?" Oz: "Not the way I play it."`,
  'Nicholas Brendon cried when he read the script because he was "so delighted with it, and its meaning for his character."',
  "https://www.imdb.com/title/tt0533512/?ref_=ttep_ep13"
);

const Episode48 = new Episode(
  3,
  14,
  "Bad Girls",
  "February 9, 1999",
  "Michael Lange",
  ["Douglas Petrie"],
  "Faith convinces Buffy to live on the wild side, with fatal consequences.",
  `Wesley Wyndam-Pryce: "Remember the three key words for any Slayer: preparation... preparation... preparation." Buffy Summers: "That's one word three times."`,
  "Alyson Hannigan first met future-husband Alexis Denisof on the set. While Alyson was immediately attracted to Alexis and asked him out, he declined saying that he didn't date coworkers. The two remained friends for over a year before they started dating. They married on October 11th, 2003.",
  "https://www.imdb.com/title/tt0533392/?ref_=ttep_ep14"
);

const Episode49 = new Episode(
  3,
  15,
  "Consequences",
  "February 16, 1999",
  "Michael Gershman",
  ["Marti Noxon"],
  "A homicide detective closes in on Buffy and Faith as he investigates the deputy mayor's death.",
  `Angel: "You and me, Faith, we're a lot alike. Time was, I thought humans existed just to hurt each other... But then I came here. And I found out that there are other types of people. People who genuinely wanted to do right... And they make mistakes. And they fall down. You know, but they keep caring. Keep trying... If you can trust us, Faith, this can all change. You don't have to disappear into the darkness."`,
  "Finch's death is the third murder investigation in which Buffy has been involved in less than two years. She was previously suspected in the deaths of her would-be stepfather, the robot Ted (Buffy the Vampire Slayer: Ted (1997)), and fellow Slayer Kendra (Buffy the Vampire Slayer: Becoming: Part 2 (1998)). Additionally, both of the previous cases were investigated by the same detective, Paul Stein.",
  "https://www.imdb.com/title/tt0533408/?ref_=ttep_ep15"
);

const Episode50 = new Episode(
  3,
  16,
  "Doppelgangland",
  "February 23, 1999",
  "Joss Whedon",
  ["Joss Whedon"],
  "While casting a magic spell, Anya and Willow accidentally summon Willow's evil double from an alternative universe.",
  `Willow Rosenberg: It's really nice that you guys missed me. Say, you all didn't happen to do a bunch of drugs, did ya?" Xander Harris: "Will, we saw you at the Bronze... A vampire." Willow Rosenberg: "I'm not a vampire." Buffy Summers: "You are. I-I mean you-you-you were... Giles, planning on jumping in with an explanation any time soon?" Rupert Giles: "Well, uh, something... something, um, very strange is happening." Xander Harris: "Can you believe the Watcher's Council let this guy go?"`,
  "Joss Whedon liked the character of Vampire Willow when she was first introduced in Buffy the Vampire Slayer: The Wish (1998) so much that he wrote this specifically for her.",
  "https://www.imdb.com/title/tt0533415/?ref_=ttep_ep16"
);

const Episode51 = new Episode(
  3,
  17,
  "Enemies",
  "March 16, 1999",
  "David Grossman",
  "Douglas Petrie",
  "As Faith attempts to seduce Angel and steal his soul, the Mayor summons a dark-magic demon to finish the job.",
  `Buffy Summers: "I never knew you had so much rage in you." Faith: "What can I say? I'm the world's best actor." Angel: "Second best."`,
  "Faith was originally supposed to kiss Buffy on the lips.",
  "https://www.imdb.com/title/tt0533420/?ref_=ttep_ep17"
);

const Episode52 = new Episode(
  3,
  18,
  "Earshot",
  "September 21, 1999",
  "Regis Kimble",
  ["Jane Espenson"],
  "A mouthless demon infects Buffy with the ability to hear everyone's thoughts, but what starts out as a useful power soon turns into a curse.",
  `Rupert Giles: "Jonathan. How's he?" Buffy Summers: "Pretty crappy. His parents are freaking. He got suspended. And toting a piece to school, not exactly winning him a place with the in-crowd. But, I think he's dealing." Rupert Giles: "Well, it's good of you to check on him." Buffy Summers: "Well, it's nice to be able to help someone in a non-slaying capacity, except he's starting to get that look. You know, like he's gonna ask me to Prom." Rupert Giles: "Well, it'd probably be good for his self-esteem, if you, um..." Buffy Summers: "Oh come on! What am I, Saint Buffy? He's like three feet tall."`,
  "The final scene, in which Giles walks into a tree, was not in the shooting script. It was a last minute addition by Anthony Head, intending to provide the scene with more comic relief.",
  "https://www.imdb.com/title/tt0533417/?ref_=ttep_ep18"
);

const Episode53 = new Episode(
  3,
  19,
  "Choices",
  "May 4, 1999",
  "James A. Cotner",
  ["David Fury"],
  "The Mayor takes Willow prisoner after Buffy and her friends steal away a box containing demonic energy needed for Ascension Day.",
  `Buffy Summers: "You, I mean, I can't believe you got into Oxford." Willow Rosenberg: "It's pretty exciting." Oz: "There's some deep academia there." Buffy Summers: "That's where they make Gileses!" Willow Rosenberg: "I know. I could learn and-and have scones."`,
  "This is the first time that Buffy and the Mayor meet face-to-face, despite the fact that they were in the same room together at the city hall press conference in Buffy the Vampire Slayer: Gingerbread (1999) and they almost met in the sewers beneath Sunnydale in Buffy the Vampire Slayer: Band Candy (1998).",
  "https://www.imdb.com/title/tt0533406/?ref_=ttep_ep19"
);

const Episode54 = new Episode(
  3,
  20,
  "The Prom",
  "May 11, 1999",
  "David Solomon",
  ["Marti Noxon"],
  "After Angel breaks off their relationship, Buffy single-handedly battles three fearsome hell hounds so that her classmates can enjoy their senior prom.",
  `Jonathan: "We have one more award to give out. Is Buffy Summers here tonight...? Did-Did she, um..." **the crowd turns and finds her. She looks nervous at the attention** Jonathan: "This is actually a new category. It's the first time ever. I-I guess there were a lot of write-in ballots. And, um, well, t-the prom committee a-asked me to-to read this. 'We're not good friends. Most of us never found the time to get to know you. But that doesn't mean we haven't noticed you. We don't talk about it much, but it's no secret that Sunnydale High isn't really like other high schools. A lot of weird stuff happens here.' Student #1: Zombies! Student #2: Hyena people! Student #3: Snyder **people chuckle**
Jonathan: "But whenever there was a problem or something creepy happened, you seemed to show up and stop it. Most of the people here have been saved by you or helped by you at one time or another. We're proud to say that the class of '99 has the lowest mortality rate of any graduating class in Sunnydale history." **everyone claps and cheers** Jonathan: "And we know at least part of that is because of you. So the senior class offers its thanks and gives you, um, uh, this." **Jonathan produces a gold, glittering, miniature umbrella with a small metal plaque attached to the shaft** Jonathan: "It's from all of us. And it has written here, "Buffy Summers, Class Protector"."`,
  "Buffy's prom dress was designed by couturier Pamela Dennis, by request from Sarah Michelle Gellar. Gellar could not sit down in the dress once it was on her.",
  "https://www.imdb.com/title/tt0533506/?ref_=ttep_ep20"
);

const Episode55 = new Episode(
  3,
  21,
  "Graduation Day: Part 1",
  "May 18, 1999",
  "Joss Whedon",
  ["Joss Whedon"],
  "In an effort to distract Buffy from the Ascension, the mayor instructs Faith to poison",
  `Anya: "Men like sports. I'm sure of it." Xander Harris: "Yes, men like sports. Men watch the action movie. They eat of the beef and they enjoy to look at the bosoms. A thousand years of avenging our wrongs and that's all you've learned?"`,
  "Willow comments that she'll miss the Sunnydale High soda machine which never gives her the drink she chooses, possibly as a result of being bashed about by Buffy in Halloween and Xander in Buffy the Vampire Slayer: The Zeppo (1999). This is an in-joke as fans had pointed out that it actually dispenses types of soda cans that aren't amongst the choices available on the selection panel.",
  "https://www.imdb.com/title/tt0533434/?ref_=ttep_ep21"
);

const Episode56 = new Episode(
  3,
  22,
  "Graduation Day: Part 2",
  "July 13, 1999",
  "Joss Whedon",
  ["Joss Whedon"],
  "On Ascension Day, Buffy and her friends prepare for the ultimate battle as they face off against the mayor and a horde of vampires.",
  `Oz: "Guys, take a moment to deal with this. We survived." Buffy Summers: "It was a hell of a battle." Oz: "Not the battle... High School."`,
  `This portrays the first time Cordelia ever "dusts" a vampire, as well as the first time Angel and Wesley fight side by side."`,
  "https://www.imdb.com/title/tt0533435/?ref_=ttep_ep22"
);

const Episode57 = new Episode(
  4,
  1,
  "The Freshman",
  "October 5, 1999",
  "Joss Whedon",
  ["Joss Whedon"],
  "Buffy feels like a fish out of water in her first year at college, but the mysterious dissapearance of a fellow student puts her back in her element",
  `Buffy Summers: "When you look back at this, in the three seconds it'll take you to turn to dust, I think you'll find the mistake was touching my stuff."`,
  "The original storyline for the character of Sunday was that she was a former Slayer turned vampire. Joss Whedon also mentioned his regret of killing her off so quickly as he admited she made for an interesting character. By the time he realized it, it was too late.",
  "https://www.imdb.com/title/tt0533498/?ref_=ttep_ep1"
);

const Episode58 = new Episode(
  4,
  2,
  "Living Conditions",
  "October 12, 1999",
  "David Grossman",
  ["Marti Noxon"],
  "Buffy finds herself at odds with her new roommate and is troubled by a series of disturbing dreams involving a soul-sucking demon.",
  `Buffy Summers: "Cool. You guys can do the brain thing... I'm gonna go to class." Oz: "Which could also be construed as the brain thing." Buffy Summers: "Not when you're minoring in "Napping 101."`,
  "The demon in this episode resembles the boo hag. A Boo Hag is a creature in the folklore of Gullah culture resembling an energy leech. They gain sustenance from a person's breath. They have no skin so they will steal a victim's skin and use it for as long as it holds out. Both elements were seen in the episode, stealing the soul by sucking breath and a fake skin covering the demon's body.",
  "https://www.imdb.com/title/tt0533457/?ref_=ttep_ep2"
);

const Episode59 = new Episode(
  4,
  3,
  "The Harsh Light of Day",
  "October 19, 1999",
  "James A. Contner",
  ["Jane Espenson"],
  "As Buffy gets to know a charming student named Parker, Spike searches for a ring that, according to legend, makes the wearer invincible.",
  `Spike: "Harm, what are you doing?" Harmony Kendall: "I'm writing 'Spike loves Harmony' on your back." Spike: "Why?" Harmony Kendall: "I don't know, it's fun. I'm bored. You can write on me." Spike: "I've got to get back to work." Harmony Kendall: "You love that tunnel more than me." Spike: "I love syphilis more than you."`,
  `Joss Whedon has mentioned in various interviews that Sarah Michelle Gellar disagreed with Buffy sleeping with Parker. She thought that it was too soon after Angel had left her, and she didn't think that Buffy would do something like that. Whedon told Sarah that when you "go to college, you do stupid things."`,
  "https://www.imdb.com/title/tt0533500/?ref_=ttep_ep3"
);

const Episode60 = new Episode(
  4,
  4,
  "Fear Itself",
  "October 26, 1999",
  "Tucker Gates",
  ["David Fury"],
  "On Halloween, Buffy and her friends find themselves trapped inside a haunted frat house complete with real bats, zombies, and a terrifying demon.",
  `Buffy Summers: "This is Gachnar?" Xander Harris: "Big overture, little show." Gachnar: "I am the Dark Lord of nightmares. The bringer of Terror! Tremble before me. Fear me!" Willow Rosenberg: "He... He's so cute."`,
  "The filming location was the same house used for the first and eighth seasons of American Horror Story (2011).",
  "https://www.imdb.com/title/tt0533424/?ref_=ttep_ep4"
);

const Episode61 = new Episode(
  4,
  5,
  "Beer Bad",
  "November 2, 1999",
  "David Solomon",
  ["Tracey Forbes"],
  "Xander finds employment as a bartender at a pub where some of Buffy's friends turn into terrifying Cro-Magnon creatures.",
  `Buffy Summers: "Beer! Buffy want beer." Rupert Giles: "No. Yo-You can't have beer." Buffy Summers: "Want... beer." Xander Harris: "Giles, don't make Cave-Slayer unhappy."`,
  "Xander's fake ID is a mock-up of an Ohio driver's license, with a zip code (43226) located on the far north side of Columbus.",
  "https://www.imdb.com/title/tt0533399/?ref_=ttep_ep5"
);

const Episode62 = new Episode(
  4,
  6,
  "Wild at Heart",
  "November 9, 1999",
  "David Grossman",
  ["Marti Noxon"],
  "When Oz falls hard for a sexy singer who also happens to be a werewolf, he must choose between Willow and his own animal instincts.",
  `Buffy Summers: "Giles, I've never seen her like this. It's like it hurts too much to form words." Rupert Giles: "You've, uh... You've felt that way yourself and, uh, you got through it." Buffy Summers: "Yeah. I ran away and went to hell, and *then* got through it. I'm kinda hoping she doesn't use me as a model." Rupert Giles: "Fair enough."`,
  `During the scene where Oz is supposed to be turning into a werewolf, Joss Whedon wrote a special direction to Seth Green in the script. He told him to imagine he was "about to come onto acid".`,
  "https://www.imdb.com/title/tt0533526/?ref_=ttep_ep6"
);

const Episode63 = new Episode(
  4,
  7,
  "The Initiative",
  "November 16, 1999",
  "James A. Contner",
  ["Douglas Petrie"],
  "Spike finds himself targeted by a group of commandos after he escapes from a military lab underneath the Sunnydale",
  `Willow Rosenberg: "Why should I trust you?" Riley Finn: "Just sort of hoping you'd think I have an honest face." Willow Rosenberg: "I've seen honest faces before. They usually come attached to liars."`,
  "First time Spike in the main credits instead of as a guest star.",
  "https://www.imdb.com/title/tt0533503/?ref_=ttep_ep7"
);

const Episode64 = new Episode(
  4,
  8,
  "Pangs",
  "November 23, 1999",
  ["Michael Lange"],
  ["Jane Espenson"],
  "On Thanksgiving, Buffy encounters the spirit of a Native American warrior whose people were wiped out by settlers.",
  `Spike: "I'm saying that Spike had a little trip to the vet, and now he doesn't chase the other puppies anymore."`,
  "In an early draft of the script, Spike was invited into Giles's apartment by Buffy. However, the scene didn't make it to air and the invitation occurs between acts. This was a year before it was established in Buffy the Vampire Slayer: Real Me (2000) that only an actual resident could invite a vampire into a domicile.",
  "https://www.imdb.com/title/tt0533469/?ref_=ttep_ep8"
);

const Episode65 = new Episode(
  4,
  9,
  "Something Blue",
  "November 30, 1999",
  "Nick Marck",
  ["Tracey Forbes"],
  "One of Willow's spells causes her statements to become reality, with consequences both entertaining and life-threatening.",
  `Buffy Summers: "Oh... honey, we need to talk about the invitations. Now, do you wanna be "William the Bloody" or just Spike... 'cause either way, it's gonna look majorly weird." Spike: "Whereas the name "Buffy" gives it that touch of classic elegance." Buffy Summers: "What's wrong with "Buffy"?" Rupert Giles: "Oh, such a good question."`,
  "This marks the first time Buffy and Spike kiss (albeit under the influence of magic).",
  "https://www.imdb.com/title/tt0533469/?ref_=ttep_ep8"
);

const Episode66 = new Episode(
  4,
  10,
  "Hush",
  "December 14, 1999",
  "Joss Whedon",
  ["Joss Whedon"],
  "When everyone in Sunnydale loses their voice, the Scooby Gang must silently solve the mystery of the monsters who stole their ability to speak",
  `Little Girl: "[sing-song] Can't even shout, can't even cry / The gentlemen are coming by / Looking in windows, knocking on doors / They need to take seven and they might take yours / Can't call to mom, Can't say a word / You're gonna die a-screaming but you won't be heard."`,
  "Joss Whedon claimed he wrote this as a challenge to himself. Critics had hailed him for his deft use of banter and witty wordplay, so he decided to see if he was a good enough writer to craft a script which was largely lacking any dialog at all.",
  "https://www.imdb.com/title/tt0533443/?ref_=ttep_ep10"
);

const Episode67 = new Episode(
  4,
  11,
  "Doomed",
  "January 18, 2000",
  "James A. Contner",
  ["Marti Noxon", "David Fury", "Jane Espenson"],
  "While attempting to redefine her relationship with Riley, Buffy must also stop demons that are determined to reopen the Hellmouth.",
  `Xander Harris: "I hate to break it to you, O Impotent One, but you're not the "Big Bad" anymore. You're not even the "Kind of Naughty." You're nothing but a waste of space. My space. And as much as I always got a big laugh watching Buffy kick your shiny white bum, and as much as I know I can give you a little bum-kicking myself right now, I'm here to tell you something... You're not even worth it."`,
  "The trophy that Catherine Madison is trapped in (Buffy the Vampire Slayer: Witch (1997)) can be seen on the floor as the Scoobies walk through the halls.",
  "https://www.imdb.com/title/tt0533414/?ref_=ttep_ep11"
);

const Episode68 = new Episode(
  4,
  12,
  "A New Man",
  "January 25, 2000",
  "Michael Gershman",
  ["Jane Espenson"],
  "Ethan Rayne returns to town and transforms Giles into a demon. Spike is the only one who can help.",
  `Professor Maggie Walsh: "So, the Slayer!" Buffy Summers: "Yeah. That's me." Professor Maggie Walsh: "We thought you were a myth." Buffy Summers: "Well, you were myth-taken."`,
  "This episode marks the only time Buffy's birthday is celebrated on the show in which the inevitable unfortunate event doesn't happen to her, although to someone close to her.",
  "https://www.imdb.com/title/tt0533384/?ref_=ttep_ep12"
);

const Episode69 = new Episode(
  4,
  13,
  "The I in Team",
  "February 8, 2000",
  "James A. Contner",
  ["David Fury"],
  "Buffy teams with Riley after she is allowed access to the Initiative; spike is targeted by commandos.",
  `Willow Rosenberg: "Irony's kind of ironic that way."`,
  "Professor Walsh sends the Initiative team after a demon she refers to as Polgara class. This is a reference to the character of the same name from The Belgariad and Malloreon book series written by David & Leigh Eddings.",
  "https://www.imdb.com/title/tt0533502/?ref_=ttep_ep13"
);

const Episode70 = new Episode(
  4,
  14,
  "Goodbye Iowa",
  "February 15, 2000",
  "David Solomon",
  ["Marti Noxon"],
  "Tension erupts between Buffy and an ailing Riley as they pursue Professor Maggie Walsh's killer.",
  `Anya: "You know, you really should get yourself a *boring* boyfriend, like Xander... You can't have Xander." Buffy Summers: "That was the idea. Riley was supposed to be Mr. Joe Guy. We were gonna do dumb things like hold hands through the daisies, going Tra-la-la." Willow Rosenberg: "Poor Buffy. Your life resists all things average." Anya: "So dump him. But you can't have Xander."`,
  `After Adam escapes the Initiative's base, he happens upon a small boy playing in the woods. The exchange is reminiscent of the dialog in the "Frankenstein" novel between Frankenstein's monster and a child after he escapes the professor's laboratory.`,
  "https://www.imdb.com/title/tt0533433/?ref_=ttep_ep14"
);

const Episode71 = new Episode(
  4,
  15,
  "This Year's Girl",
  "February 22, 2000",
  "Michael Gershman",
  ["Douglas Petrie"],
  "Faith awakens from her coma and seeks revenge against Buffy.",
  `Willow: "Don't worry. We're sure to spot Faith first. She's like this cleavagey slut-bomb walking around going, "Ooh, check me out. I'm wicked cool. I'm five by five."" Tara: "Five by five? Five what by five what?" Willow: "See, that's the thing. No one knows."`,
  `In the original version of the scene in which Buffy and Faith meet again for the first time, Douglas Petrie had written Buffy attacking Faith first. Joss Whedon rejected this sequence because he felt it was "too unsympathetic to hit a girl who had just been in a coma.`,
  "https://www.imdb.com/title/tt0533513/?ref_=ttep_ep15"
);

const Episode72 = new Episode(
  4,
  16,
  "Who Are You?",
  "February 29, 2000",
  "Joss Whedon",
  ["Joss Whedon"],
  "Having switched bodies with Buffy, Faith enjoys freedom. Meanwhile, Buffy finds herself at the mercy of the Watcher's Council.",
  `Spike: "You know why I really hate you, Summers?" Faith: [in Buffy's body] "Cause I'm a stuck-up tight-ass with no sense of fun?" Spike: "Well... yeah, that covers a lot of it." Faith: [in Buffy's body] "Cause I could do anything I want and instead, I choose to pout and whine and feel the burden of Slayerness? I mean, I could be rich, I could be famous, I could have anything... Anyone... Even you, Spike. I could ride you at a gallop until your legs buckled and your eyes rolled up. I've got muscles you've never even dreamed of. I could squeeze you until you popped like warm champagne and you'd beg me to hurt you just a little bit more. And you know why I don't...? Because it's wrong."`,
  `The credits read "Eliza Dushku as Buffy", instead of "as Faith", reflecting the fact she is playing Buffy in Faith's body for the majority of the episode.`,
  "https://www.imdb.com/title/tt0533525/?ref_=ttep_ep16"
);

const Episode73 = new Episode(
  4,
  17,
  "Superstar",
  "April 4, 2000",
  "David Grossman",
  ["Jane Espenson"],
  "Buffy senses that something is amiss when Jonathan becomes a hero to everyone in Sunnydale.",
  `Xander: [about Jonathan] "So, we're saying he did a spell just to make us think he was cool?" Giles: "Yes." Xander: "That is so cool."`,
  `One of Spike's lines were cut due to length: "You're a bleeding idiot, you are, Jonathan. 'Cuz you'll be the first victim and you'll be stone dead before you hit the ground. [proudly to himself] The worst kind of scum."`,
  "https://www.imdb.com/title/tt0533491/?ref_=ttep_ep17"
);

const Episode74 = new Episode(
  4,
  18,
  "Where the Wild Things Are",
  "April 25, 2000",
  "David Solomon",
  ["Tracey Forbes"],
  "Buffy and Riley's passionate lovemaking energizes supernatural elements inside a frat house.",
  `Xander: "So, with Buffy and Riley having... you know, acts of nakedness around the clock lately, maybe they set something free... like a big, bursting poltergasm."`,
  "This episode marks the first time in the series that Anthony Head displays his singing talents. Giles will sing on screen again in three more episodes: in his apartment in Buffy the Vampire Slayer: The Yoko Factor (2000), during his dream sequence in Buffy the Vampire Slayer: Restless (2000), and in the musical episode Buffy the Vampire Slayer: Once More, with Feeling (2001). Prior to being cast in Buffy, Head had several roles in musical theater.",
  "https://www.imdb.com/title/tt0533524/?ref_=ttep_ep18"
);

const Episode75 = new Episode(
  4,
  19,
  "New Moon Rising",
  "May 2, 2000",
  "James A. Contner",
  ["Marti Noxon"],
  "Oz's return to Sunnydale leads to his incarceration by the Initiative and complicates the relationship between Willow and Tara.",
  `Spike: "This all goes down, the chip comes out, yeah? No tricks?" Adam: "Scout's honor." Spike: "You were a Boy Scout?" Adam: "Parts of me."`,
  "When Buffy is in Riley's room, she is wearing the same thing that Faith (in Buffy's body) wore at his place in Buffy the Vampire Slayer: Who Are You? (2000).",
  "https://www.imdb.com/title/tt0533461/?ref_=ttep_ep19"
);

const Episode76 = new Episode(
  4,
  20,
  "The Yoko Factor",
  "May 9, 2000",
  "David Grossman",
  ["Doug Petrie"],
  "After joining forces with Adam, Spike drives a wedge between Buffy and her friends. Meanwhile, Angel's return to Sunnydale leads to a violent confrontation with Riley.",
  `Spike: "You're not exactly the whiz these days, either. God, I'm never gonna get paid." Willow Rosenberg: "I am a whiz." Tara Maclay: "She is a whiz." Willow Rosenberg: "If ever a whiz there was."`,
  "During the scene where Anya and Tara are hiding in the bathroom, the voices arguing in the background is actually the argument in Buffy the Vampire Slayer: Pangs (1999), where Willow and Giles are arguing about what to do regarding the indigenous vengeance spirit.",
  "https://www.imdb.com/title/tt0533511/?ref_=ttep_ep20"
);

const Episode77 = new Episode(
  4,
  21,
  "Primeval",
  "May 16, 2000",
  "James A. Contner",
  ["David Fury"],
  "Having gained control of Riley's mind, Adam sets in motion his plot to create an army of unstoppable soldiers and destroy the initiative.",
  `Xander Harris: "Does anybody else miss the mayor, 'I just wanna be a big snake?'"`,
  "After the spell takes effect and Buffy becomes one with Willow, Xander and Giles, Buffy's voice changes. The effect was achieved by combining the 4 actor's voices.",
  "https://www.imdb.com/title/tt0533473/?ref_=ttep_ep21"
);

const Episode78 = new Episode(
  4,
  22,
  "Restless",
  "May 23, 2000",
  "Joss Whedon",
  ["Joss Whedon"],
  "A primal force stalks Buffy, Willow, Xander and Giles in their nightmares as they each come face to facee with their worst fears.",
  `[in Buffy's dream] PA Announcer: "The demons have escaped. Please run for your lives." Riley Finn: "This could be trouble. We'd better make a fort." Adam: "I'll get some pillows."`,
  `The text being written on the Tara's back is a love poem by Sappho of Lesbos, the Greek lyric poet and archetype for homosexual love. The word "lesbian" is derived of her birthplace.`,
  "https://buffy.fandom.com/wiki/Restless"
);

const Episode79 = new Episode(
  5,
  1,
  "Buffy vs. Dracula",
  "September 26, 2000",
  "David Solomon",
  ["Marti Noxon"],
  "The one-and-only Dracula makes his way to Sunnydale and immediately has everyone enchanted. Even Buffy might not be able to resist his charms.",
  `Xander Harris: "Where is he? Where's the creep that turned me into a spider-eating man-bitch?" Buffy Summers: "He's gone." Xander Harris: "Damn it! You know what? I'm sick of this crap. I'm sick of being the guy who eats insects and gets the funny syphilis. As of this moment, it's over. I'm finished being everybody's butt monkey." Buffy Summers: "Check. No more butt monkey."`,
  `Spike mentions that he had met Dracula before and that "the poncy bugger owes [him] £11." In a comic book entitled "Spike vs. Dracula", when Bram Stoker's book was first published in 1897, Spike bought a copy for Drusilla, which Dracula himself destroyed. The book cost Spike £11.`,
  "https://www.imdb.com/title/tt0533404/?ref_=ttep_ep1"
);

const Episode80 = new Episode(
  5,
  2,
  "Real Me",
  "October 3, 2000",
  "David Grossman",
  ["David Fury"],
  "As Harmony and her vampire gang plot Buffy's demise, Dawn adjusts to life with a Slayer.",
  `Dawn Summers: [thinking] "She and Willow are both witches. They do spells and stuff, which is so much cooler than slaying. I told Mom one time I wish they'd teach me some of the things they do together, and-and then she got really quiet and made me go upstairs."`,
  `Prior to the role of Dawn being cast, Sarah Michelle Gellar suggested they take a look at Michelle Trachtenberg. Dawn was originally conceived to be 12 years old, but after Trachtenberg was cast, the writers raised the character's age to 14. However, the first few scripts were still written in the voice of a 12-year-old. Before being cast, Trachtenberg, a fan of the show, had written a letter to Buffy the Vampire Slayer: Real Me (2000) that suggested how she could become a character on Buffy. The character of Dawn was also originally intended to have the power to speak to the dead, or to be able to move objects with her mind. These powers were later dropped. `,
  "https://www.imdb.com/title/tt0533475/?ref_=ttep_ep2"
);

const Episode81 = new Episode(
  5,
  3,
  "The Replacement",
  "October 10, 2000",
  "James A. Contner",
  ["Jane Espenson"],
  "When a demon creates a Xander double, the real Xander must convince his friends of his true identity",
  `Riley Finn: "Hey, I'm well aware of how lucky I am, like, lottery lucky. Buffy's like nobody else in the world. When I'm with her, it's like... it's like I'm split in two. Half of me is just on fire, goin' crazy if I'm not touching her. The other half is so still and peaceful, just perfectly content. Just knows, this is the one... But she doesn't love me."`,
  `Nicholas Brendon's real-life twin brother Kelly Donovan is his body double for this episode. In almost all of the scenes, Nicholas Brendon played both suave and goofy Xander with his brother Kelly Donovan playing the double with the non-speaking role. Kelly only spoke in the scenes where both Xander halves had speaking lines.`,
  "https://www.imdb.com/title/tt0533508/?ref_=ttep_ep3"
);

const Episode82 = new Episode(
  5,
  4,
  "Out of My Mind",
  "October 17, 2000",
  "David Grossman",
  ["Rebecca Rand Krishner"],
  "While Riley's health begins to deteriorate, Spike and Harmony force a surgeon to remove the behavior modification chip embedded in Spike's brain.",
  `Spike: "Okay. Is it bigger than a breadbox?" Harmony Kendall: "No. Four left." Spike: "So it's smaller than a breadbox." Harmony Kendall: "Heh heh! No. Only three." Spike: "Harmony... is it a sodding breadbox?" Harmony Kendall: "Yes! Oh, my God! Someone's blondy bear is a 20-Question genius!"`,
  "This is the last appearance of the old Sunnydale High School.",
  "https://www.imdb.com/title/tt0533468/?ref_=ttep_ep4"
);

const Episode83 = new Episode(
  5,
  5,
  "No Place Like Home",
  "October 24, 2000",
  "David Solomon",
  ["Douglas Petrie"],
  "Buffy learns more about Dawn after she discovers a mysterious orb linked to a group of monks being pursued by an incredibly powerful force.",
  `Rupert Giles: "It appears to be paranormal in origin." Willow Rosenberg: "How can you tell?" Rupert Giles: "Well, it's so shiny."`,
  `In Glory's rant, after interrogating the monk, she mentions "someone sits on a tuffet". Dawn has been referred to as Little Miss Muffet in the dream that Faith had while in her coma in Buffy the Vampire Slayer: Graduation Day: Part 2 (1999) (Miles to go. Little Miss Muffet counting down from 7-3-0).`,
  "https://www.imdb.com/title/tt0533463/?ref_=ttep_ep5"
);

const Episode84 = new Episode(
  5,
  6,
  "Family",
  "November 7, 2000",
  "Joss Whedon",
  ["Joss Whedon"],
  'When relatives arrive in Sunnydale, to celebrate her birthday, Tara uses a magic spell on her friends to keep them from learning her "secret". Meanwhile, Glory unleashes a hoard of demons to hunt down Buffy.',
  `Buffy Summers: [to Mr. Maclay] "You wanna take Tara out of here against her will? You gotta come through me." Dawn Summers: "And me!" Mr. Maclay: "Is this a joke? I'm not gonna be threatened by two little girls." Dawn Summers: "You don't wanna mess with us." Buffy Summers: "She's a hair-puller."`,
  "It becomes clear why Tara sabotaged Willow's demon locator spell in Buffy the Vampire Slayer: Goodbye Iowa (2000) to conceal what she believed to be her demon blood.",
  "https://www.imdb.com/title/tt0533423/?ref_=ttep_ep6"
);

const Episode85 = new Episode(
  5,
  7,
  "Fool for Love",
  "November 14, 2000",
  "Nick Marck",
  ["Douglas Petrie"],
  "After being bested in a fight by an ordinary vampire, Buffy asks Spike to explain how he killed two Slayers many years earlier.",
  `Spike: "The only thing about the dance is, you never get to stop. Everyday you wake up, it's the same bloody question that haunts you. Is today the day I die...? Death is on your heels, baby, and sooner or later, it's gonna catch you... And part of you wants it... not only to stop the fear and uncertainty, but because you're just a little bit in love with it... Death is your art. You make it with your hands day after day, that final gasp, that look of peace. A part of you is desperate to know... What's it like? Where does it lead you? And now, you see, that's the secret. Not the punch you didn't throw or the kicks you didn't land. She merely wanted it. Every Slayer... has a death wish... Even you... The only reason you've lasted as long as you have is you've got ties to the world... Your mum, brat kid sister, Scoobies. They all tie you here, but you're just puttin' off the inevitable... Sooner or later, you're gonna want it. And the second, the second that happens, you know I'll be there... I'll slip in. Have myself a real good day... Here endeth the lesson. I just wonder if you'll like it as much as she did." Buffy: "Get out of my sight, Spike, now." Spike: "Oh, now did I scare ya? You're the Slayer. Do somethin' about it. Hit me... Come on. One good swing. You know you want to." Buffy: "I mean it." Spike: "So do I. Give it me good, Buffy. Do it."`,
  `The scene in South America is in reference to Buffy the Vampire Slayer: Lovers Walk (1998). When Spike is drunkenly confiding in Willow, he mentions he caught Drusilla making out with a Chaos Demon. The Chaos Demon, matching Spike's description as "slime and antlers," is in the middle of the argument between Spike and Dru.`,
  "https://www.imdb.com/title/tt0533427/?ref_=ttep_ep7"
);

const Episode86 = new Episode(
  5,
  8,
  "Shadow",
  "November 21, 2020",
  "Daniel Attias",
  ["David Fury"],
  "Glory transforms a snake into a terrifying monster in her quest to find the Key; Joyce is hospitalized after being diagnosed.",
  `Xander Harris: "Am I right, Giles?" Rupert Giles: "I'm almost certain you're not, but to be fair, I wasn't listening."`,
  `This episode cements Tara's usefulness to the Scooby Gang. After a while with no real contribution to any of theorems and plans, she even describes herself (along with Dawn) as a "non-Scooby" in Buffy the Vampire Slayer: Real Me (2000), she makes a breakthrough by suggesting that research is useless because the "demon" predates the written word.`,
  "https://www.imdb.com/title/tt0533483/?ref_=ttep_ep8"
);

const Episode87 = new Episode(
  5,
  9,
  "Listening to Fear",
  "November 28, 2020",
  "David Solomon",
  ["Rebecca Ran Kirshner"],
  "As Joyce's sickness makes her begin doing odd things, a demon emerges from a meteorite and begins killing the mentally ill.",
  `Joyce Summers: "I bet it's not even hooked up to anything. Just like the push-buttons at the crosswalk that are supposed to make the signal change." Buffy Summers: "I'm sure someone's on- Wait. The push-buttons aren't hooked up to anything?"`,
  `The mental patient who talks to Dawn and is killed by the Queller demon was the nightwatchman victim of Glory's energy absorption in Buffy the Vampire Slayer: No Place Like Home (2000).`,
  "https://www.imdb.com/title/tt0533456/?ref_=ttep_ep9"
);

const Episode88 = new Episode(
  5,
  10,
  "Into the Woods",
  "December 19, 2000",
  "Marti Noxon",
  ["Marti Noxon"],
  "After Buffy catches Riley in the clutches of a vampire-junkie, Riley makes an important decision regarding their relationship.",
  `Xander Harris: "You got burned with Angel, and then Riley shows up." Buffy Summers: "I *know* the story, Xander." Xander Harris: "But you missed the point... You shut down, Buffy. And you've been treating Riley like the rebound guy... when he's the one that comes along once in a lifetime... He's never held back with you. He's risked everything. And you're about to let him fly because you don't like ultimatums...? If he's not the guy, if what he needs from you just isn't there, let him go. Break his heart and make it a clean break... But if you really think you can love this guy... I'm talking scary, messy, no-emotions-barred need... If you're ready for that... then think about what you're about to lose."`,
  `The "In Memory of MC Gustafson" at the end of the episode referred to Gustav Gustafson, who was the Leadman for the first two seasons of the show. Gustav was apparently a close friend of Sarah Michelle Gellar, and died during filming of the series at age 41, after fighting cancer and AIDS.`,
  "https://www.imdb.com/title/tt0533450/?ref_=ttep_ep10"
);

const Episode89 = new Episode(
  5,
  11,
  "Triangle",
  "January 9, 2001",
  "Christopher Hibler",
  ["Jane Espenson"],
  "While Giles is in England meeting with the Watcher-Council, a bickering Anya and Willow mind the magic store and inadvertently conjure up a fearsome troll.",
  `Willow Rosenberg: [impersonating Anya] "I like money better than people. People can so rarely be exchanged for goods and/or services."`,
  `Unlike most times, in which everything magical is fictional, during the fight which takes place in the Magic Box, in the background is a rack filled entirely with copies of the real-world Neo-Pagan magazine Green Egg, published by the Church of All Worlds.`,
  "https://www.imdb.com/title/tt0533516/?ref_=ttep_ep11"
);

const Episode90 = new Episode(
  5,
  12,
  "Checkpoint",
  "January 23, 2001",
  "Nick Marck",
  ["Douglas Petrie, Jane Espenson"],
  "The Watcher's Council travels to Sunnydale to review Buffy's skills as a Slayer; meanwhile, Glory puts her search for the Key into high gear.",
  `Buffy Summers: "You're Watchers... Without a Slayer, you're pretty much just watchin' Masterpiece Theater... You can't stop Glory. You can't do anything with the information you have except maybe publish it in the "Everyone Thinks We're Insane-Os Home Journal." So here's how it's gonna work. You're gonna tell me everything you know. Then you're gonna go away. You'll contact me if and when you have any further information about Glory. The magic shop will remain open. Mr. Giles will stay here as my official Watcher, reinstated at full salary..."" Rupert Giles: [fake cough] "Retroactive."" Buffy Summers: "...to be paid retroactively from the month he was fired. I will continue my work with the help of my friends..." Lydia: "I-I-I... don't want a sword thrown at me, but-but, civilians, I- we're talking about children." Buffy Summers: "We're talking about two very powerful witches and a thousand-year-old ex-demon." Anya: "Willow's a demon?"`,
  `Anya's false story was a little longer: "And when I was seven, I had a pet dachshund that died from choking on a wiener, which I find ironic."`,
  "https://www.imdb.com/title/tt0533405/?ref_=ttep_ep12"
);

const Episode91 = new Episode(
  5,
  13,
  "Blood Ties",
  "February 6, 2001",
  "Michael Gershman",
  ["Steven S. DeKnight"],
  "When Dawn learns her true identity, she runs away - only to encounter Glory.",
  `Spike: "Oh, yeah. Here it comes. Something goes wrong in your life, blame Spike. News flash, Blondie. If kid sis wants to grab a midnight stroll, she'll find a way sooner or later. I just thought she'd be safer with Big Bad lookin' over her shoulder." Buffy Summers: "She shouldn't have found out like that." Spike: "You didn't think you could keep the truth from her forever, did you? Maybe if *you* had been more honest with her in the first place, you wouldn't be trying to make yourself feel better with a round of "Kick The Spike."`,
  `This foreshadows Dawn's penchant for kleptomania, which will be focused on in the next season.`,
  "https://www.imdb.com/title/tt0533402/?ref_=ttep_ep13"
);

const Episode92 = new Episode(
  5,
  14,
  "Crush",
  "February 13, 2021",
  "Daniel Attias",
  ["David Fury"],
  "Buffy learns that Spike has a crush on her - a situation made all the more dangerous by Drusilla's return to Sunnydale.",
  `Dawn: "I like how you talk to me like I can understand things. Everyone else is being all twitchy and secretive." Spike: "They're just trying to keep you safe, I expect." Dawn: "I feel safe with you." Spike: [almost chokes] "Take that back!"`,
  `David Fury didn't like the direction the show was going in with regard to Buffy/Spike. To keep viewers from romanticizing their relationship too much, he inserted the line about Quasimodo being unable to truly love Esmeralda, which draws a parallel with Spike being unable to love Buffy without a soul.`,
  "https://www.imdb.com/title/tt0533410/?ref_=ttep_ep14"
);

const Episode93 = new Episode(
  5,
  15,
  "I Was Made to Love You",
  "February 20, 2001",
  "James A. Contner",
  ["Jane Espenson"],
  "Buffy and her friends encounter an incredibly strong female robot with only one thing on its mind - love.",
  `Anya: "Well, at first it was confusing. Just the idea of computers was like, whoa, I'm eleven hundred years old. I had trouble adjusting to the idea of Lutherans." Tara: "Well, I go online sometimes, but everyone's spelling is really bad. It's depressing."`,
  `Joss Whedon has confirmed that April the robot was written (along with "the creation of Warren the villain [and] the Buffybot") with Britney Spears in mind as he considered her performances 'robotic'. However she turned it down, according to David Fury, because she wanted to play a character who hung out with the Scooby Gang rather than a 'sex slave robot'.`,
  "https://www.imdb.com/title/tt0533446/?ref_=ttep_ep15"
);

const Episode94 = new Episode(
  5,
  16,
  "The Body",
  "February 27, 2001",
  "Joss Whedon",
  ["Joss Whedon"],
  "Buffy, Dawn, and their friends deawl with the aftermath of Joyce's death.",
  `Anya: "Are they gonna cut the body open?" Willow Rosenberg: "Oh my God! Would you just stop talking? Just... shut your mouth, please!" Anya: "What am I doing?" Willow Rosenberg: "How can you act like that?" Anya: "Am I supposed to be changing my clothes a lot? I mean, is that the helpful thing to do?" Xander Harris: "Guys..." Willow Rosenberg: "The way you behave..." Anya: "Nobody will tell me." Willow Rosenberg: "Because it's not okay for you to be asking these things!" Anya: "But I don't understand! I don't understand how this all happens,
  [starts crying]
  Anya: "how we go through this. I mean, I *knew* her, and then she's- There's just a body, and I don't understand why she just can't get back in it and not be dead anymore. It's stupid. It's mortal and stupid. And-And Xander's crying and not talking. And-And I was having fruit punch, and I thought, well, "Joyce will never have any more fruit punch, *ever*, and she'll never have eggs or yawn or brush her hair, not ever." And no one will explain to me why."`,
  `This episode features only diegetic sound; Joss Whedon explained that music comforts the audience, and he wanted this episode to be touching and horrifying at the same time.`,
  "https://www.imdb.com/title/tt0533496/?ref_=ttep_ep16"
);

const Episode95 = new Episode(
  5,
  17,
  "Forever",
  "April 17, 2001",
  "Marti Noxon",
  ["Marti Noxon"],
  "With some help from Spike, Dawn attempts to bring Joyce back from the dead.",
  `Spike: [on Joyce's passing] "I liked the lady! Understand, monkey boy? She was decent. She didn't put on airs. She always had a nice cuppa for me... And she never treated me like a freak!"`,
  `While mourning Joyce's death, Giles goes to his home and has a drink while listening to "Tales of Brave Ulysses" by Cream. This is the same song that he and Joyce listened to in Buffy the Vampire Slayer: Band Candy (1998) from Season 3, before having sex together. This is significant to show Giles, no longer around Buffy and needing to be strong, remember Joyce and remark his loving father-figure to Buffy, as opposed to the usual Watcher.`,
  "https://www.imdb.com/title/tt0533428/?ref_=ttep_ep17"
);

const Episode96 = new Episode(
  5,
  18,
  "Intervention",
  "April 24, 2001",
  "Michael Gershman",
  ["Jane Espenson"],
  "A weary Buffy seeks to regain focus by embarking on a quest with the First Slayer; Spike cavorts with his very own 'Buffybot' and Glory instructs her minions to spy on Buffy's friends in the hopes of ascertaining the Key's true identity.",
  `Willow Rosenberg: "Okay, yeah, you've been with a vampire before, but Angel had a soul." Buffy Bot: "Angel's lame. His hair grows straight up, and he's bloody stupid."`,
  `The Buffybot pronounces "Giles" with a hard g (as in "guy-els"). Joss Whedon and Marti Noxon have said on several occasions that they get annoyed with "so-called fans of the show" when they pronounce "Giles" in this way. This pronunciation is present as well in some official international dubbing for the series.`,
  "https://www.imdb.com/title/tt0533449/?ref_=ttep_ep18"
);

const Episode97 = new Episode(
  5,
  19,
  "Tough Love",
  "May 1, 2001",
  "David Grossman",
  ["Rebecca Rand Kirshner"],
  "When Tara falls victim to Glory's incredible power, Willow embraces dark magic and launches a counterattack.",
  `Anya: "Oh, you know what else is un-American? French people."`,
  `When the doctor is firing Ben he says that one of his excuses could be eating too many Twinkies. This refers to the "Twinkie Defence" as used by Dan White when he was on the trial for the murder of Harvey Milk (San Francisco City Supervisor) and George Moscone (San Francisco City Mayor). This was also referenced by Cordelia in season one's Buffy the Vampire Slayer: Out of Mind, Out of Sight (1997).`,
  "https://www.imdb.com/title/tt0533515/?ref_=ttep_ep19"
);

const Episode98 = new Episode(
  5,
  20,
  "Spiral",
  "May 8, 2001",
  "James A. Contner",
  ["Steven S. DeKnight"],
  "Realizing they may never be able to vanquish Glory, Buffy and the gang decide to flee Sunnydale in Spike's R.V. to protect Dawn.",
  `Ben: "You know why I wanted to become a doctor?" Gronx: "Flattering drawstring pants?"`,
  `According to Steven S. DeKnight, in the original script, the chase scene was a ten-minute long action scene that culminated with Buffy getting smacked into a tree and fighting Glory with a sheared lamp pole. "Joss read it and said 'This is great, this is wonderful, Kubrick couldn't film this in 20 days with five million dollars, so cut everything'. I'm like 'Great, okay, that's fine, as long as I get the Knights chasing the Winnebago'."`,
  "https://www.imdb.com/title/tt0533489/?ref_=ttep_ep20"
);

const Episode99 = new Episode(
  5,
  21,
  "The Weight of the World",
  "May 15, 2001",
  "David Solomon",
  ["Douglas Petrie"],
  "When Buffy lapses into a catatonic state, Willow uses magic to find out why; a tug-of-war erupts between Glory and Ben over Dawn's ultimate fate.",
  `Spike: "Ben! Glory! He's a doctor. She's the Beast. Two entirely separate entities sharing one body. It's like a bloody sitcom."`,
  `This is the first time that Buffy's "death wish" is seen. What Buffy tells Willow in her dream about realizing that Glory will win is highly reminiscent of what Spike has previously told Buffy about all slayers having a death wish.`,
  "https://www.imdb.com/title/tt0533509/?ref_=ttep_ep21"
);

const Episode100 = new Episode(
  5,
  22,
  "The Gift",
  "May 22, 2001",
  "Joss Whedon",
  ["Joss Whedon"],
  "As Glory prepares Dawn for a bloodletting ritual that will open a portal to another dimension, Buffy and her friends prepare for battle.",
  `[last lines] Buffy Summers: [voice-over] "Dawn, listen to me. Listen... I love you. I will *always* love you. But this is the work that I have to do... Tell Giles that... tell Giles I figured it out, and, and I'm okay... And give my love to my friends. You have to take care of them now. You have to take care of each other. You have to be strong. Dawn, the hardest thing in this world... is to live in it... Be brave. Live. For me."`,
  `When Buffy ask Giles how many apocalypses they've been through, he replies "At least six, but it feels like a hundred." Depending on what you consider an apocalypse, this is correct. That it 'feels like a hundred' is a fun nod to the fact that this was the hundredth show.`,
  "https://www.imdb.com/title/tt0533499/?ref_=ttep_ep22"
);

const Episode101 = new Episode(
  6,
  1,
  "Bargaining: Part 1",
  "October 2, 2001",
  "David Grossman",
  ["Marti Noxon"],
  "The gang hope to bring Buffy back from the dead. Meanwhile, motorcycle-riding demons discover the Buffybot has been posing as the Slayer.",
  `Xander Harris: "Excuse me? Who made you the boss of the group?" Anya: "You did." Tara Maclay: "You said Willow should be boss." Anya: "And then you said, "let's vote," and it was unanimous." Tara Maclay: "And then you made her this little plaque that said, "Boss of Us," and you put little sparkles on it and..." Xander Harris: "Valid points, all. But we... I mean... We were just talking then."`,
  `When Giles is at the airport ready to catch his plane for England, Tara gives him (as a goodbye gift) a little plastic finger monster which she puts on her finger and says "Grrr... argh". This is the same monster and sound that is made at the end, just after the credits, by the production company mascot Mutant Enemy.`,
  "https://www.imdb.com/title/tt0533394/?ref_=ttep_ep1"
);

const Episode102 = new Episode(
  6,
  2,
  "Bargaining: Part 2",
  "October 2, 2001",
  "David Grossman",
  ["David Fury"],
  "As the Helloions continue to ravage Sunnydale, a feral Buffy claws her way out of her own grave and must come to the aid of her friends.",
  `Xander Harris: "Oh, no." Willow Rosenberg: "What? Xander Harris: No. How could we- So *stupid*!" Willow Rosenberg: "Xander!" Xander Harris: "Our spell... Our resurrection spell worked like a magic charm. We brought you back to life, Buffy. Right where we left her." Willow Rosenberg: "Oh, God." Xander Harris: "In her coffin."`,
  `This is the first time without Anthony Head as Giles.`,
  "https://www.imdb.com/title/tt0533395/?ref_=ttep_ep2"
);

const Episode103 = new Episode(
  6,
  3,
  "After Life",
  "October 9, 2001",
  "David Solomon",
  ["Jane Espenson"],
  "Buffy and her friends battle a demon that may have hitched a ride with Buffy as she crossed into the world from another dimension.",
  `Spike: "Uh, I do remember what I said. The promise... to protect her. If I'd have done that... even if I didn't make it... you wouldn't have had to jump... But I want you to know I did save you. Not when it counted, of course, but after that... Every night after that. I'd see it all again... I do some different. Faster, more clever, you know...? Dozens of times, lots of different ways... Every night I save you."`,
  `Spike is shown to be the second person to be worried about Willow's magic strengthening (the first was Tara, in season 5, and again we see her worried during the resurrection), foreshadowing Willow's magic addiction throughout the season. Spike's parting words are "The thing about magic - there's always consequences - always!", which is theme for many episodes of the show, as early on as Buffy the Vampire Slayer: Bewitched, Bothered and Bewildered (1998) in season 2.`,
  "https://www.imdb.com/title/tt0533385/?ref_=ttep_ep3"
);

const Episode104 = new Episode(
  6,
  4,
  "Flooded",
  "October 16, 2001",
  "Douglas Petrie",
  ["Jane Espenson", "Douglas Petrie"],
  "While trying to get a loan, Buffy runs afoul of three deadbeat sorcerers who are using the otherwordly powers of a demon to rob a bank.",
  `[the basement is flooded] Tara Maclay: "H-How's everything looking down there?" Xander: "Like we should start gathering up two of every animal."`,
  `The periscope in Warren's basement has Russian lettering on it. When read phonetically, it says "geek". This however might be just a coincidence, since it's what comes up if one changes their keyboard layout to Russian and types "USSR".`,
  "https://www.imdb.com/title/tt0533426/?ref_=ttep_ep4"
);

const Episode105 = new Episode(
  6,
  5,
  "Life Serial",
  "October 23, 2001",
  "Nick Marck",
  ["David Fury", "Jane Espenson"],
  "Buffy's powers are tested by Andrew, Jonathan and Warren, who seek to expose and exploit her weaknesses in an effort to destroy her.",
  `Buffy Summers: "Tonight sucks! And look at me. Look at-Look at stupid Buffy. Too dumb for college, and-and-and freak Buffy. Too strong for construction work. And-And my job at the Magic Shop? I was bored to tears even before the hour that wouldn't end. And the only person that I can even stand to be around is a... neutered vampire who cheats at kitten poker."`,
  `Each of the Trio's attempts to ruin Buffy's day are symbolic of her lack of happiness since returning: At UCSD with Willow & Tara, everything around Buffy is moving too fast for her to comprehend, symbolizing her inability to keep up with college. At Xander's construction site, monsters attack her, symbolizing her male coworker's insults and misogynistic views of Buffy. At The Magic Box with Giles and Anya, the event with the Mummy's hand repeated itself, symbolizing the tedium and monotony of retail. With Spike at the bar, Buffy got too drunk, ruined the kitten poker game, and beat up a disguised demonic Jonathan, symbolizing her inability to fit in with the demon underworld.`,
  "https://www.imdb.com/title/tt0533455/?ref_=ttep_ep5"
);

const Episode106 = new Episode(
  6,
  6,
  "All the Way",
  "October 30, 2001",
  "David Solomon",
  ["Steven S. DeKnight"],
  "Dawn discovers her crush has a deadly secret. Xander announces his engagement to Anya, and Tara worries about Willow's reliance on magic.",
  `Anya: "How about you? Ever play "Shiver Me Timbers"?" Tara Maclay: "I'm not really much for the timber."`,
  `One of only three shows to be based on Halloween.`,
  "https://www.imdb.com/title/tt0533386/?ref_=ttep_ep6"
);

const Episode107 = new Episode(
  6,
  7,
  "Once More, with Feeling",
  "November 6, 2001",
  "Joss Whedon",
  ["Joss Whedon"],
  "In this musical extravaganza, Sunnydale residents find themselves bursting into song, and flame, when a demon attempts to make Dawn his bride.",
  `Dawn Summers: [excited] "Oh, my God. You will never believe what happened at school today." Buffy Summers: "Everybody started singing and dancing?" Dawn Summers: [pauses, deflating] "I gave birth to a pterodactyl." Anya: "Oh, my God. Did it sing?"`,
  `Running eight minutes longer than any in the series, the episode was also the most technical and complex. Joss Whedon used a widescreen letterbox format for filming (the only episode in the series to get this treatment), different lighting to bring out the sets more vibrantly, and long takes for shooting-including a complicated shot with a full conversation, a song, and two choreographed dances that took 21 attempts to get right. These were designed to give viewers all the clues they needed to establish all the nuances of the relationships between characters.`,
  "https://www.imdb.com/title/tt0533466/?ref_=ttep_ep7"
);

const Episode108 = new Episode(
  6,
  8,
  "Tabula Rasa",
  "November 13, 2001",
  "David Grossman",
  ["Rebecca Rand Kirshner"],
  "While trying to find a way to make Buffy forget about her afterlife experience, Willow inadvertently casts a spell that erases everyone's memories.",
  `Rupert Giles: "We'll get our memory back, and it'll all be right as rain." Spike: "Oh, listen to Mary Poppins. He's got his crust all stiff and upper with that nancy-boy accent. You Englishmen are always so... Bloody hell... Sodding. Blimey. Shagging. Knickers. Bollocks. Oh, God. I'm English." Rupert Giles: "Welcome to the nancy tribe." Spike: "You don't suppose you and I... We're not related, are we?" Anya: "There is a ruggedly handsome resemblance." Rupert Giles: "A-And you do inspire a, um... well, a particular feeling of... familiarity and... disappointment. Older brother?" Spike: "Father. Oh, God, how I must hate you." Rupert Giles: "What did *I* do?"`,
  `When Willow tells Dawn about her attraction to women, she uses the exact same words she did in the season three's Buffy the Vampire Slayer: Doppelgangland (1999) to describe her evil vampire self: "And I think I'm kinda gay!".`,
  "https://www.imdb.com/title/tt0533493/?ref_=ttep_ep8"
);

const Episode109 = new Episode(
  6,
  9,
  "Smashed",
  ["Turi Meyer"],
  ["Drew Z. Greenberg"],
  "Willow turns Amy the Rat into her old self; Jonathan, Warren and Andrew steal a diamond; and Spike discovers something unexpected about Buffy.",
  `Buffy Summers: "Oh, Tara, hey... Amy?" Amy Madison: "The whole school? By a giant snake thing? Okay, still adjusting. Hi Buffy." Buffy Summers: "Hi. How've ya been?" Amy Madison: "Rat. You?" Buffy Summers: "Dead." Amy Madison: "Oh."`,
  `In his DVD commentary, writer Drew Z. Greenberg says that in his original conception of Willow's confrontation with the homophobic men at the Bronze, he intended for Willow to cast a spell on the men so that they couldn't stop kissing each other. Joss Whedon vetoed the idea because he did not want to portray people's sexual orientation as changing in an instant and he did not want to portray same-sex kissing as a punishment.`,
  "https://www.imdb.com/title/tt0533486/?ref_=ttep_ep9"
);

const Episode110 = new Episode(
  6,
  10,
  "Wrecked",
  "November 27, 2001",
  "David Solomon",
  ["Marti Noxon"],
  "Amy introduces Willow to a warlock whose powerful black magic proves addictive; Buffy and Spike deal with the aftermath of their night of passion.",
  `[first lines] Dawn Summers: "What time is it?" Tara Maclay: "Almost 7:00. God, I just closed my eyes for a minute." Dawn Summers: "A-And now there's cartoons... Plus I have the mother of all-night wedgies."`,
  `Jeff Kober (the warlock Rack) previously played Zachary Kralik, the psychopathic vampire whom the Watchers Council set on Buffy as a test, in Buffy the Vampire Slayer: Helpless (1999).`,
  "https://www.imdb.com/title/tt0533528/?ref_=ttep_ep10"
);

const Episode111 = new Episode(
  6,
  11,
  "Gone",
  "January 8, 2002",
  "David Fury",
  ["David Fury"],
  "The Three Geeks mistakenly turn Buffy invisible. The Slayer takes some advantage from going unseen. Willow has to do the detective without using magic, while Xander finds Spike doing some weird physical training.",
  `[to the trio after they are turned visible] Buffy Summers: "So you three have, what... banded together to be pains in my ass?" Warren Meers: "We're your "arch-nemesises-ses.""`,
  `As Buffy is leaving the social services office, she can be heard whistling "Going through the Motions," the opening song from Buffy the Vampire Slayer: Once More, with Feeling (2001).`,
  "https://www.imdb.com/title/tt0533432/?ref_=ttep_ep11"
);

const Episode112 = new Episode(
  6,
  12,
  "Doublemeat Palace",
  "January 29, 2002",
  "Nick Marck",
  ["Jane Espenson"],
  "When Buffy gets a job at the Doublemeat Palace, a local fast-food restaurant, she begins to believe that disappearing co-workers and the secret ingredient to the restaurant's hamburger may be connected.",
  `Buffy Summers: "We need to analyze that burger. We need to find out if it used to be people." Xander Harris: [mouth full of burger] "What...? People?" Buffy Summers: "Xander, you ate the burger?" Xander Harris: "Well, first you say it's cat. Then you come in, hand me a burger. Blah, blah, blah. Five minutes later, "Oh, and by the way, it happens to be hot, delicious, human flesh"?"`,
  `As a child, Sarah Michelle Gellar appeared in Burger King commercial ads. McDonald's infamously sued her for citing their meat in one of the ads and banned her from eating in their restaurant. Ironically, McDonald's was a sponsor for Buffy the Vampire Slayer (1997).`,
  "https://www.imdb.com/title/tt0533416/?ref_=ttep_ep12"
);

const Episode113 = new Episode(
  6,
  13,
  "Dead Things",
  "February 5, 2002",
  "James A. Contner",
  ["Steven S. DeKnight"],
  "After Jonathan, Andrew and Warren accidentally kill Warren's ex-girlfriend Katrina, they set Buffy up to make her believe it was she who killed the girl.",
  `[Buffy is anxious to leave after they've spent all night making love, and Spike is peeved] Spike: "What is this to you... this thing we have?" Buffy Summers: "What? We don't have a... thing. We have "this." That's all." Spike: "Do you even like me?" Buffy Summers: [pause] "Sometimes." Spike: "But you like what I do to you." [she doesn't answer. He pulls out a pair of handcuffs and dangles them] Spike: "Do you trust me?" Buffy Summers: [long pause] "Never."`,
  `Sarah Michelle Gellar disliked the way her character was treated in this episode: "I had trouble with the one where Buffy had sex with Spike on the balcony while watching their friends. I really thought that was out of character. And I didn't like what it stood for. That was the moment that I had the most problems with."`,
  "https://www.imdb.com/title/tt0533412/?ref_=ttep_ep13"
);

const Episode114 = new Episode(
  6,
  14,
  "Older and Far Away",
  "February 12, 2002",
  "Michael Gershman",
  ["Drew Z. Greenberg"],
  "After Dawn talks to a guidance counselor about her feeling lonely, she accidentally puts a spell on Buffy and her friends, trapping them inside the Summer's house with a sword-wielding demon.",
  `Spike: "I had a muscle cramp... Buffy was, uh, helping." Tara Maclay: "A muscle cramp? In your... pants?" Spike: "What? It's a thing."`,
  `This marks the last time that Buffy's birthday is celebrated in the series. Spike comments that, because supernatural events have a history of occurring on Buffy's birthday, she should probably stop celebrating them. Buffy traditionally celebrates her birthday around the 12th or 13th episode of each season; her birthday takes place in episode 13 of Season Two (Buffy the Vampire Slayer: Innocence (1998)), episode 12 of Season Three (Buffy the Vampire Slayer: Helpless (1999)), episode 12 of Season Four (Buffy the Vampire Slayer: A New Man (2000)), and episode 13 of Season Five (Buffy the Vampire Slayer: Blood Ties (2001)).`,
  "https://www.imdb.com/title/tt0533465/?ref_=ttep_ep14"
);

const Episode115 = new Episode(
  6,
  15,
  "As You Were",
  "February 26, 2002",
  "Douglas Petrie",
  ["Douglas Petrie"],
  "Buffy's old boyfriend, Riley Finn, shows up unexpectedly as he tracks a demon about to hatch eggs that could wipe out Sunnydale.",
  `Riley Finn: "I hear ya. Got some, uh... big stories to tell you, too, if we even get half a second." Buffy Summers: "Did ya die?" Riley Finn: "No." Buffy Summers: "I'm gonna win."`,
  `When Buffy breaks up with Spike, she calls him "William" for the second and last time, the first time having been in Buffy the Vampire Slayer: No Place Like Home (2000), when she found Spike lurking outside her house.`,
  "https://www.imdb.com/title/tt0533390/?ref_=ttep_ep15"
);

const Episode116 = new Episode(
  6,
  16,
  "Hell's Bells",
  "March 5, 2002",
  "David Solomon",
  ["Rebecca Rand Kirshner"],
  "Anya and Xander's wedding is thrown into turmoil when a man claiming to be Xander's future self turns up at the ceremony.",
  `[Anya practices her wedding vows] Anya: "Okay... For the last time... I, Anya, want to marry you, Xander, because I love you and I'll always love you. And before I knew you, I was like a *completely* different person. Not even a person, really. And I'd seen what love could do to people, and it was... hurt and sadness. Alone was better. And then, suddenly there was you. And... you knew me. You saw me. And it was this... thing. You make me feel safe and warm. So, I get it now. I finally get love, Xander. I really do."`,
  `After Willow and Xander see each other in formal wear, she jokes that it's a good thing she realized she was gay. This refers to Buffy the Vampire Slayer: Homecoming (1998), where she and Xander couldn't resist each other in formal wear and shared an illicit kiss.`,
  "https://www.imdb.com/title/tt0533438/?ref_=ttep_ep16"
);

const Episode117 = new Episode(
  6,
  17,
  "Normal Again",
  "March 12, 2002",
  "Rick Rosenthal",
  ["Diego Gutierrez"],
  "After Buffy is stung by a demon, she begins to have vivid day-dreams about a mental asylum. She gradually begins to believe that she is a crazy girl back in L.A. and that Sunnydale and all her friends are just a figment of her imagination.",
  `Doctor: "The magical key. Buffy inserted Dawn into her delusion, actually rewriting the entire history of it to accommodate a need for a familial bond." [to Buffy] Doctor: "Buffy, but that created inconsistencies, didn't it? Your sister, your friends, all of those people you created in Sunnydale, they aren't as comforting as they once were, are they? They're coming apart." Joyce Summers: "Buffy, listen to what the doctor's saying. It's important." Doctor: "Buffy, you used to create these grand villains to battle against. And now what is it? Just ordinary students you went to high school with. No gods or monsters. Just three pathetic little men... who like playing with toys."`,
  `At ComicCon 2013, while speaking about this episode, Joss Whedon mentioned that, during his time writing Astonishing X-Men, he envisioned Cyclops, whose real name is Scott Summers, making a reference to a female cousin of his who had been sent to a mental institution for believing she was a demon hunter. However, he could not find an appropriate place in the storyline to fit it in, and therefore it was never featured.`,
  "https://www.imdb.com/title/tt0533464/?ref_=ttep_ep17"
);

const Episode118 = new Episode(
  6,
  18,
  "Entropy",
  "April 30, 2002",
  "James A. Contner",
  ["Drew Z. Greenberg"],
  "Anya returns to Sunnydale, bent on revenge for Xander leaving her at the altar. She has since become a Vengence demon again, but ends up hurting Xander in a way she never expected.",
  `Xander Harris: "I know there's nothing that I can say or do to make up for what I did. I can't. Sometimes when I wake up in the morning, I'm like, "Oh God, is this my life? Was that me?" Anya: "Me too." Xander Harris: "But you gotta believe me. Please. I *want* to make up for it. I wanna take away the hurt... I love you so much."`,
  `When Willow and Tara reconcile, the dress Willow wore during the song "Under Your Spell" from Buffy the Vampire Slayer: Once More, with Feeling (2001) is seen hanging on her bedroom door behind Tara. This is a reminder of happier times, before Willow and Tara began to fracture due to Willow's use magic.`,
  "https://www.imdb.com/title/tt0533421/?ref_=ttep_ep18"
);

const Episode119 = new Episode(
  6,
  19,
  "Seeing Red",
  "May 7, 2002",
  "Michael Gershman",
  ["Steven DeKnight"],
  "Willow and Tara wallow in their togetherness, but things aren't as happy everywhere else. Buffy has to face both Xander and Spike, whilst tracking Warren and Company to foil their next move.",
  `[not immediately aware she's been shot, seeing her blood on Willow] Tara: "Your shirt..."`,
  `The time period spanning from the last scene of this episode up to the end of the season takes place within twenty-four hours.`,
  "https://www.imdb.com/title/tt0533481/?ref_=ttep_ep19"
);

const Episode120 = new Episode(
  6,
  20,
  "Villains",
  "May 14, 2002",
  "David Solomon",
  ["Marti Noxon"],
  "A vengeful Willow uses her enormous power to track down Warren, despite Buffy's strong feelings about targeting humans.",
  `Warren Meers: "I did wrong! I see that now. I need, I need... jail! I need... But you, you don't want this. You're-You're not a bad person, not like me."Buffy Summers: [approaching from a distance] "Willow!" Warren Meers: "Oh, and when you get caught, you'll lose them, too. Your friends... You don't want that. I know you're in pain, but..." Willow Rosenberg: "Bored now." [with a hand gesture, she flays Warren alive]`,
  `Anya says to Xander, "I'll help. But I'm helping Willow," showing her finally thinking of Willow as a true friend. Their friendship took longer to develop, as they were often at odds throughout the series because Willow did not think Anya would change from being a demon. This is Anya's way of showing she understands as a scorned woman what Willow is going through and that their friendship is still as strong as ever.`,
  "https://www.imdb.com/title/tt0533519/?ref_=ttep_ep20"
);
const Episode121 = new Episode(
  6,
  21,
  "Two to Go",
  "May 21, 2002",
  "Bill L. Norton",
  ["Douglas Petrie"],
  "Fueled by black magic, Willow targets Andrew and Jonathan, leading to a battle between Buffy and Willow; Spike fights an unstoppable foe.",
  `[about to trade blows with evil Willow] Willow Rosenberg: "So, here we are." Buffy Summers: "Are we really gonna do this?" Willow Rosenberg: "Come on. This is a huge deal for me. Six years as a sideman, now I get to be the Slayer." Buffy Summers: "A killer isn't a Slayer. Being the Slayer means something you can't conceive of." Willow Rosenberg: "Oh, Buffy. You really need to have every square inch of your ass kicked." Buffy Summers: "Then show me what you got, and I'll show you what a Slayer really is."`,
  `When Spike faces his opponent in the test, he remarks, "Here we are now, entertain us," which is a quote from the Nirvana song "Smells Like Teen Spirit".`,
  "https://www.imdb.com/title/tt0533517/?ref_=ttep_ep21"
);

const Episode122 = new Episode(
  6,
  22,
  "Grave",
  "May 21, 2002",
  "James A. Contner",
  ["David Fury"],
  "After sucking all the energy out of Giles, a powerful Willow sets off to destroy the world.",
  `Rupert Giles: "Buffy, what's happened here?" Buffy Summers: "God. I don't even know where to start." Rupert Giles: "Well, Willow's clearly been abusing the magics." Buffy Summers: "She has... She was, and I barely even noticed. Giles, everything's just been so... Xander left Anya at the altar, and Anya's a vengeance demon again. Dawn's a total klepto. Money's been so tight that I've been slinging burgers at the Doublemeat Palace, and... and I've been sleeping with Spike." Rupert Giles: [pause; then laughs] "I'm sorry."`,
  `The only season finale of Buffy not to be written and directed by Joss Whedon.`,
  "https://www.imdb.com/title/tt0533436/?ref_=ttep_ep22"
);

const Episode123 = new Episode(
  7,
  1,
  "Lessons",
  "September 24, 2002",
  "David Solomon",
  ["Joss Whedon"],
  "Sunnydale High is re-opened, with a new designed campus and a new principal, Robin Wood. It is Dawn's first day at school there and Buffy accompanies her to class, only to discover evil spirits lurking in the basement.",
  `[last lines] 
  Warren Meers: [as The First] "Of course she won't understand, Sparky. I'm beyond her understanding. She's a girl with sugar and spice and everything useless, unless you're baking. I'm more than that. More than flesh..". [morphs into Glory] Glory: [as The First] "... More than blood. I'm... You know, I honestly don't think there's a human word fabulous enough for me. Oh, my name will be on everyone's lips, assuming their lips haven't been torn off. But not just yet. That's alright, though..." [morphs into Adam] Adam: [as The First] "... I can be patient. Everything is well within parameters... She's exactly where I want her to be... and so are you, Number 17. You're right where you belong..." [morphs into the Mayor] Mayor Richard Wilkins: [as The First] "... So what'd ya think? You'd get your soul back and everything'd be Jim-Dandy? Soul's slipperier than a greased weasel. Why do you think I sold mine?" [chuckles] "Mayor Richard Wilkins: Well, you probably thought that you'd be your own man, and I respect that..." [morphs into Drusilla] Drusilla: [as The First] "... But you never will. You'll always be mine. You'll always be in the dark with me... singing our little songs. You like our little songs, don't you? You've always liked them. Right from the beginning. And that's where we're going..." [morphs into the Master] The Master: [as The First] "... Right back to the beginning. Not the Bang. Not the Word. The true beginning. The next few months are going to be quite a ride, and I think we're all going to learn something about ourselves in the process. You'll learn you're a pathetic schmuck, if it hasn't sunk in already. Look at you, trying to do what's right, just like her. You still don't get it. It's not about right. Not about wrong..." [morphs into Buffy] Buffy Summers: [as The First] "... It's about power."`,
  `In season 6's DVD extras, the cast appeared on Academy of TV Arts and Sciences Panel Discussion. Here Michelle Trachtenberg said that she'd been begging Joss Whedon to let her character wear black, seeing as she'd never been allowed to in order to keep her looking youthful and innocent. Dawn is seen wearing almost all black here on her first day of school.`,
  "https://www.imdb.com/title/tt0533452/?ref_=ttep_ep1"
);

const Episode124 = new Episode(
  7,
  2,
  "Beneath You",
  "October 1, 2002",
  "Nick Marck",
  ["Douglas Petrie"],
  "A giant worm-like creature begins stalking a young woman. As the gang begin to investigate, they realize it's appearance in Sunnydale may be linked to Anya.",
  `[last lines] Buffy Summers: "You got your soul back. How?" Spike: "It's what you wanted, right? It's-It's what *you* wanted, right? And-And now everybody's in here, talking. Everything I did, everyone I... And him... and it, the other... The thing, beneath... beneath you. It's here, too. Everybody... They all just tell me go, go... to hell." Buffy Summers: "Why? Why would you do that?" Spike: "Buffy, shame on you. Why does a man do what he mustn't? For her. To be hers. To be the kind of man who would nev... To be a kind of man... And she shall look on him, with forgiveness... And everybody will forgive and love. And he will be loved... So everything's okay, right...? C-Can we rest now? Buffy...? Can we rest?"`,
  `In the pre-title sequence, when the pink-haired girl is chased through Frankfurt, the German vocals of the song are "Von der Tiefe / es verschlingt", which translates to the idé fixe of the season, "From beneath you it devours" (although it should really be 'Aus der Tiefe'...).`,
  "https://www.imdb.com/title/tt0533400/?ref_=ttep_ep2"
);

const Episode125 = new Episode(
  7,
  3,
  "Same Time, Same Place",
  "October 8, 2002",
  "James A. Contner",
  ["Jane Espenson"],
  "Willow's return proves problematic when she is literally unable to see her friends -- and is left with a creature that paralyzes its victims.",
  `Willow Rosenberg: "Anya, you're a vengeance demon. Just... teleport." Anya: [sighs] "Well, as it turns out, teleporting isn't a right. It's a privilege. I withdrew a vengeance spell last week, and this is my punishment. I... I can only teleport for official business. I have to file a flight plan and everything."`,
  `On the map of Sunnydale, the location of the demon is labeled Wilkins Grove, after Mayor Wilkins.`,
  "https://www.imdb.com/title/tt0533479/?ref_=ttep_ep3"
);

const Episode126 = new Episode(
  7,
  4,
  "Help",
  "October 15, 2002",
  "Rick Rosenthal",
  ["Rebecca Rand Kirshner"],
  "Buffy begins a new job as school counselor at Sunnydale High. On her first day she encounters a troubled young girl who is convinced she is about to die.",
  `Cassie Newton: [to Spike] "She'll tell you... Someday she'll tell you."`,
  `Cassie's name is an obvious reference to the mythological Cassandra. In the world of Greek/Roman mythology, she was a seer whose visions always came true. However, after rejecting the advances of the god Apollo, he placed a curse on her that ensured that her prophesies would never be heeded. This is reflected in Cassie's various predictions, which are in time realized, regardless of the surrounding people's doubts and disbelief.`,
  "https://www.imdb.com/title/tt0533439/?ref_=ttep_ep4"
);

const Episode127 = new Episode(
  7,
  5,
  "Selfless",
  "October 22, 2002",
  "Drew Goddard",
  ["Drew Goddard"],
  "Anya's violent and deadly act of vengeance leaves everyone stunned. Buffy must put aside her feelings and take action before more people die.",
  `D'Hoffryn: "It's like somebody slaughtered an Abercrombie & Fitch catalogue."`,
  `Anya (then Aud) and Olaf are speaking Swedish (or rather, they try to - some of what they say is actually Swedish, but the rest is gibberish).`,
  "https://www.imdb.com/title/tt0533482/?ref_=ttep_ep5"
);

const Episode128 = new Episode(
  7,
  6,
  "Him",
  "November 5, 2002",
  "Michael Gershman",
  ["Drew Z. Greenberg"],
  "Xander and Spike search for the source of a spell that has bewitched the girls into competing for the affections of the high school quarterback",
  `Buffy Summers: "Willow, you're a gay woman... and *he* isn't." Willow Rosenberg: "This isn't about his physical presence. It's about his heart." Anya: "His physical presence has a *penis*." Willow Rosenberg: "I can work around it."`,
  `Buffy, in her role as guidance counselor, tells RJ (Thad Luckinbill) that "I'm not that much older than you. In fact we're practically the same age." In reality, Luckinbill is two years older than Sarah Michelle Gellar.`,
  "https://www.imdb.com/title/tt0533441/?ref_=ttep_ep6"
);

const Episode129 = new Episode(
  7,
  7,
  "Conversations with Dead People",
  "November 12, 2002",
  "Nick Marck",
  ["Jane Espenson", "Drew Goddard"],
  "Buffy strikes up a conversation with a vampire who was once an acquaintance in high school. Dawn defends Joyce from a menacing creature",
  `Jonathan Levinson: "Of course I'm scared. Last time we were here, 33.3 bar percent of us were flayed alive."`,
  `Originally, Xander was supposed to talk to The First in the form of Jesse (Eric Balfour), his buddy from Season 1. However, when Eric was unavailable, a replacement for him couldn't be found, so the scene was never filmed and as a result, Xander doesn't appear, making it the only time Nicholas Brendon was not featured.`,
  "https://www.imdb.com/title/tt0533409/?ref_=ttep_ep7"
);

const Episode130 = new Episode(
  7,
  8,
  "Sleeper",
  "November 19, 2002",
  "Alan J. Levi",
  ["David Fury", "Jane Espenson"],
  "Buffy and her friends fear Spike may be to blame when a number of people around town mysteriously disappear.",
  `[Buffy approaches a bouncer outside a nightclub looking for Spike] Buffy: "I-I'm looking for this guy. Bleach-blond hair, leather jacket, British accent, kind of sallow, but in a hot way?" Bouncer: "Yeah, yeah. I know the guy. Billy Idol wannabe?" Buffy: "Actually, Billy Idol stole his look from- Never mind."`,
  `In one scene, the bouncer refers to Spike as "a Billy Idol wannabe," and Buffy starts to say that Billy Idol actually stole the look from him (implying Spike had told her this in conversation at some point). In Season Five's Buffy the Vampire Slayer: Fool for Love (2000), Spike's resemblance to Billy Idol was depicted (though not acknowledged in dialogue) during his flashback fight with the Slayer Nikki Wood in 1977, at which time Spike's attire and hair mimicked Idol almost perfectly, several years before Idol's fame.`,
  "https://www.imdb.com/title/tt0533485/?ref_=ttep_ep8"
);

const Episode131 = new Episode(
  7,
  9,
  "Never Leave Me",
  "November 26, 2002",
  "David Solomon",
  ["Drew Goddard"],
  "Buffy hopes to learn more about what she's up against with The First by taking Spike prisoner; Xander and Anya interrogate Andrew.",
  `Buffy Summers: "How did you do it? How'd you get your soul back?" Spike: "Saw a man about a girl... I went to seek a legend out. Traveled to the other side of the world, made a deal with a demon." Buffy Summers: "Just like that?" Spike: "No, not just like that. There was a price. There were trials. Torture. Pain and suffering... of sorts." Buffy Summers: "Of sorts?" Spike: "Well, it's all relative, innit?" Buffy Summers: "Meaning?" Spike: "Meaning I have come to redefine the words "pain" and "suffering" since I fell in love with you." Buffy Summers: "How can you say that?" Spike: "Apparently, I just slaughtered half of Sunnydale, pet. I'm not really worried about being polite any more."`,
  `Andrew is tied up, knocked out, and bitten by a vampire in this episode as nearly every Scooby has.`,
  "https://www.imdb.com/title/tt0533460/?ref_=ttep_ep9"
);

const Episode132 = new Episode(
  7,
  10,
  "Bring on the Night",
  "December 17, 2002",
  "Michael Grossman",
  ["Marti Noxon", "Douglas Petrie"],
  "Giles returns to Sunnydale with three potential Slayers, whom Buffy must protect from The First. Meanwhile, a ferocious Uber-vampire is released from the Hellmouth and Buffy must kill it before it kills one of the Potentials.",
  `[last lines] 
  Buffy Summers: "You're right... We don't know how to fight it. We don't know when it'll come. We can't run. Can't hide. Can't pretend it's not the end, 'cause it is... Something's always been there to try and destroy the world. We've beaten them back. But we're not dealing with them anymore. We're dealing with the reason they exist. Evil. The strongest. The First." Rupert Giles: "Buffy, um, I-I know you're, you're tired..." Buffy Summers: "I'm beyond tired. I'm beyond scared. I'm standing on the mouth of hell and it is gonna swallow me whole. And it'll choke on me... We're not ready? *They're* not ready. They think we're gonna wait for the end to come, like we always do. I'm done waiting. They want an apocalypse? Well, we'll give 'em one. Anyone else who wants to run, do it now, 'cause we just became an army. We just declared war. From now on we won't just face our worst fears, we will seek them out. We will find them and cut out their hearts one by one, until The First shows itself for what it really is. And I'll kill it myself. There is only one thing on this earth more powerful than evil... And that's *us*... Any questions?"`,
  `Buffy's final speech, as she asserts her own and her friends' confidence and acknowledgment of the severity of what they are facing becomes a recurring trait of season seven. In fact, in later episodes both Buffy and Andrew poke fun at this fact.`,
  "https://www.imdb.com/title/tt0533403/?ref_=ttep_ep10"
);

const Episode133 = new Episode(
  7,
  11,
  "Showtime",
  "January 7, 2003",
  "Michael Grossman",
  ["David Fury"],
  "Buffy has to keep the ever increasing number of potential Slayers from panicking while Giles and Anya seek answers from the Beljoxa's Eye.",
  `Willow Rosenberg: "I needed to make sure. Last time I tried using magic, The First, it... turned it around on me. Got inside. I felt it just surging through me in every fiber of my being. Pure, undiluted evil. I could taste it." Kennedy: "How's evil taste?" Willow Rosenberg: "A little chalky."`,
  `In keeping with this season's theme of going "back to the beginning", in the shot right before the opening credits Buffy greets Rona by saying "Welcome to the Hellmouth", which is the title of the first show of the series.`,
  "https://www.imdb.com/title/tt0533484/?ref_=ttep_ep11"
);

const Episode134 = new Episode(
  7,
  12,
  "Potential",
  "January 21, 2003",
  "James A. Contner",
  ["Rebecca Rand Kirshner"],
  "Buffy takes the Potentials to a demon bar and then to Spike's crypt, in order to teach them the art of slaying. When Willow casts a spell to seek out the next Potential, the spell leads them to believe that Dawn may be a future Slayer.",
  `Xander Harris: "Oh, good God! What is that smell?" Anya: "Uh, fairly sure that's the smell of a hard-boiled egg being thrown into a fire." Xander Harris: "Uh-huh." Willow Rosenberg: "The smell will lead us to the Potential." Xander Harris: "Or some poor soul who ate too many chimichangas."`,
  `Buffy tells the Potentials that although most people have no idea why they exist, the Potentials do - they have "a mission, a reason for being here." This is very similar to what Giles told her in Buffy the Vampire Slayer: Reptile Boy (1997), when he asked her how many people her age can say that they have a purpose, a commitment in life.`,
  "https://www.imdb.com/title/tt0533472/?ref_=ttep_ep12"
);

const Episode135 = new Episode(
  7,
  13,
  "The Killer in Me",
  "February 4, 2003",
  "David Solomon",
  ["Drew Z. Greenberg"],
  "After Willow and Kennedy share their first kiss, Willow is transformed into Warren, the man she killed last year. When she sets out to find help, she bumpbs into an old friend. Meawnwhile, Buffy searches for answers when Spike's chip causes him great pain, and the gang suspect that Giles may really be The First.",
  `[Giles is taken to the ground by the gang] 
Xander Harris: "Touch him! Touch him!" Dawn Summers: "Oh, I feel him! I feel him!" Xander Harris: "Me too." Andrew Wells: "Me too." Rupert Giles: "Good. We all feel each other. Including some of us who don't know each other well enough to take such liberties, thank you. Um, I assume there is a perfectly reasonable and not at all insane explanation, yes?" Anya: "We thought you might be non-corporeal evil." Dawn Summers: "We got a call. We couldn't remember you touching anything." Xander Harris: "We had to make sure you were okay. We were worried." Rupert Giles: "Oh. Ah. Yes, well, that's very sweet. Now, wait a minute, you thought- You think I'm evil if I bring a group of girls on a camping trip and *don't* touch them?"`,
  `Each scene with Willow/Warren was filmed twice - once with Alyson Hannigan playing Willow and again with Adam Busch as Willow. Which actor performed the scene first depended upon how "Willow" Warren was supposed to be. That is, when Willow first changes into Warren she acts more or less like Willow; in these early scenes Hannigan would act first so that Busch could somewhat mimic her performance. In later scenes when Warren's personality is more prominent Busch would act first. Because of this decision to use both actors, filming the Willow scenes took much longer than usual. In an interview with the BBC, Elizabeth Anne Allen says, "everything had to be so exact." She explains that if Alyson or Adam "gestured or moved their head differently from the other person, they had to do the take over again. So that one scene took us a day and a half to shoot."`,
  "https://www.imdb.com/title/tt0533504/?ref_=ttep_ep13"
);

const Episode136 = new Episode(
  7,
  14,
  "First Date",
  "February 11, 2003",
  "David Grossman",
  ["Jane Espenson"],
  "Buffy accepts an invitation to dinner from Principal Wood, and the secrets of his past are revealed. Xander impresses a beautiful girl with his knowledge of rope, and she seems to be interested in tying him up. Meanwhile, The First contacts Andrew in another attempt to destroy the Potentials, and Giles finds himself tongue-tied with the new Potential, Chao-Ahn.",
  `Buffy Summers: "You know, it's not even that he's acting that suspicious. It's just, there he is, on the Hellmouth, all day, every day. That's gotta be like being showered with evil, only from underneath." Willow Rosenberg: "Not really a shower." Buffy Summers: "A bidet. Like a bidet of evil."`,
  `At the very beginning, when Giles and the Scoobies are walking in the graveyard, there's a gravestone clearly marked "Snyder", a reference to Principal Snyder, played by Armin Shimerman, who was a major character in the high school years.`,
  "https://www.imdb.com/title/tt0533425/?ref_=ttep_ep14"
);

const Episode137 = new Episode(
  7,
  15,
  "Get It Done",
  "February 18, 2003",
  "Douglas Petrie",
  ["Douglad Petrie"],
  "The Scoobies use a spell to transport Buffy into a shadow world, where she meets the men who created the first Slayer. However, in order for her to return home, the gang must find and slay a ferocious demon.",
  `Buffy Summers: "Force yourself to do what can't be done or else we are not an army. We're just a bunch of girls waiting to be picked off and buried." 
  [Spike starts to leave] Buffy Summers: "Where are you going? Spike: Out. Since I'm neither a girl nor waiting, all this speechifying doesn't really apply to me, does it?" Buffy Summers: "Fine. Take a cell phone. That way, if I need someone to get weepy or wailed on, then I can call you."`,
  `Answering Principal Wood about whether the rise in school violence is normal, Buffy says, "The Hellmouth has begun its semi-annual percolation. Usually, it blows around May." This is an in-joke referring to the fact that season finales, which usually center around Hellmouth problems, are always shown in May, as American [network] shows run from September to May.`,
  "https://www.imdb.com/title/tt0533429/?ref_=ttep_ep15"
);

const Episode138 = new Episode(
  7,
  16,
  "Storyteller",
  "February 25, 2003",
  "Marita Grabiak",
  ["Jane Espenson"],
  'Andrew creates a documentary called "Buffy, Slayer of the Vampyres", a record of the current situation in Sunnydale to show to future generations. He manages to capture many important moments, and to annoy almost everyone in the house. But Buffy needs to tear him away from his filmmaking because the Seal of Danzalthar is active and Andrew may hold the key to closing it before it destroys the town.',
  `Anya: "For God's sakes, Andrew. You've been in here for 30 minutes. What are you doing?" Andrew Wells: "Entertaining and educating." Anya: "Well, why can't you just masturbate like the rest of us?"`,
  `The episode was an experiment to see how the audience would respond to a show centered around Andrew, since the series was ending and they were trying to find a character upon whom they could build another spin-off show.`,
  "https://www.imdb.com/title/tt0533490/?ref_=ttep_ep16"
);

const Episode139 = new Episode(
  7,
  17,
  "Lies My Parents Told Me",
  "March 25, 2003",
  "David Fury",
  ["David Fury", "Drew Goddard"],
  "Robin Wood seeks revenge on Spike for killing his mother nearly 30 years ago, whilst everyone else tries to find out how The First has control over them.",
  `Rupert Giles: "Everything's terrible! Total catastrophe!" Buffy Summers: "Giles, what's wrong?" Rupert Giles: [loudly] "Have you seen the new library? Th-Th-Th-Th-There's nothing but computers. There's not a book to be seen. I-I don't know where to begin, Buffy."`,
  `Spike makes mention of his mother's personal physician - a Dr. Gull. This is Dr. William Gull, Physician-in-extraordinary to the royal family, and who some believe was Jack The Ripper.`,
  "https://www.imdb.com/title/tt0533454/?ref_=ttep_ep17"
);

const Episode140 = new Episode(
  7,
  18,
  "Dirty Girls",
  "April 15, 2003",
  "Michael Gershman",
  ["Drew Goddard"],
  "Faith returns to Sunnydale just as a new villain, Caleb, arrives and sends Buffy a message in the form of a badly beaten Potential. Buffy leads the rest of the girls to Caleb and The First's lair, with devastating consequences.",
  `Xander Harris: "I've been through more battles with Buffy than you all can ever imagine. She stopped everything that's ever come up against her. She's laid down her life, literally, to protect the people around her. This girl has died *two* times, and she's still standing. You're scared? That's smart. You got questions? You should. But you doubt her motives, you think Buffy's all about the kill, then you take the little bus to battle. I've seen her heart, and this time *not* literally, and I'm telling you right now, she cares more about your lives than you will ever know. You gotta trust her. She's earned it."`,
  `While Buffy, Spike and Faith are fighting in the graveyard, Faith asks "May I?', before taking a stake from Buffy, a nod to the first time Buffy and Faith met in the season three's Buffy the Vampire Slayer: Faith, Hope & Trick (1998), when Faith asks the same thing before taking Buffy's stake to dust the vampire she is fighting.`,
  "https://www.imdb.com/title/tt0533413/?ref_=ttep_ep18"
);

const Episode141 = new Episode(
  7,
  19,
  "Empty Places",
  "April 29, 2003",
  "James A. Contner",
  ["Drew Z. Greenberg"],
  "After their horrifying loss at the vineyard, the gang turn against Buffy and begin to follow Faith instead. Meanwhile, Spike and Andrew travel to an old church to question a priest about Caleb.",
  `Faith: "This town, walking anywhere after dark is like an extreme sport."`,
  `Marking the Bronze's sendoff, the band playing is Nerf Herder, the same band that performs the show's theme song.`,
  "https://www.imdb.com/title/tt0533418/?ref_=ttep_ep19"
);

const Episode142 = new Episode(
  7,
  20,
  "Touched",
  "May 6, 2003",
  "David Solomon",
  ["Rebecca Rand Kirshner"],
  "Faith and the Potentials search underground for a weapon, whilst Buffy confronts Caleb at the vineyard.",
  `Anya: "We're all on death's door, repeatedly ringing the doorbell like maniacal Girl Scouts trying to make quota."`,
  `The sex scene between Willow and Kennedy is the first lesbian sex scene ever on network TV, as noted by "After Ellen" network site.`,
  "https://www.imdb.com/title/tt0533514/?ref_=ttep_ep20"
);

const Episode143 = new Episode(
  7,
  21,
  "End of Days",
  "May 13, 2003",
  "Marita Grabiak",
  ["Jane Espenson", "Douglas Petrie"],
  "Buffy has a powerful new weapon, but the gang cannot find any information about the origins of the mysterious scythe. Eventually the Slayer goes herself in search of knowledge, and finds a new ally, an old friend, and great danger.",
  `Anya: "Well, there was this other apocalypse this one time. And, well, I took off. But this time, I don't- I don't know."
  Andrew Wells: "Well, what's different?" Anya: "Well, I guess I was kinda new to being around humans before. And now I've seen a lot more, gotten to know people, seen what they're capable of and... I guess I just realized how amazingly screwed up they all are. I mean, really, really screwed up in a monumental fashion." Andrew Wells: "Oh." Anya: "And they have no purpose that unites them, so they just drift around, blundering through life until they die, which they- they know is coming, yet every single one of them is surprised when it happens to them. They're incapable of thinking about what they want beyond the moment. They kill each other, which is *clearly* insane... And yet, here's the thing... When it's something that really matters, they fight. I mean, they're lame morons for fighting, but they do. They never... They never quit... And so I guess I will keep fighting, too."`,
  `Xander tells Buffy: "Besides, if you die, I'll just bring you back to life. That's what I do," alluding to his role in resurrecting her in both Buffy the Vampire Slayer: Prophecy Girl (1997) and Buffy the Vampire Slayer: Bargaining: Part 1 (2001).`,
  "https://www.imdb.com/title/tt0533419/?ref_=ttep_ep21"
);

const Episode144 = new Episode(
  7,
  22,
  "Chosen",
  "May 20, 2003",
  "Joss Whedon",
  ["Joss Whedon"],
  "After killing Caleb, Buffy conceives a plan to defeat The First once and for all. Willow invokes a magic spell that alters the ancient Slayer spell and gives Buffy the allies she needs to fight the Uber-Vamp army. An epic battle ensues and several good friends are lost. At the end, Buffy faces a completely new problem -- one she's glad to have.",
  `Xander Harris: "So, did you see?" Andrew Wells: "I-I was scared. I'm sorry." Xander Harris: "Did you see what happened? I mean, was she..." Andrew Wells: "She was incredible. She died saving my life." Xander Harris: "That's my girl. Always doin' the stupid thing."`,
  `The scene in which Buffy, Xander, Willow, and Giles stand and discuss what they'll do the next day, which ends with Giles saying to himself "The Earth is definitely doomed" is an homage to the very first story-line of Buffy the Vampire Slayer (1997). Buffy the Vampire Slayer: The Harvest (1997) ends with Buffy, Xander, and Willow walking away talking about ways for Buffy to get herself kicked out of school, and Giles turns and mutters "The Earth is doomed".`,
  "https://www.imdb.com/title/tt0533407/?ref_=ttep_ep22"
);

module.exports = episodeArr = [
  Episode1,
  Episode2,
  Episode3,
  Episode4,
  Episode5,
  Episode6,
  Episode7,
  Episode8,
  Episode9,
  Episode10,
  Episode11,
  Episode12,
  Episode13,
  Episode14,
  Episode15,
  Episode16,
  Episode17,
  Episode18,
  Episode19,
  Episode20,
  Episode21,
  Episode22,
  Episode23,
  Episode24,
  Episode25,
  Episode26,
  Episode27,
  Episode28,
  Episode29,
  Episode30,
  Episode31,
  Episode32,
  Episode33,
  Episode34,
  Episode35,
  Episode36,
  Episode37,
  Episode38,
  Episode39,
  Episode40,
  Episode41,
  Episode42,
  Episode43,
  Episode44,
  Episode45,
  Episode46,
  Episode47,
  Episode48,
  Episode49,
  Episode50,
  Episode51,
  Episode52,
  Episode53,
  Episode54,
  Episode55,
  Episode56,
  Episode57,
  Episode58,
  Episode59,
  Episode60,
  Episode61,
  Episode62,
  Episode63,
  Episode64,
  Episode65,
  Episode66,
  Episode67,
  Episode68,
  Episode69,
  Episode70,
  Episode71,
  Episode72,
  Episode73,
  Episode74,
  Episode75,
  Episode76,
  Episode77,
  Episode78,
  Episode79,
  Episode80,
  Episode81,
  Episode82,
  Episode83,
  Episode84,
  Episode85,
  Episode86,
  Episode87,
  Episode88,
  Episode89,
  Episode90,
  Episode91,
  Episode92,
  Episode93,
  Episode94,
  Episode95,
  Episode96,
  Episode97,
  Episode98,
  Episode99,
  Episode100,
  Episode101,
  Episode101,
  Episode102,
  Episode103,
  Episode104,
  Episode105,
  Episode106,
  Episode107,
  Episode108,
  Episode109,
  Episode110,
  Episode111,
  Episode112,
  Episode113,
  Episode114,
  Episode115,
  Episode116,
  Episode117,
  Episode118,
  Episode119,
  Episode120,
  Episode121,
  Episode122,
  Episode123,
  Episode124,
  Episode125,
  Episode126,
  Episode127,
  Episode128,
  Episode129,
  Episode130,
  Episode131,
  Episode132,
  Episode133,
  Episode134,
  Episode135,
  Episode136,
  Episode137,
  Episode138,
  Episode139,
  Episode140,
  Episode141,
  Episode142,
  Episode143,
  Episode144,
];
