const Data = [
    {id:"0", category:"Albert Einstein", body : "Life is like riding a bicycle. To keep your balance you must keep moving.", by : "Albert Einstein" },
    {id:"1", category:"Albert Einstein", body : "The important thing is not to stop questioning. Curiosity has its own reason for existing.", by : "Albert Einstein" },
    {id:"2", category:"Albert Einstein", body : "No problem can be solved from the same level of consciousness that created it.", by : "Albert Einstein" },
    {id:"3", category:"Albert Einstein", body : "Try not to become a man of success, but rather try to become a man of value.", by : "Albert Einstein" },
    {id:"4", category:"Donald Trump", body : "I try to learn from the past, but I plan for the future by focusing exclusively on the present. That's where the fun is.", by : "Donald Trump" },
    {id:"5", category:"Donald Trump", body : "The point is that you can't be too greedy.", by : "Donald Trump" },
    {id:"6", category:"Abraham Lincoln", body : "My father taught me to work; he did not teach me to love it.", by : "Abraham Lincoln" },
    {id:"7", category:"Abraham Lincoln", body : "Common looking people are the best in the world: that is the reason the Lord makes so many of them.", by : "Abraham Lincoln" },
    {id:"8", category:"Abraham Lincoln", body : "How many legs does a dog have if you call the tail a leg? Four. Calling a tail a leg doesn't make it a leg.", by : "Abraham Lincoln" },
    {id:"9", category:"Abraham Lincoln", body : "And in the end it's not the years in your life that count. It's the life in your years.", by : "Abraham Lincoln" },
    {id:"10", category:"Abraham Lincoln", body : "My experience has taught me that a man who has no vices has damned few virtues.", by : "Abraham Lincoln" },
    {id:"11", category:"Abraham Lincoln", body : "Will springs from the two elements of moral sense and self-interest.", by : "Abraham Lincoln" },
    {id:"12", category:"Abraham Lincoln", body : "I am a slow walker, but I never walk backwards.", by : "Abraham Lincoln" },
    {id:"13", category:"Abraham Lincoln", body : "I will prepare and some day my chance will come.", by : "Abraham Lincoln" },
    {id:"14", category:"Abraham Lincoln", body : "I never had a policy; I have just tried to do my very best each and every day.", by : "Abraham Lincoln" },
    {id:"15", category:"Abraham Lincoln", body : "If there is anything that a man can do well, I say let him do it. Give him a chance.", by : "Abraham Lincoln" },
    {id:"16", category:"Abraham Lincoln", body : "You cannot escape the responsibility of tomorrow by evading it today.", by : "Abraham Lincoln" },
    {id:"17", category:"Abraham Lincoln", body : "Nearly all men can stand adversity, but if you want to test a man's character, give him power.", by : "Abraham Lincoln" },
    {id:"18", category:"Abraham Lincoln", body : "", by : "Abraham Lincoln" },
    {id:"19", category:"Abraham Lincoln", body : "I do not think much of a man who is not wiser today than he was yesterday.", by : "Abraham Lincoln" },
    {id:"20", category:"Abraham Lincoln", body : "People are just as happy as they make up their minds to be.", by : "Abraham Lincoln" },
    {id:"21", category:"Albert Einstein", body : "Imagination is more important than knowledge.", by : "Albert Einstein" },
    {id:"22", category:"Albert Einstein", body : "The hardest thing in the world to understand is the income tax.", by : "Albert Einstein" },
    {id:"23", category:"Albert Einstein", body : "Reality is merely an illusion, albeit a very persistent one.", by : "Albert Einstein" },
    {id:"24", category:"Albert Einstein", body : "The only real valuable thing is intuition.", by : "Albert Einstein" },
    {id:"25", category:"Albert Einstein", body : "A person starts to live when he can live outside himself.", by : "Albert Einstein" },
    {id:"26", category:"Albert Einstein", body : "Weakness of attitude becomes weakness of character.", by : "Albert Einstein" },
    {id:"27", category:"Albert Einstein", body : "I never think of the future. It comes soon enough.", by : "Albert Einstein" },
    {id:"28", category:"Albert Einstein", body : "The eternal mystery of the world is its comprehensibility.", by : "Albert Einstein" },
    {id:"29", category:"Albert Einstein", body : "Sometimes one pays most for the things one gets for nothing.", by : "Albert Einstein" },
    {id:"30", category:"Albert Einstein", body : "Science without religion is lame. Religion without science is blind.", by : "Albert Einstein" },
    {id:"31", category:"Albert Einstein", body : "Anyone who has never made a mistake has never tried anything new.", by : "Albert Einstein" },
    {id:"32", category:"Albert Einstein", body : "Great spirits have often encountered violent opposition from weak minds.", by : "Albert Einstein" },
    {id:"33", category:"Albert Einstein", body : "Common sense is the collection of prejudices acquired by age eighteen.", by : "Albert Einstein" },
    {id:"34", category:"Albert Einstein", body : "Science is a wonderful thing if one does not have to earn one's living at it.", by : "Albert Einstein" },
    {id:"35", category:"Albert Einstein", body : "The secret to creativity is knowing how to hide your sources.", by : "Albert Einstein" },
    {id:"36", category:"Albert Einstein", body : "The only thing that interferes with my learning is my education.", by : "Albert Einstein" },
    {id:"37", category:"Albert Einstein", body : "God does not care about our mathematical difficulties. He integrates empirically.", by : "Albert Einstein" },
    {id:"38", category:"Albert Einstein", body : "The whole of science is nothing more than a refinement of everyday thinking.", by : "Albert Einstein" },
    {id:"39", category:"Albert Einstein", body : "Technological progress is like an axe in the hands of a pathological criminal.", by : "Albert Einstein" },
    {id:"40", category:"Albert Einstein", body : "Peace cannot be kept by force. It can only be achieved by understanding.", by : "Albert Einstein" },
    {id:"41", category:"Albert Einstein", body : "The most incomprehensible thing about the world is that it is comprehensible.", by : "Albert Einstein" },
    {id:"42", category:"Albert Einstein", body : "Education is what remains after one has forgotten everything he learned in school.", by : "Albert Einstein" },
    {id:"43", category:"Albert Einstein", body : "Do not worry about your difficulties in Mathematics. I can assure you mine are still greater.", by : "Albert Einstein" },
    {id:"44", category:"Albert Einstein", body : "Equations are more important to me, because politics is for the present, but an equation is something for eternity.", by : "Albert Einstein" },
    {id:"45", category:"Albert Einstein", body : "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", by : "Albert Einstein" },
    {id:"46", category:"Albert Einstein", body : "As far as the laws of mathematics refer to reality, they are not certain, as far as they are certain, they do not refer to reality.", by : "Albert Einstein" },
    {id:"47", category:"Albert Einstein", body : "The fear of death is the most unjustified of all fears, for there's no risk of accident for someone who's dead.", by : "Albert Einstein" },
    {id:"48", category:"Albert Einstein", body : "In order to form an immaculate member of a flock of sheep one must, above all, be a sheep.", by : "Albert Einstein" },
    {id:"49", category:"Anthony Robbins", body : "A real decision is measured by the fact that you've taken a new action. If there's no action, you haven't truly decided.", by : "Anthony Robbins" },
    {id:"50", category:"Anthony Robbins", body : "Commit to CANI! - Constant And Never-ending Improvement.", by : "Anthony Robbins" },
    {id:"51", category:"Anthony Robbins", body : "For changes to be of any true value, they've got to be lasting and consistent.", by : "Anthony Robbins" },
    {id:"52", category:"Anthony Robbins", body : "If you do what you've always done, you'll get what you've always gotten.", by : "Anthony Robbins" },
    {id:"53", category:"Anthony Robbins", body : "In life you need either inspiration or desperation.", by : "Anthony Robbins" },
    {id:"54", category:"Anthony Robbins", body : "It is in your moments of decision that your destiny is shaped.", by : "Anthony Robbins" },
    {id:"55", category:"Anthony Robbins", body : "It is not what we get. But who we become, what we contribute... that gives meaning to our lives.", by : "Anthony Robbins" },
    {id:"56", category:"Anthony Robbins", body : "It not knowing what to do, it's doing what you know.", by : "Anthony Robbins" },
    {id:"57", category:"Anthony Robbins", body : "It's not the events of our lives that shape us, but our beliefs as to what those events mean.", by : "Anthony Robbins" },
    {id:"58", category:"Anthony Robbins", body : "Passion is the genesis of genius.", by : "Anthony Robbins" },
    {id:"59", category:"Anthony Robbins", body : "People are not lazy. They simply have impotent goals - that is, goals that do not inspire them.", by : "Anthony Robbins" },
    {id:"60", category:"Anthony Robbins", body : "Setting goals is the first step in turning the invisible into the visible.", by : "Anthony Robbins" },
    {id:"61", category:"Anthony Robbins", body : "The meeting of preparation with opportunity generates the offspring we call luck.", by : "Anthony Robbins" },
    {id:"62", category:"Anthony Robbins", body : "The path to success is to take massive, determined action.", by : "Anthony Robbins" },
    {id:"63", category:"Anthony Robbins", body : "The way we communicate with others and with ourselves ultimately determines the quality of our lives.", by : "Anthony Robbins" },
    {id:"64", category:"Anthony Robbins", body : "There is no such thing as failure. There are only results.", by : "Anthony Robbins" },
    {id:"65", category:"Anthony Robbins", body : "There's always a way - if you're committed.", by : "Anthony Robbins" },
    {id:"66", category:"Anthony Robbins", body : "There's no abiding success without commitment.", by : "Anthony Robbins" },
    {id:"67", category:"Anthony Robbins", body : "We aren't in an information age, we are in an entertainment age.", by : "Anthony Robbins" },
    {id:"68", category:"Anthony Robbins", body : "We can change our lives. We can do, have, and be exactly what we wish.", by : "Anthony Robbins" },
    {id:"69", category:"Anthony Robbins", body : "We will act consistently with our view of who we truly are, whether that view is accurate or not.", by : "Anthony Robbins" },
    {id:"70", category:"Anthony Robbins", body : "Whatever happens, take responsibility!", by : "Anthony Robbins" },
    {id:"71", category:"Anthony Robbins", body : "You always succeed in producing a result.", by : "Anthony Robbins" },
    {id:"72", category:"Brian Tracey", body : "The more credit you give away, the more will come back to you. The more you help others, the more they will want to help you.", by : "Brian Tracey" },
    {id:"73", category:"Brian Tracey", body : "It doesn't matter where you are coming from. All that matters is where you are going.", by : "Brian Tracey" },
    {id:"74", category:"Brian Tracey", body : "Relationships are the hallmark of the mature person.", by : "Brian Tracey" },
    {id:"75", category:"Brian Tracey", body : "Never say anything about yourself you do not want to come true.", by : "Brian Tracey" },
    {id:"76", category:"Brian Tracey", body : "The person we believe ourselves to be will always act in a manner consistent with our self-image.", by : "Brian Tracey" },
    {id:"77", category:"Brian Tracey", body : "We feel good about ourselves to the exact degree we feel in control of our lives.", by : "Brian Tracey" },
    {id:"78", category:"Brian Tracey", body : "You have within you right now, everything you need to deal with whatever the world can throw at you.", by : "Brian Tracey" },
    {id:"79", category:"Dale Carnegie", body : "Any fool can criticize, condemn, and complain -- and most fools do.", by : "Dale Carnegie" },
    {id:"80", category:"Dale Carnegie", body : "Remember happiness doesn't depend on who you are or what you have; it depends solely upon what you think.", by : "Dale Carnegie" },
    {id:"81", category:"Dale Carnegie", body : "Success is getting what you want. Happiness is wanting what you get.", by : "Dale Carnegie" },
    {id:"82", category:"Dale Carnegie", body : "Those convinced against their will are of the same opinion still.", by : "Dale Carnegie" },
    {id:"83", category:"Dale Carnegie", body : "I deal with the obvious. I present, reiterate and glorify the obvious -- because the obvious is what people need to be told.", by : "Dale Carnegie" },
    {id:"84", category:"Dale Carnegie", body : "The royal road to a man's heart is to talk to him about the things he treasures most.", by : "Dale Carnegie" },
    {id:"85", category:"Dale Carnegie", body : "If you want to be enthusiastic, act enthusiastic.", by : "Dale Carnegie" },
    {id:"86", category:"Dale Carnegie", body : "When fate hands us a lemon, let's try to make a lemonade.", by : "Dale Carnegie" },
    {id:"87", category:"Dale Carnegie", body : "The successful man will profit from his mistakes and try again in a different way.", by : "Dale Carnegie" },
    {id:"88", category:"Dale Carnegie", body : "Flaming enthusiasm, backed up by horse sense and persistence, is the quality that most frequently makes for success.", by : "Dale Carnegie" },
    {id:"89", category:"Dennis Waitley", body : "Mistakes are painful when they happen, but years later a collection of mistakes is what is called experience.", by : "Dennis Waitley" },
    {id:"90", category:"Dennis Waitley", body : "Expect the best, plan for the worst, and prepare to be surprised.", by : "Dennis Waitley" },
    {id:"91", category:"Dennis Waitley", body : "You must learn from your past mistakes, but not lean on your past successes.", by : "Dennis Waitley" },
    {id:"92", category:"Dennis Waitley", body : "It's not what you are that holds you back, it's what you think you are not.", by : "Dennis Waitley" },
    {id:"93", category:"Dennis Waitley", body : "Luck happens when opportunity encounters the prepared mind.", by : "Dennis Waitley" },
    {id:"94", category:"Dennis Waitley", body : "Losers make promises they often break. Winners make commitments they always keep.", by : "Dennis Waitley" },
    {id:"95", category:"Dennis Waitley", body : "Life is not accountable to us. We are accountable to life.", by : "Dennis Waitley" },
    {id:"96", category:"Dennis Waitley", body : "We have got to have a dream if we are going to make a dream come true.", by : "Dennis Waitley" },
    {id:"97", category:"Dennis Waitley", body : "Out of need springs desire, and out of desire springs the energy and the will to win.", by : "Dennis Waitley" },
    {id:"98", category:"Dennis Waitley", body : "Love is a daily, mutual exchange of value.", by : "Dennis Waitley" },
    {id:"99", category:"Dennis Waitley", body : "A smile is the light in your window that tells others that there is a caring, sharing person inside.", by : "Dennis Waitley" },
    {id:"100", category:"Dennis Waitley", body : "The greatest gifts you can give your children are the roots of responsibility and the wings of independence.", by : "Dennis Waitley" },
    {id:"101", category:"Donald Trump", body : "A little more moderation would be good. Of course, my life hasn't exactly been one of moderation.", by : "Donald Trump" },
    {id:"102", category:"Donald Trump", body : "Sometimes by losing a battle you find a new way to win the war.", by : "Donald Trump" },
    {id:"103", category:"Donald Trump", body : "You have to think anyway, so why not think big?", by : "Donald Trump" },
    {id:"104", category:"Donald Trump", body : "Money was never a big motivation for me, except as a way to keep score. The real excitement is playing the game.", by : "Donald Trump" },
    {id:"105", category:"Donald Trump", body : "No dream is too big. No challenge is too great. Nothing we want for our future is beyond our reach.", by : "Donald Trump" },
    {id:"106", category:"Donald Trump", body : "I've always won, and I'm going to continue to win. And that's the way it is.", by : "Donald Trump" },
    {id:"107", category:"Donald Trump", body : "I like thinking big. If you're going to be thinking anything, you might as well think big.", by : "Donald Trump" },
    {id:"108", category:"Earl Nightingale", body : "Our attitude toward life determines life's attitude towards us.", by : "Earl Nightingale" },
    {id:"109", category:"Earl Nightingale", body : "People with goals succeed because they know where they're going.", by : "Earl Nightingale" },
    {id:"110", category:"Earl Nightingale", body : "Success is the progressive realization of a worthy goal or ideal.", by : "Earl Nightingale" },
    {id:"111", category:"Earl Nightingale", body : "Open your ears before you open your mouth, it may surprise your eyes!", by : "Earl Nightingale" },
    {id:"112", category:"Earl Nightingale", body : "Your world is a living expression of how you are using and have used your mind.", by : "Earl Nightingale" },
    {id:"113", category:"Earl Nightingale", body : "We can let circumstances rule us, or we can take charge and rule our lives from within.", by : "Earl Nightingale" },
    {id:"114", category:"Earl Nightingale", body : "We can help others in the world more by making the most of yourself than in any other way.", by : "Earl Nightingale" },
    {id:"115", category:"Earl Nightingale", body : "Whenever we're afraid, its because we don't know enough. If we understood enough, we would never be afraid.", by : "Earl Nightingale" },
    {id:"116", category:"Earl Nightingale", body : "Whatever we plant in our subconscious mind and nourish with repetition and emotion will one day become a reality.", by : "Earl Nightingale" },
    {id:"117", category:"Earl Nightingale", body : "We tend to live up to our expectations.", by : "Earl Nightingale" },
    {id:"118", category:"Earl Nightingale", body : "You'll find boredom where there is an absence of a good idea.", by : "Earl Nightingale" },
    {id:"119", category:"Earl Nightingale", body : "Creativity is a natural extension of our enthusiasm.", by : "Earl Nightingale" },
    {id:"120", category:"Earl Nightingale", body : "Everything in the world we want to do or get done, we must do with and through people.", by : "Earl Nightingale" },
    {id:"121", category:"Earl Nightingale", body : "Our first journey is to find that special place for us.", by : "Earl Nightingale" },
    {id:"122", category:"Jim Rohn", body : "For every disciplined effort there is a multiple reward.", by : "Jim Rohn" },
    {id:"123", category:"Jim Rohn", body : "Formal education will make you a living; self-education will make you a fortune.", by : "Jim Rohn" },
    {id:"124", category:"Jim Rohn", body : "Give whatever you are doing and whoever you are with the gift of your attention.", by : "Jim Rohn" },
    {id:"125", category:"Jim Rohn", body : "Words do two major things: They provide food for the mind and create light for understanding and awareness.", by : "Jim Rohn" },
    {id:"126", category:"Jim Rohn", body : "Discipline is the bridge between goals and accomplishment.", by : "Jim Rohn" },
    {id:"127", category:"Jim Rohn", body : "Success is nothing more than a few simple disciplines, practiced every day.", by : "Jim Rohn" },
    {id:"128", category:"Jim Rohn", body : "Success is not to be pursued; it is to be attracted by the person you become.", by : "Jim Rohn" },
    {id:"129", category:"Jim Rohn", body : "Either you run the day or the day runs you.", by : "Jim Rohn" },
    {id:"130", category:"Jim Rohn", body : "Whatever good things we build end up building us.", by : "Jim Rohn" },
    {id:"131", category:"Jim Rohn", body : "We must all suffer one of two things: the pain of discipline or the pain of regret or disappointment.", by : "Jim Rohn" },
    {id:"132", category:"Jim Rohn", body : "Take care of your body. It's the only place you have to live.", by : "Jim Rohn" },
    {id:"133", category:"Jim Rohn", body : "Don't wish it were easier, wish you were better.", by : "Jim Rohn" },
    {id:"134", category:"Jim Rohn", body : "Don't say, \"If I could, I would.\" Say, \"If I can, I will\"", by : "Jim Rohn" },
    {id:"135", category:"Jim Rohn", body : "Indecision is the thief of opportunity.", by : "Jim Rohn" },
    {id:"136", category:"Jim Rohn", body : "You cannot change your destination overnight, but you can change your direction overnight.", by : "Jim Rohn" },
    {id:"137", category:"Mark Victor Hansen", body : "Ideas attract money, time, talents, skills, energy and other complementary ideas that will bring them into reality.", by : "Mark Victor Hansen" },
    {id:"138", category:"Mark Victor Hansen", body : "I never let my subject get in the way of what I want to talk about.", by : "Mark Victor Hansen" },
    {id:"139", category:"Mark Victor Hansen", body : "I want to talk with people who care about things that matter that will make a life- changing difference.", by : "Mark Victor Hansen" },
    {id:"140", category:"Mark Victor Hansen", body : "In imagination, there's no limitation.", by : "Mark Victor Hansen" },
    {id:"141", category:"Mark Victor Hansen", body : "When your self-worth goes up, your net worth goes up with it.", by : "Mark Victor Hansen" },
    {id:"142", category:"Mark Victor Hansen", body : "Imitate until you emulate; match and surpass those who launched you. It's the highest form of thankfulness.", by : "Mark Victor Hansen" },
    {id:"143", category:"Mark Victor Hansen", body : "Your belief determines your action and your action determines your results, but first you have to believe.", by : "Mark Victor Hansen" },
    {id:"144", category:"Mark Victor Hansen", body : "The more goals you set - the more goals you get.", by : "Mark Victor Hansen" },
    {id:"145", category:"Mark Victor Hansen", body : "With vision, every person, organization and country can flourish. The Bible says, 'Without vision we perish.", by : "Mark Victor Hansen" },
    {id:"146", category:"Mark Victor Hansen", body : "Predetermine the objectives you want to accomplish. Think big, act big and set out to accomplish big results.", by : "Mark Victor Hansen" },
    {id:"147", category:"Napoleon Hill", body : "The best job goes to the person who can get it done without passing the buck or coming back with excuses.", by : "Napoleon Hill" },
    {id:"148", category:"Napoleon Hill", body : "It is always your next move.", by : "Napoleon Hill" },
    {id:"149", category:"Napoleon Hill", body : "No one can make you jealous, angry, vengeful, or greedy -- unless you let him.", by : "Napoleon Hill" },
    {id:"150", category:"Napoleon Hill", body : "Everyone enjoys doing the kind of work for which he is best suited.", by : "Napoleon Hill" },
    {id:"151", category:"Napoleon Hill", body : "The most common cause of fear of old age is associated with the possibility of poverty.", by : "Napoleon Hill" },
    {id:"152", category:"Napoleon Hill", body : "There is always room for those who can be relied upon to deliver the goods when they say they will.", by : "Napoleon Hill" },
    {id:"153", category:"Napoleon Hill", body : "Just as our eyes need light in order to see, our minds need ideas in order to conceive.", by : "Napoleon Hill" },
    {id:"154", category:"Napoleon Hill", body : "Money without brains is always dangerous.", by : "Napoleon Hill" },
    {id:"155", category:"Napoleon Hill", body : "War grows out of the desire of the individual to gain advantage at the expense of his fellow men.", by : "Napoleon Hill" },
    {id:"156", category:"Napoleon Hill", body : "Persistence is to the character of man as carbon is to steel.", by : "Napoleon Hill" },
    {id:"157", category:"Napoleon Hill", body : "Don't wait. The time will never be just right.", by : "Napoleon Hill" },
    {id:"158", category:"Napoleon Hill", body : "The ladder of success is never crowded at the top.", by : "Napoleon Hill" },
    {id:"159", category:"Napoleon Hill", body : "All great truths are simple in final analysis, and easily understood; if they are not, they are not great truths.", by : "Napoleon Hill" },
    {id:"160", category:"Napoleon Hill", body : "If you cannot do great things, do small things in a great way.", by : "Napoleon Hill" },
    {id:"161", category:"Napoleon Hill", body : "No man can succeed in a line of endeavor which he does not like.", by : "Napoleon Hill" },
    {id:"162", category:"Napoleon Hill", body : "The most interesting thing about a postage stamp is the persistence with which it sticks to its job.", by : "Napoleon Hill" },
    {id:"163", category:"Napoleon Hill", body : "It is literally true that you can succeed best and quickest by helping others to succeed.", by : "Napoleon Hill" },
    {id:"164", category:"Napoleon Hill", body : "You might well remember that nothing can bring you success but yourself.", by : "Napoleon Hill" },
    {id:"165", category:"Napoleon Hill", body : "Indecision is the seedling of fear.", by : "Napoleon Hill" },
    {id:"166", category:"Napoleon Hill", body : "Big pay and little responsibility are circumstances seldom found together.", by : "Napoleon Hill" },
    {id:"167", category:"Norman Vincent Peale", body : "Empty pockets never held anyone back. Only empty heads and empty hearts can do that.", by : "Norman Vincent Peale" },
    {id:"168", category:"Norman Vincent Peale", body : "Live your life and forget your age.", by : "Norman Vincent Peale" },
    {id:"169", category:"Norman Vincent Peale", body : "First thing every morning before you arise say out loud, \"I believe,\" three times.", by : "Norman Vincent Peale" },
    {id:"170", category:"Norman Vincent Peale", body : "There is a real magic in enthusiasm. It spells the difference between mediocrity and accomplishment.", by : "Norman Vincent Peale" },
    {id:"171", category:"Norman Vincent Peale", body : "Stand up to your obstacles and do something about them. You will find that they haven't half the strength you think they have.", by : "Norman Vincent Peale" },
    {id:"172", category:"Norman Vincent Peale", body : "We struggle with the complexities and avoid the simplicities.", by : "Norman Vincent Peale" },
    {id:"173", category:"Norman Vincent Peale", body : "Never talk defeat. Use words like hope, belief, faith, victory.", by : "Norman Vincent Peale" },
    {id:"174", category:"Norman Vincent Peale", body : "Practice hope. As hopefulness becomes a habit, you can achieve a permanently happy spirit.", by : "Norman Vincent Peale" },
    {id:"175", category:"Norman Vincent Peale", body : "If you want to get somewhere you have to know where you want to go and how to get there. Then never, never, never give up.", by : "Norman Vincent Peale" },
    {id:"176", category:"Norman Vincent Peale", body : "In every difficult situation is potential value. Believe this, then begin looking for it.", by : "Norman Vincent Peale" },
    {id:"177", category:"Norman Vincent Peale", body : "The more you lose yourself in something bigger than yourself, the more energy you will have.", by : "Norman Vincent Peale" },
    {id:"178", category:"Norman Vincent Peale", body : "Understanding can overcome any situation, however mysterious or insurmountable it may appear to be.", by : "Norman Vincent Peale" },
    {id:"179", category:"Norman Vincent Peale", body : "The mind, ever the willing servant, will respond to boldness, for boldness, in effect, is a command to deliver mental resources.", by : "Norman Vincent Peale" },
    {id:"180", category:"Norman Vincent Peale", body : "Enthusiasm releases the drive to carry you over obstacles and adds significance to all you do.", by : "Norman Vincent Peale" },
    {id:"181", category:"Norman Vincent Peale", body : "It's always too soon to quit!", by : "Norman Vincent Peale" },
    {id:"182", category:"Norman Vincent Peale", body : "Cushion the painful effects of hard blows by keeping the enthusiasm going strong, even if doing so requires struggle.", by : "Norman Vincent Peale" },
    {id:"183", category:"Norman Vincent Peale", body : "Life's blows cannot break a person whose spirit is warmed at the fire of enthusiasm.", by : "Norman Vincent Peale" },
    {id:"184", category:"Norman Vincent Peale", body : "You can be greater than anything that can happen to you.", by : "Norman Vincent Peale" },
    {id:"185", category:"Norman Vincent Peale", body : "Go forward confidently, energetically attacking problems, expecting favorable outcomes.", by : "Norman Vincent Peale" },
    {id:"186", category:"Norman Vincent Peale", body : "Believe it is possible to solve your problem. Tremendous things happen to the believer. So believe the answer will come. It will.", by : "Norman Vincent Peale" },
    {id:"187", category:"Norman Vincent Peale", body : "When you are afraid, do the thing you are afraid of and soon you will lose your fear of it.", by : "Norman Vincent Peale" },
    {id:"188", category:"Norman Vincent Peale", body : "The more you venture to live greatly, the more you will find within you what it takes to get on top of things and stay there.", by : "Norman Vincent Peale" },
    {id:"189", category:"Norman Vincent Peale", body : "If you want things to be different, perhaps the answer is to become different yourself.", by : "Norman Vincent Peale" },
    {id:"190", category:"Norman Vincent Peale", body : "Believe that you are bigger than your difficulties, for you are, indeed.", by : "Norman Vincent Peale" },
    {id:"191", category:"Ralph Waldo Emerson", body : "Be aware when the great God lets loose a thinker on this planet.", by : "Ralph Waldo Emerson" },
    {id:"192", category:"Ralph Waldo Emerson", body : "Character is higher than intellect... A great soul will be strong to live, as well as to think.", by : "Ralph Waldo Emerson" },
    {id:"193", category:"Ralph Waldo Emerson", body : "Do not be too timid and squeamish about your actions. All life is an experiment.", by : "Ralph Waldo Emerson" },
    {id:"194", category:"Ralph Waldo Emerson", body : "Do not go where the path may lead, go instead where there is no path and leave a trail.", by : "Ralph Waldo Emerson" },
    {id:"195", category:"Ralph Waldo Emerson", body : "I awoke this morning with devout thanksgiving for my friends, the old and the new.", by : "Ralph Waldo Emerson" },
    {id:"196", category:"Ralph Waldo Emerson", body : "If I have lost confidence in myself, I have the universe against me.", by : "Ralph Waldo Emerson" },
    {id:"197", category:"Ralph Waldo Emerson", body : "Insist on yourself; never imitate... Every great man is unique.", by : "Ralph Waldo Emerson" },
    {id:"198", category:"Ralph Waldo Emerson", body : "Let not a man guard his dignity, but let his dignity guard him.", by : "Ralph Waldo Emerson" },
    {id:"199", category:"Ralph Waldo Emerson", body : "Nothing can bring you peace but yourself.", by : "Ralph Waldo Emerson" },
    {id:"200", category:"Ralph Waldo Emerson", body : "The only way to have a friend is to be one.", by : "Ralph Waldo Emerson" },
    {id:"201", category:"Ralph Waldo Emerson", body : "Trust men and they will be true to you; treat them greatly, and they will show themselves great.", by : "Ralph Waldo Emerson" },
    {id:"202", category:"Ralph Waldo Emerson", body : "The best effect of fine persons is felt after we have left their presence.", by : "Ralph Waldo Emerson" },
    {id:"203", category:"Ralph Waldo Emerson", body : "Every artist was first an amateur.", by : "Ralph Waldo Emerson" },
    {id:"204", category:"Ralph Waldo Emerson", body : "The reward of a thing well done is to have done it.", by : "Ralph Waldo Emerson" },
    {id:"205", category:"Robert H. Schuller", body : "Yes, you can be a dreamer and a doer too, if you will remove one word from your vocabulary: impossible.", by : "Robert H. Schuller" },
    {id:"206", category:"Robert H. Schuller", body : "You can often measure a person by the size of his dream.", by : "Robert H. Schuller" },
    {id:"207", category:"Robert H. Schuller", body : "Build a dream and the dream will build you.", by : "Robert H. Schuller" },
    {id:"208", category:"Robert H. Schuller", body : "Always look at what you have left. Never look at what you have lost.", by : "Robert H. Schuller" },
    {id:"209", category:"Robert H. Schuller", body : "If you listen to your fears, you will die never knowing what a great person you might have been.", by : "Robert H. Schuller" },
    {id:"210", category:"Robert H. Schuller", body : "Impossible situations can become possible miracles.", by : "Robert H. Schuller" },
    {id:"211", category:"Robert H. Schuller", body : "Let your imagination release your imprisoned possibilities.", by : "Robert H. Schuller" },
    {id:"212", category:"Robert H. Schuller", body : "Anyone can count the seeds in an apple, but only God can count the number of apples in a seed.", by : "Robert H. Schuller" },
    {id:"213", category:"Robert H. Schuller", body : "Most people who succeed n the face of seemingly impossible conditions are people who simply don't know how to quit.", by : "Robert H. Schuller" },
    {id:"214", category:"Robert H. Schuller", body : "Life is but a moment, death also is but another.", by : "Robert H. Schuller" },
    {id:"215", category:"Robert H. Schuller", body : "Better to do something imperfectly than to do nothing flawlessly.", by : "Robert H. Schuller" },
    {id:"216", category:"Robert H. Schuller", body : "What great thing would you attempt if you knew you could not fail?", by : "Robert H. Schuller" },
    {id:"217", category:"Robert H. Schuller", body : "The only place where your dream becomes impossible is in your own thinking.", by : "Robert H. Schuller" },
    {id:"218", category:"Robert H. Schuller", body : "Never cut a tree down in the wintertime. Never make a negative decision in the low time.", by : "Robert H. Schuller" },
    {id:"219", category:"Robert H. Schuller", body : "Problems are not stop signs, they are guidelines.", by : "Robert H. Schuller" },
    {id:"220", category:"Robert H. Schuller", body : "Let your hopes, not your hurts, shape your future.", by : "Robert H. Schuller" },
    {id:"221", category:"Robert H. Schuller", body : "Always look at what you have left. Never look at what you have lost.", by : "Robert H. Schuller" },
    {id:"222", category:"Robert T. Kiyosaki", body : "Failure defeats losers, failure inspires winners.", by : "Robert T. Kiyosaki" },
    {id:"223", category:"Robert T. Kiyosaki", body : "Your most expensive advice is the free advice you receive from your financially struggling friends and relatives.", by : "Robert T. Kiyosaki" },
    {id:"224", category:"Robert T. Kiyosaki", body : "Average investors are on the outside trying to look into the inside of the company or property they are investing in.", by : "Robert T. Kiyosaki" },
    {id:"225", category:"Robert T. Kiyosaki", body : "It's the investor who is risky, not the investment.", by : "Robert T. Kiyosaki" },
    {id:"226", category:"Robert T. Kiyosaki", body : "The idea of working all your life, saving, and putting money into a retirement account is a very slow plan.", by : "Robert T. Kiyosaki" },
    {id:"227", category:"Robert T. Kiyosaki", body : "If you don't first handle fear and desire, and you get rich, you'll be a high pay slave.", by : "Robert T. Kiyosaki" },
    {id:"228", category:"Robert T. Kiyosaki", body : "To gain more abundance a person needs more skills and needs to be more creative and cooperative.", by : "Robert T. Kiyosaki" },
    {id:"229", category:"Robert T. Kiyosaki", body : "The unique ability to take decisive action while maintaining focus on the ultimate mission is what defines a true leader.", by : "Robert T. Kiyosaki" },
    {id:"230", category:"Robert T. Kiyosaki", body : "By asking the question \"How can I afford it?\" your brain is put to work.", by : "Robert T. Kiyosaki" },
    {id:"231", category:"Thomas Edison", body : "Opportunity is missed by most people because it is dressed in overalls and looks like work.", by : "Thomas Edison" },
    {id:"232", category:"Thomas Edison", body : "My main purpose in life is to make money so I can afford to go on creating more inventions.", by : "Thomas Edison" },
    {id:"233", category:"Thomas Edison", body : "My principal business is giving commercial value to the brilliant - but misdirected ideas of others.", by : "Thomas Edison" },
    {id:"234", category:"Thomas Edison", body : "I am quite correctly described as 'more of a sponge than an inventor.", by : "Thomas Edison" },
    {id:"235", category:"Thomas Edison", body : "A good idea is never lost. Even though its originator or possessor may die, it will someday be reborn in the mind of another.", by : "Thomas Edison" },
    {id:"236", category:"Thomas Edison", body : "If we all did the things we are really capable of doing, we would literally astound ourselves.", by : "Thomas Edison" },
    {id:"237", category:"Thomas Edison", body : "I have far more respect for the person with a single idea who gets there than for the person with a thousand ideas who does nothing.", by : "Thomas Edison" },
    {id:"238", category:"Thomas Edison", body : "Many of life's failures are experienced by people who did not realize how close they were to success when they gave up.", by : "Thomas Edison" },
    {id:"239", category:"Thomas Edison", body : "Sometimes, all you need to invent something is a good imagination and a pile of junk.", by : "Thomas Edison" },
    {id:"240", category:"Thomas Edison", body : "The thing I lose patience with the most is the clock. Its hands move too fast.", by : "Thomas Edison" },
    {id:"241", category:"Thomas Edison", body : "Time is really the only capital that any human being has and the thing that he can least afford to waste or lose.", by : "Thomas Edison" },
    {id:"242", category:"Thomas Edison", body : "Whatever the mind of man creates, should be controlled by man's character.", by : "Thomas Edison" },
    {id:"243", category:"Thomas Edison", body : "Someday, man will harness the rise and fall of the tides, imprison the power of the sun, and release atomic power.", by : "Thomas Edison" },
    {id:"244", category:"Thomas Edison", body : "Until man duplicates a blade of grass, nature can laugh at his so-called scientific knowledge.", by : "Thomas Edison" },
    {id:"245", category:"Thomas Edison", body : "I believe that the science of chemistry alone almost proves the existence of an intelligent creator.", by : "Thomas Edison" },
    {id:"246", category:"Thomas Edison", body : "If parents pass enthusiasm along to their children, they will leave them an estate of incalculable value.", by : "Thomas Edison" },
    {id:"247", category:"Thomas Edison", body : "Life's most soothing things are a child's goodnight and sweet music.", by : "Thomas Edison" },
    {id:"248", category:"Thomas Jefferson", body : "I believe that every human mind feels pleasure in doing good to another.", by : "Thomas Jefferson" },
    {id:"249", category:"Thomas Jefferson", body : "The most valuable of all talents is that of never using two words when one will do.", by : "Thomas Jefferson" },
    {id:"250", category:"Thomas Jefferson", body : "Friendship is precious, not only in the shade, but in the sunshine of life.", by : "Thomas Jefferson" },
    {id:"251", category:"Thomas Jefferson", body : "It is my principle that the will of the majority should always prevail.", by : "Thomas Jefferson" },
    {id:"252", category:"Thomas Jefferson", body : "When a man assumes a public trust, he should consider himself as public property.", by : "Thomas Jefferson" },
    {id:"253", category:"Thomas Jefferson", body : "The man who fears no truths has nothing to fear from lies.", by : "Thomas Jefferson" },
    {id:"254", category:"Thomas Jefferson", body : "A coward is much more exposed to quarrels than a man of spirit.", by : "Thomas Jefferson" },
    {id:"255", category:"Thomas Jefferson", body : "I'm a great believer in luck, and I find the harder I work the more I have of it.", by : "Thomas Jefferson" },
    {id:"256", category:"Thomas Jefferson", body : "Never spend your money before you have it.", by : "Thomas Jefferson" },
    {id:"257", category:"Thomas Jefferson", body : "Never trouble another for what you can do for yourself.", by : "Thomas Jefferson" },
    {id:"258", category:"Thomas Jefferson", body : "Nothing gives one person so much advantage over another as to remain always cool and unruffled under all circumstances.", by : "Thomas Jefferson" },
    {id:"259", category:"Thomas Jefferson", body : "Walking is the best possible exercise. Habituate yourself to walk very far.", by : "Thomas Jefferson" },
    {id:"260", category:"W. Clement Stone", body : "Aim for the moon. If you miss, you may hit a star.", by : "W. Clement Stone" },
    {id:"261", category:"W. Clement Stone", body : "Be careful the environment you choose for it will shape you; be careful the friends you choose for you will become like them.", by : "W. Clement Stone" },
    {id:"262", category:"W. Clement Stone", body : "If there is something to gain and nothing to lose by asking, by all means ask!", by : "W. Clement Stone" },
    {id:"263", category:"W. Clement Stone", body : "Self-suggestion makes you master of yourself.", by : "W. Clement Stone" },
    {id:"264", category:"W. Clement Stone", body : "Tell everyone what you want to do and someone will want to help you do it.", by : "W. Clement Stone" },
    {id:"265", category:"W. Clement Stone", body : "Thinking will not overcome fear but action will.", by : "W. Clement Stone" },
    {id:"266", category:"W. Clement Stone", body : "Truth will always be truth, regardless of lack of understanding, disbelief or ignorance.", by : "W. Clement Stone" },
    {id:"267", category:"W. Clement Stone", body : "When we direct our thoughts properly, we can control our emotions.", by : "W. Clement Stone" },
    {id:"268", category:"W. Clement Stone", body : "You affect your subconscious mind by verbal repetition.", by : "W. Clement Stone" },
    {id:"269", category:"W. Clement Stone", body : "Definiteness of purpose is the starting point of all achievement", by : "W. Clement Stone" },
    {id:"270", category:"W. Clement Stone", body : "Success is achieved and maintained by those who try and keep trying.", by : "W. Clement Stone" },
    {id:"271", category:"Zig Ziglar", body : "You are the only person on earth who can use your ability.", by : "Zig Ziglar" },
    {id:"272", category:"Zig Ziglar", body : "When you put faith, hope and love together, you can raise positive kids in a negative world.", by : "Zig Ziglar" },
    {id:"273", category:"Zig Ziglar", body : "There has never been a statue erected to honor a critic.", by : "Zig Ziglar" },
    {id:"274", category:"Zig Ziglar", body : "Failure is a detour, not a dead-end street.", by : "Zig Ziglar" },
    {id:"275", category:"Zig Ziglar", body : "What you get by achieving your goals is not as important as what you become by achieving your goals.", by : "Zig Ziglar" },
    {id:"276", category:"Zig Ziglar", body : "Happiness is not pleasure, it is victory.", by : "Zig Ziglar" },
    {id:"277", category:"Zig Ziglar", body : "Every sale has five basic obstacles: no need, no money, no hurry, no desire, no trust.", by : "Zig Ziglar" },
    {id:"278", category:"Zig Ziglar", body : "It's not what you've got, it's what you use that makes a difference.", by : "Zig Ziglar" },
    {id:"279", category:"Zig Ziglar", body : "Success is the maximum utilization of the ability that you have.", by : "Zig Ziglar" },
    {id:"280", category:"Zig Ziglar", body : "Winning is not everything, but the effort to win is.", by : "Zig Ziglar" },
    {id:"281", category:"Zig Ziglar", body : "Efficiency is doing things right. Effectiveness is doing the right thing.", by : "Zig Ziglar" },
    {id:"282", category:"Zig Ziglar", body : "The person who will not stand for something will fall for anything.", by : "Zig Ziglar" },
    {id:"283", category:"Zig Ziglar", body : "It's your attitude not your aptitude that determines your altitude.", by : "Zig Ziglar" },
    {id:"284", category:"Zig Ziglar", body : "You do not pay the price of success, you enjoy the price of success.", by : "Zig Ziglar" },
    {id:"285", category:"Zig Ziglar", body : "All resources are not obvious; great managers find and develop available talent.", by : "Zig Ziglar" },
    {id:"286", category:"Zig Ziglar", body : "A goal properly set is halfway reached.", by : "Zig Ziglar" },
    {id:"287", category:"Zig Ziglar", body : "Positive thinking will let you do everything better than negative thinking will.", by : "Zig Ziglar" },
    {id:"289", category:"Taking Action", body : "You do not have to be great to start, but you have to start to be great.", by : "Joe Sabah " },
    {id:"290", category:"Taking Action", body : "You may be disappointed if you fail, but you are doomed if you never try.", by : "Beverly Sills " },
    {id:"291", category:"Taking Action", body : "Anything you can do needs to be done, so pick up the tool of your choice and get started.", by : "Ben Linder " },
    {id:"292", category:"Taking Action", body : "He who is outside the door has already a good part of his journey behind him.", by : "Dutch Proverb" },
    {id:"293", category:"Taking Action", body : "Vision without action is merely a dream. Action without vision just passes the time. Vision with action can change the world.", by : "Joel Arthur Barker" },
    {id:"294", category:"Taking Action", body : "Learning new things won’t help the person who isn’t using what he already knows.", by : "Anonymous" },
    {id:"295", category:"Taking Action", body : "No one knows what he can do until he tries.", by : "Pubilius Syrus" },
    {id:"296", category:"Taking Action", body : "The great aim of education is not knowledge, but action.", by : "Herbert Spencer" },
    {id:"297", category:"Taking Action", body : "It’s not what you know that makes the difference. It’s what you DO with what you know that makes the difference.", by : "Dr. Julie White" },
    {id:"298", category:"Taking Action", body : "You will get no more out of life than you put into it.", by : "William J.H. Boetcker" },
    {id:"299", category:"Taking Action", body : "What one does is what counts. Not what one had the intention of doing.", by : "Pablo Picasso" },
    {id:"300", category:"Taking Action", body : "Action will remove the doubt that theory can’t solve.", by : "Tehyi Hsieh" },
    {id:"301", category:"Taking Action", body : "Often greater risk is involved in postponement than in making a wrong decision.", by : "H.A. Hopf" },
    {id:"302", category:"Taking Action", body : "You can’t ‘try’ to do things; you simply must DO them.", by : "Ray Bradbury" },
    {id:"303", category:"Taking Action", body : "Jump into the middle of things, get your hands dirty, fall flat on your face, and then reach for the stars.", by : "Joan L. Curcio" },
    {id:"304", category:"Taking Action", body : "A wise man will make more opportunities than he finds.", by : "Francis Bacon" },
    {id:"305", category:"Taking Action", body : "Your actions, and your action alone, determines your worth.", by : "Johann G. Fichte" },
    {id:"306", category:"Taking Action", body : "The way to get ahead is to start now.", by : "William Feather" },
    {id:"307", category:"Taking Action", body : "Nothing will kill a deal like time.", by : "Joe Martin" },
    {id:"308", category:"Taking Action", body : "Move them forward, or move them out.", by : "Art Sobczak" },
    {id:"309", category:"Adversity", body : "Adversity is an experience, not a final act.", by : "Dr. Michael Leboeuf" },
    {id:"310", category:"Adversity", body : "If you don’t fail now and again, it’s a sign you’re playing it safe.", by : "Woody Allen" },
    {id:"311", category:"Adversity", body : "If you don’t fail now and again, it’s a sign you’re playing it safe.", by : "Woody Allen" },
    {id:"312", category:"Adversity", body : "Failure is an event, never a person.", by : "William D. Brown" },
    {id:"313", category:"Adversity", body : "Experience is not what happens to you. Experience is what you do with what happens to you.", by : "Aldous Huxley" },
    {id:"314", category:"Adversity", body : "Success is getting up one more time than you fall down.", by : "Doc Blakely" },
    {id:"315", category:"Adversity", body : "We must accept finite disappointment, but we must never lose infinite hope.", by : "Martin Luther King" },
    {id:"316", category:"Adversity", body : "If you want to increase your success rate, double your failure rate.", by : "Thomas Watson" },
    {id:"317", category:"Adversity", body : "Bad times have a scientific value. These are occasions a good learner would not miss.", by : "Ralph Waldo Emerson" },
    {id:"318", category:"Adversity", body : "There are two ways of meeting difficulties: you alter the difficulties or you alter yourself meeting them.", by : "Phyllis Bottome" },
    {id:"319", category:"Adversity", body : "The crisis of today is the joke of tomorrow.", by : "H.G. Wells" },
    {id:"320", category:"Adversity", body : "Success is going from failure to failure without a loss of enthusiasm.", by : "Sir Winston Churchill" },
    {id:"321", category:"Adversity", body : "While one person hesitates because he feels inferior, the other is busy making mistakes and becoming superior.", by : "Henry C. Link" },
    {id:"322", category:"Adversity", body : "We are often more frightened than hurt; and we suffer more from imagination than from reality.", by : "Anonymous" },
    {id:"323", category:"Adversity", body : "People are known as much for the quality of their failures as the quality of the successes.", by : "Mark McCormack" },
    {id:"324", category:"Adversity", body : "In every difficult situation is potential value. Believe this, then begin looking for it.", by : "Norman Vincent Peale" },
    {id:"325", category:"Adversity", body : "Life is 10% what happens to you and 90% how you react to it.", by : "Lou Holtz" },
    {id:"326", category:"Adversity", body : "It may not be your fault for being down, but it’s got to be your fault for not getting up.", by : "Steve Davis" },
    {id:"327", category:"Adversity", body : "Pain is inevitable. Suffering is optional.", by : "Unknown" },
    {id:"328", category:"Adversity", body : "Worry is like a rocking chair; you expend a lot of energy and never get anywhere.", by : "George Cummings" },
    {id:"329", category:"Adversity", body : "I can’t say I was ever lost, but I was bewildered once for three days.", by : "Daniel Boone" },
    {id:"330", category:"Attitude", body : "Of all the things you wear, your expression is the most important.", by : "Unknown" },
    {id:"331", category:"Attitude", body : "Attitudes are more important than facts.", by : "Dr. Karl Menninger" },
    {id:"332", category:"Attitude", body : "Outlook determines outcome; attitude determines action.", by : "Warren W. Wiersbe" },
    {id:"333", category:"Attitude", body : "It is easier to act yourself into feeling, than to feel yourself into acting.", by : "William James" },
    {id:"334", category:"Attitude", body : "If you think you can or you can’t, you’re always right.", by : "Henry Ford" },
    {id:"335", category:"Attitude", body : "If you want to change attitudes, start with a change in behavior.", by : "William Glasser" },
    {id:"336", category:"Attitude", body : "Enthusiasm is the greatest asset in the world. It beats money, power, and influence.", by : "Henry Chester" },
    {id:"337", category:"Attitude", body : "A man can succeed at almost anything for which he has unlimited enthusiasm.", by : "Charles M. Schwab" },
    {id:"338", category:"Attitude", body : "Once you say you’re going to settle for second, that’s what happens to you.", by : "John F. Kennedy" },
    {id:"339", category:"Attitude", body : "Nothing great was ever achieved without enthusiasm.", by : "Ralph Waldo Emerson" },
    {id:"340", category:"Attitude", body : "Life is a mirror and will reflect back to the thinker what he thinks into it.", by : "Ernest Holmes" },
    {id:"341", category:"Attitude", body : "What we see depends mainly on what we look for.", by : "John Lubbock" },
    {id:"342", category:"Attitude", body : "If you must doubt anything, doubt your perceived limitations.", by : "Unknown" },
    {id:"343", category:"Attitude", body : "All the technology in the world will never replace a positive attitude.", by : "Harvey Mackay" },
    {id:"344", category:"Think Big", body : "Dreams are powerful reflections of your actual growth potential.", by : "Dr. Denis Waitley" },
    {id:"345", category:"Think Big", body : "Great minds have purposes, others have wishes.", by : "Washington Irving" },
    {id:"346", category:"Think Big", body : "If you have the will to win, you have achieved half your success; if you don’t, you have achieved half your failure.", by : "David V.A. Ambrose" },
    {id:"347", category:"Think Big", body : "Life is a great big canvas, and you should throw all the paint on it you can.", by : "Danny Kaye" },
    {id:"348", category:"Think Big", body : "Wealth is largely the result of habit.", by : "John Jacob Astor" },
    {id:"349", category:"Think Big", body : "We would accomplish many more things if we did not think of them as impossible.", by : "C. Malesherbez" },
    {id:"350", category:"Goals", body : "You must have long term goals to keep you from being frustrated by short term failures.", by : "Charles C. Noble" },
    {id:"351", category:"Goals", body : "Nothing is as necessary for success as the single-minded pursuit of an objective.", by : "Fred Smith" },
    {id:"352", category:"Goals", body : "More people fail because of lack of purpose than do because of a lack of talent.", by : "Bill Sunday" },
    {id:"353", category:"Goals", body : "Success in sales, and life, is a series of tiny victories.", by : "Don Brummer" },
    {id:"354", category:"Goals", body : "Don’t make your goals too easy; you’ll be cheating yourself.", by : "Alec Mackenzie" },
    {id:"355", category:"Goals", body : "When you reach for the stars, you may not quite get one, but you won’t come up with a handful of mud, either.", by : "Leo Burnett" },
    {id:"356", category:"Goals", body : "If you’re surprised by what you achieve, you’re not setting your goals high enough.", by : "Elena Hesse" },
    {id:"357", category:"Learning", body : "To continue learning is to embrace the process of trial and error at higher and higher levels.", by : "Michael Gelb" },
    {id:"358", category:"Learning", body : "Real ongoing lifelong education doesn’t answer questions, it provokes them.", by : "Luci Swindol" },
    {id:"359", category:"Learning", body : "An investment in knowledge pays the best interest.", by : "Ben Franklin" },
    {id:"360", category:"Learning", body : "No man really becomes a fool until he stops asking questions.", by : "Charles P. Steinmetz" },
    {id:"361", category:"Learning", body : "Forget the times of your distress, but never forget what they taught you.", by : "Herbert Gasser" },
    {id:"362", category:"Learning", body : "A fact may be the smallest unit of information, but a story is the smallest unit of meaning.", by : "Kieran Egan" },
    {id:"363", category:"Learning", body : "Learn as if you were going to live forever. Live as if you were going to die tomorrow.", by : "Unknown" },
    {id:"364", category:"Learning", body : "To be happy, drop the words ‘if only’ and substitute instead the words ‘next time’.", by : "Smiley Blanton" },
    {id:"365", category:"Learning", body : "What we actually learn, from any given set of circumstances, determines whether we become increasingly powerless or more powerful.", by : "Blaine Lee" },
    {id:"366", category:"Persistence", body : "Effort only fully releases its reward after a person refuses to quit.", by : "Napolean Hill" },
    {id:"367", category:"Persistence", body : "The person who wins may have been counted out several times, but he didn’t hear the referee.", by : "H.E. Jansen" },
    {id:"368", category:"Persistence", body : "Life is a grindstone. But whether it grinds us down or polishes us up depends on us.", by : "L. Thomas Holdcroft" },
    {id:"369", category:"Persistence", body : "The thing we call ‘failure’ is not falling down, but staying down.", by : "Mary Pickford" },
    {id:"370", category:"Persistence", body : "If you are doing your best, you will not have time to worry about failure.", by : "Robert Hilyer" },
    {id:"371", category:"Persistence", body : "Everyone who got where he is had to begin where he was.", by : "Robert Louis Stevenson" },
    {id:"372", category:"Persistence", body : "Only those who have the patience to do simple things perfectly will acquire the skill to do difficult things easily.", by : "Johann Friedrich" },
    {id:"373", category:"Persistence", body : "We can learn to soar only in direct proportion to our determination to rise above the doubt and transcend the limitations.", by : "David McNally" },
    {id:"374", category:"Preparation", body : "To be prepared is to have no anxiety.", by : "Korean proverb" },
    {id:"375", category:"Preparation", body : "Chance favors the prepared mind.", by : "Louis Pasteur" },
    {id:"376", category:"Preparation", body : "In all things, success depends upon previous preparation, and without such preparation, there is failure.", by : "Confucius" },
    {id:"377", category:"Preparation", body : "I skate to where the puck is going to be, not where it has been.", by : "Wayne Gretzky" },
    {id:"378", category:"Preparation", body : "Your future depends on many things, but mostly on you.", by : "Frank Tyger" },
    {id:"379", category:"Preparation", body : "My whole life is waiting for the questions to which I have prepared answers.", by : "Tom Stoppard" },
    {id:"380", category:"Taking Risks", body : "Unless you try to do something beyond what you have already mastered, you will never grow.", by : "Charles Tremendous Jones" },
    {id:"381", category:"Taking Risks", body : "A ship in port is safe, but that’s not what ships are built for.", by : "John Shedd" },
    {id:"382", category:"Taking Risks", body : "If you’re never scared, embarrassed, or hurt, it means you never take any chances.", by : "Julia Sorel" },
    {id:"383", category:"Taking Risks", body : "Only those who risk going too far can possibly find out how far one can go.", by : "T.S. Eliot" },
    {id:"384", category:"Taking Risks", body : "Why not go out on a limb. Isn’t that where the fruit is?", by : "Frank Scully" },
    {id:"385", category:"Taking Risks", body : "Progress always involves risk. You can’t steal second base with your foot on first.", by : "Frederick Wilcox" },
    {id:"386", category:"Taking Risks", body : "If you limit your actions to things that nobody can possibly find fault with, you will not do much.", by : "Charles Lutwidge Dodgson" },
    {id:"387", category:"Taking Risks", body : "There’s as much risk in doing nothing as in doing something.", by : "Trammell Crow" },
    {id:"388", category:"Taking Risks", body : "Too many people are thinking of security rather than opportunity.", by : "James F. Byrnes" },
    {id:"389", category:"Taking Risks", body : "People who take risks are the people you’ll lose against.", by : "John Sculley" },
    {id:"390", category:"Taking Risks", body : "The person who makes no mistakes does not usually make anything.", by : "Bishop W.C. Magee" },
    {id:"391", category:"Taking Risks", body : "The only failure which lacks dignity is the failure to try.", by : "Malcom F. MacNeil" },
    {id:"392", category:"Taking Risks", body : "Life is either a daring adventure or nothing at all.", by : "Helen Keller" },
    {id:"393", category:"Taking Risks", body : "I think we should follow one simple rule: If we can take the worst, take the risk.", by : "Dr. Joyce Brothers" },
    {id:"394", category:"Taking Risks", body : "The greatest mistake you can make is to be continually fearing you will make one.", by : "Elbert Hubbard" },
    {id:"395", category:"Taking Risks", body : "Use action to cure fear and gain confidence. Do what you fear and fear disappears. Just try it and see.", by : "David Schwartz" },
    {id:"397", category:"Taking Risks", body : "What would you attempt to do if you knew you could not fail?", by : "Dr. Robert Schuller" },
    {id:"398", category:"Work", body : "Much good work is lost for the lack of a little more.", by : "Edward H. Harriman" },
    {id:"399", category:"Work", body : "The more I want to get something done, the less I call it work.", by : "Richard Bach" },
    {id:"400", category:"Work", body : "The world is full of willing people. Some willing to work, the others willing to let them.", by : "Robert Frost" },
    {id:"401", category:"Work", body : "You may have the loftiest goals, the highest ideals, the noblest dreams, but remember this, nothing works unless you do.", by : "Nido Quebein" },
    {id:"402", category:"Work", body : "Even if you are on the right track, you will get run over if you just sit there.", by : "Will Rogers" },
    {id:"403", category:"Work", body : "There are no shortcuts to any place worth going.", by : "Beverly Sills" },
    {id:"404", category:"Work", body : "He who is afraid of doing too much always does too little.", by : "German proverb" },
    {id:"405", category:"Work", body : "Unless a man undertakes more than he possibly can do, he will never do all he can do.", by : "Henry Drummond" },
    {id:"406", category:"Work", body : "When we do more than we are paid to do, eventually we will be paid more for what we do.", by : "Zig Ziglar" },
    {id:"407", category:"Work", body : "Opportunity is missed by most people because it is dressed in overalls and looks like work.", by : "Thomas Edison" },
    {id:"408", category:"Work", body : "The best preparation for good work tomorrow is good work today.", by : "Elbert Hubbard" },
    {id:"409", category:"Work", body : "People forget how fast you did a job, but they remember how well you did it.", by : "Howard W. Newton" },
    {id:"410", category:"Motivational", body : "The secret of success is to do common things uncommonly well.", by : "John Davidson Rockefeller" },
    {id:"411", category:"Motivational", body : "To be a leader, you must stand for something, or fall for anything.", by : "Anthony Pagano" },
    {id:"412", category:"Motivational", body : "The fastest way to pass your own expectation is to add passion to your labor.", by : "Mike Litman" },
    {id:"413", category:"Motivational", body : "Charity is injurious unless it helps the recipient to become independent of it.", by : "John Davidson Rockefeller" },
    {id:"414", category:"Motivational", body : "You miss 100% of the shots you don't take.", by : "Wayne Gretzky" },
    {id:"415", category:"Motivational", body : "Accept the past for what it was. Acknowledge the present for what it is. Anticipate the future for what it can become. ", by : "Tracy L. McNair" },
    {id:"416", category:"Motivational", body : "I always tried to turn every disaster into an opportunity. ", by : "John Davidson Rockefeller" },
    {id:"417", category:"Motivational", body : "Sometimes things become possible if we want them bad enough.", by : "T.S. Eliot" },
    {id:"418", category:"Motivational", body : "To accomplish great things, we must not only act, but also dream, not only plan, but also believe.", by : "Anatole France" },
    {id:"419", category:"Motivational", body : "To be a champion, you have to believe in yourself when nobody else will.", by : "Sugar Ray Robinson" },
    {id:"420", category:"Motivational", body : "If we are to achieve results never before accomplished, we must expect to employ methods never before attempted.", by : "Francis Bacon" },
    {id:"421", category:"Motivational", body : "Trust in yourself. Your perceptions are often far more accurate than you are willing to believe.", by : "Claudia Black" },
    {id:"422", category:"Motivational", body : "Motivation is like food for the brain. You cannot get enough in one sitting. It needs continual and regular refills.", by : "Peter Davies" },
    {id:"423", category:"Motivational", body : "You may be disappointed if you fail, but you are doomed if you do not try.", by : "Beverly Sills" },
    {id:"424", category:"Motivational", body : "I have failed over and over again. That is why I succeed.", by : "Michael Jordan" },
    {id:"425", category:"Motivational", body : "Never stop learning. If you learn one new thing everyday, you will overcome 99% of your competition.", by : "Joe Carlozo" },
    {id:"426", category:"Motivational", body : "It's a funny thing about life; if you refuse to accept anything but the best, you often get it.", by : "W. Somerset Manghan" },
    {id:"427", category:"Motivational", body : "Believe in yourself and you will be unstoppable.", by : "Emily Guay" },
    {id:"428", category:"Motivational", body : "No man ever became great without many and great mistakes.", by : "William E. Gladstone" },
    {id:"429", category:"Motivational", body : "n the long run, we only hit what we aim at.", by : "Henry David Thoreau" },
    {id:"430", category:"Motivational", body : "Success seems to be connected with action. Successful men keep moving; they make mistakes, but they do not quit.", by : "Conrad Hilton" },
    {id:"431", category:"Motivational", body : "Destiny is not a matter of chance; it's a matter of choice. It is not a thing to be waited for; it is a thing to be achieved. ", by : "Jeremy Kitson" },
    {id:"432", category:"Motivational", body : "All or our dreams can come true if we have the courage to pursue them. ", by : "Walt Disney" },
    {id:"433", category:"Motivational", body : "If I have the belief that I can do it, I shall surely acquire the capacity to do it even if I may not have the capacity at the beginning.", by : "Ghandi" },
    {id:"434", category:"Motivational", body : "If you can't do it today, what makes you think you can do it tomorrow.", by : "Yusuf Tara" },
    {id:"435", category:"Motivational", body : "Our intentions create our reality. ", by : "Dr. Wayne W. Dyer" },
    {id:"436", category:"Motivational", body : "If you realized how powerful your thoughts are, you would never think another negative thought.", by : "Peace Pilgrim" },
    {id:"437", category:"Motivational", body : "Some men have thousands of reasons why they cannot do what they want to; all they need is one reason why they can. ", by : "Willis Whitney" },
    {id:"438", category:"Motivational", body : "Everything you want is on the other side of fear. ", by : "Jack Canfield" },
    {id:"439", category:"Motivational", body : "Start by doing what is necessary, then what is possible, and suddenly you are doing the impossible. ", by : "Francis of Assisi" },
    {id:"440", category:"Bill Gates", body : "Don’t compare yourself with anyone in this world…if you do so, you are insulting yourself.", by : "Bill Gates" },
    {id:"441", category:"Bill Gates", body : "I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it.", by : "Bill Gates" },
    {id:"442", category:"Bill Gates", body : "Success is a lousy teacher. It seduces smart people into thinking they can’t lose.", by : "Bill Gates" },
    {id:"443", category:"Bill Gates", body : "If you are born poor it’s not your mistake, but if you die poor it’s your mistake.", by : "Bill Gates" },
    {id:"444", category:"Bill Gates", body : "Life is not fair get, used to it!", by : "Bill Gates" },
    {id:"445", category:"Bill Gates", body : "We make the future sustainable when we invest in the poor, not when we insist on their suffering.", by : "Bill Gates" },
    {id:"446", category:"Bill Gates", body : "It’s fine to celebrate success but it is more important to heed the lessons of failure.", by : "Bill Gates" },
    {id:"447", category:"Bill Gates", body : "We all need people who will give us feedback. That’s how we improve.", by : "Bill Gates" },
    {id:"448", category:"Bill Gates", body : "Treatment without prevention is simply unsustainable.", by : "Bill Gates" },
    {id:"449", category:"Bill Gates", body : "Discrimination has a lot of layers that make it tough for minorities to get a leg up.", by : "Bill Gates" },
    {id:"450", category:"Bill Gates", body : "As we look ahead into the next century, leaders will be those who empower others.", by : "Bill Gates" },
    {id:"451", category:"Bill Gates", body : "We’ve got to put a lot of money into changing behavior.", by : "Bill Gates" },
    {id:"452", category:"Bill Gates", body : "The general idea of the rich helping the poor, I think, is important.", by : "Bill Gates" },
    {id:"453", category:"Bill Gates", body : "I believe that if you show people the problems and you show them the solutions they will be moved to act.", by : "Bill Gates" },
    {id:"454", category:"Bill Gates", body : "Legacy is a stupid thing! I don’t want a legacy.", by : "Bill Gates" },
    {id:"455", category:"Bill Gates", body : "Lectures should go from being like the family singing around the piano to high-quality concerts.", by : "Bill Gates" },
    {id:"456", category:"Bill Gates", body : "Personally, I’d like to see more of our leaders take a technocratic approach to solving our biggest problems.", by : "Bill Gates" },
    {id:"457", category:"Bill Gates", body : "We have to find a way to make the aspects of capitalism that serve wealthier people serve poorer people as well.", by : "Bill Gates" },
    {id:"458", category:"Bill Gates", body : "Expectations are a form of first-class truth: If people believe it, it’s true.", by : "Bill Gates" },
    {id:"459", category:"Bill Gates", body : "Money has no utility to me beyond a certain point.", by : "Bill Gates" },
    {id:"460", category:"Bill Gates", body : "If you think your teacher is tough, wait ’til you get a boss. He doesn’t have tenure.", by : "Bill Gates" },
    {id:"461", category:"Bill Gates", body : "Be nice to nerds. Chances are you’ll end up working for one.", by : "Bill Gates" },
    {id:"462", category:"Elon Musk", body : "Life is too short for long-term grudges.", by : "Elon Musk" },
    {id:"463", category:"Elon Musk", body : "The first step is to establish that something is possible. Then probability will occur.", by : "Elon Musk" },
    {id:"464", category:"Elon Musk", body : "Great companies are built on great products.", by : "Elon Musk" },
    {id:"465", category:"Elon Musk", body : "If you get up in the morning and think the future is going to be better, it is a bright day. Otherwise, it’s not.", by : "Elon Musk" },
    {id:"466", category:"Elon Musk", body : "If you need inspiring words, don’t do it.", by : "Elon Musk" },
    {id:"467", category:"Elon Musk", body : "Good ideas are always crazy until they’re not.", by : "Elon Musk" },
    {id:"468", category:"Elon Musk", body : "When something is important enough, you do it even if the odds are not in your favor.", by : "Elon Musk" },
    {id:"469", category:"Elon Musk", body : "If something is important enough, even if the odds are against you, you should still do it.", by : "Elon Musk" },
    {id:"470", category:"Elon Musk", body : "I think it is possible for ordinary people to choose to be extraordinary.", by : "Elon Musk" },
    {id:"471", category:"Elon Musk", body : "Don’t confuse schooling with education. I didn’t go to Harvard but the people that work for me did.", by : "Elon Musk" },
    {id:"472", category:"Elon Musk", body : "Rockets are cool. There’s no getting around that.", by : "Elon Musk" },
    {id:"473", category:"Elon Musk", body : "Failure is an option here. if things are not failing, you are not innovating.", by : "Elon Musk" },
    {id:"474", category:"Elon Musk", body : "The first step is to establish that something is possible; then probability will occur.", by : "Elon Musk" },
    {id:"475", category:"Elon Musk", body : "Your Will is the most accurate way to predict the Future.", by : "Elon Musk" },
    {id:"476", category:"Elon Musk", body : "Take risks now and do something bold. You won’t regret it.", by : "Elon Musk" },
    {id:"477", category:"Elon Musk", body : "Patience is a virtue, and I’m learning patience. It’s a tough lesson.", by : "Elon Musk" },
    {id:"478", category:"Elon Musk", body : "If something is important enough you should try, even if the probable outcome is a failure.", by : "Elon Musk" },
    {id:"479", category:"Elon Musk", body : "If the rules are such that you can’t make progress, then you have to fight the rules.", by : "Elon Musk" },
    {id:"480", category:"Elon Musk", body : "Some people don’t like change, but you need to embrace change if the alternative is disaster.", by : "Elon Musk" },
    {id:"481", category:"Elon Musk", body : "You have to be pretty driven to make it happen. Otherwise, you will just make yourself miserable.", by : "Elon Musk" },
    {id:"482", category:"Elon Musk", body : "I could either watch it happen or be a part of it.", by : "Elon Musk" },
    {id:"483", category:"Elon Musk", body : "Persistence is very important. You should not give up unless you are forced to give up.", by : "Elon Musk" },
    {id:"484", category:"Elon Musk", body : "Constantly think about how you could be doing things better and keep questioning yourself.", by : "Elon Musk" },
    {id:"485", category:"Elon Musk", body : "It’s ok to have your eggs in one basket as long as you control what happens to that basket.", by : "Elon Musk" },
    {id:"486", category:"Elon Musk", body : "When I was in college, I wanted to be involved in things that would change the world.", by : "Elon Musk" },
    {id:"487", category:"Leadership", body : "Every time you have to speak, you are auditioning for leadership.", by : "James Humes" },
    {id:"488", category:"Leadership", body : "A good leader leads the people from above them. A great leader leads the people from within them.", by : "M. D. Arnold" },
    {id:"489", category:"Leadership", body : "Don't follow the crowd, let the crowd follow you.", by : "Margaret Thatcher" },
    {id:"490", category:"Leadership", body : "We are what we pretend to be, so we must be careful about what we pretend to be.", by : "Kurt Vonnegut" },
    {id:"491", category:"Leadership", body : "Leadership is the art of giving people a platform for spreading ideas that work.", by : "Seth Godin" },
    {id:"492", category:"Leadership", body : "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets the people to do the greatest things.", by : "Ronald Reagan" },
    {id:"493", category:"Leadership", body : "To add value to others, one must first value others.", by : "John Maxwell" },
    {id:"494", category:"Leadership", body : "The task of the leader is to get their people from where they are to where they have not been.", by : "Henry Kissinger" },
    {id:"495", category:"Leadership", body : "Treat people as if they were what they ought to be, and you help them become what they are capable of being.", by : "Johann Wolfgang von Goethe" },
    {id:"496", category:"Leadership", body : "I suppose leadership at one time meant muscles; but today it means getting along with people.", by : "Mahatma Gandhi" },
    {id:"497", category:"Leadership", body : "There are no office hours for leaders.", by : "Cardinal J. Gibbons" },
    {id:"498", category:"Leadership", body : "The important thing is this: to be able to give up in any given moment all that we are for what we can become.", by : "DeSeaux" },
    {id:"499", category:"Leadership", body : "The quality of a leader is reflected in the standards they set for themselves.", by : "Ray Kroc" },
    {id:"500", category:"Leadership", body : "Do what you feel in your heart to be right, for you'll be criticized anyway.", by : "Eleanor Roosevelt" },
    {id:"501", category:"Leadership", body : "I cannot give you the formula for success, but I can give you the formula for failure, which is: Try to please everybody.", by : "Herbert Swope" },
    {id:"502", category:"Leadership", body : "Becoming a leader is synonymous with becoming yourself. It is precisely that simple and it is also that difficult.", by : "Warren Bennis" },
    {id:"503", category:"Leadership", body : "Wisdom is knowing what to do next, skill is knowing how to do it, and virtue is doing it.", by : "David Star Jordan" },
    {id:"504", category:"Leadership", body : "Leaders don't inflict pain, they share pain.", by : "Max Depree" },
    {id:"505", category:"Leadership", body : "The growth and development of people is the highest calling of leadership.", by : "Harvey S. Firestone" },
    {id:"506", category:"Leadership", body : "Management is doing things right; leadership is doing the right thing.", by : "Peter F. Drucker" },
    {id:"507", category:"Leadership", body : "The function of leadership is to produce more leaders, not more followers.", by : "Ralph Nader" },
    {id:"508", category:"Leadership", body : "Leadership is the capacity to translate vision into reality.", by : "Warren G. Bennis" },
    {id:"509", category:"Leadership", body : "There exist limitless opportunities in every industry. Where there is an open mind, there will always be a frontier.", by : "Charles F. Kettering" },
    {id:"510", category:"Leadership", body : "A leader is a person you will follow to a place you would not go by yourself.", by : "Joel Barker" },
    {id:"511", category:"Leadership", body : "A good leader takes a little more than his share of the blame, a little less than his share of the credit.", by : "Arnold Glasow" },
    {id:"512", category:"Leadership", body : "Effective leadership is not about making speeches or being liked; leadership is defined by results, not attributes.", by : "Peter F. Drucker" },
    {id:"513", category:"Leadership", body : "A leader is one who knows the way, goes the way, and shows the way.", by : "John Maxwell" },
    {id:"514", category:"Leadership", body : "Leaders think and talk about the solutions. Followers think and talk about the problems.", by : "Brian Tracy" },
    {id:"515", category:"Leadership", body : "Leadership is the art of getting someone else to do something you want done because he wants to do it.", by : "Dwight D. Eisenhower" },
    {id:"516", category:"Leadership", body : "The things we fear most in organizations--fluctuations, distubances, imbalances--are the primary sources of creativity.", by : "Margaret Wheatley" },
    {id:"517", category:"Leadership", body : "A leader is best when people barely know he exists. When his work is done, his aim fulfilled, they will say: we did it ourselves.", by : "Lao Tzu" },
    {id:"518", category:"Leadership", body : "A leader takes people where they want to go. A great leader takes people where they don't necessarily want to go, but ought to be.", by : "Rosalynn Carter" },
    {id:"519", category:"Leadership", body : "The art of leadership is saying no, not saying yes. It is very easy to say yes.", by : "Tony Blair" },
    {id:"520", category:"Leadership", body : "The price of greatness is responsibility.", by : "Winston Churchill" },
    {id:"521", category:"Leadership", body : "Today a reader, tomorrow a leader.", by : "Margaret Fuller" },
    {id:"522", category:"Leadership", body : "Anyone can hold the helm when the sea is calm.", by : "Publilius Syrus" },
    {id:"523", category:"Leadership", body : "Become the kind of leader that people would follow voluntarily, even if you had no title or position.", by : "Brian Tracy" },
    {id:"524", category:"Leadership", body : "You manage things; you lead people.", by : "Grace Murray Hopper" },
    {id:"525", category:"Leadership", body : "Leadership is not about titles, positions, or flowcharts. It is about one life influencing another.", by : "John C. Maxwell" },
    {id:"526", category:"Leadership", body : "People buy into the leader before they buy into the vision.", by : "John C. Maxwell" },
    {id:"527", category:"Leadership", body : "Doing what is right isn't the problem. It is knowing what is right.", by : "Lyndon B Johnson" },
    {id:"528", category:"Leadership", body : "Success is not final, failure is not fatal: it is the courage to continue that counts.", by : "Winston Churchill" },
    {id:"529", category:"Leadership", body : "Do not follow where the path may lead. Go instead where there is no path and leave a trail.", by : "Harold R. McAlindon" },
    {id:"530", category:"Leadership", body : "Keep your fears to yourself, but share your courage with others.", by : "Robert Louis Stevenson" },
    {id:"531", category:"Leadership", body : "There are two ways of spreading light: to be the candle or the mirror that reflects it.", by : "Edith Wharton" },
    {id:"532", category:"Leadership", body : "No man will make a great leader who wants to do it all himself, or to get all the credit for doing it.", by : "Andrew Carnegie" },
    {id:"533", category:"Leadership", body : "You take people as far as they will go, not as far as you would like them to go.", by : "Jeanette Rankin" },
    {id:"534", category:"Leadership", body : "Leadership and learning are indispensable to each other.", by : "John F. Kennedy" },
    {id:"535", category:"Leadership", body : "The role of leadership is to transform the complex situation into small pieces and prioritize them.", by : "Carlos Ghosn" },
    {id:"536", category:"Leadership", body : "Real leadership is leaders recognizing that they serve the people that they lead.", by : "Pete Hoekstra" },
    {id:"537", category:"Leadership", body : "To do great things is difficult; but to command great things is more difficult.", by : "Friedrich Nietzsche" },
    {id:"538", category:"Leadership", body : "Ninety percent of leadership is the ability to communicate something people want.", by : "Dianne Feinstein" },
    {id:"539", category:"Leadership", body : "Effective leadership is putting first things first. Effective management is discipline, carrying it out.", by : "Stephen Covey" },
    {id:"540", category:"Leadership", body : "The task of leadership is not to put greatness into humanity, but to elicit it, for the greatness is already there.", by : "John Buchan" },
    {id:"541", category:"Leadership", body : "Leadership is the art of getting someone else to do something you want done because he wants to do it.", by : "Dwight D. Eisenhower" },
    {id:"542", category:"Leadership", body : "Leadership cannot really be taught. It can only be learned.", by : "Harold Geneen" },
    {id:"543", category:"Leadership", body : "Look over your shoulder now and then to be sure someone's following you.", by : "Henry Gilmer" },
    {id:"544", category:"Leadership", body : "Innovation distinguishes between a leader and a follower.", by : "Steve Jobs" },
    {id:"545", category:"Leadership", body : "Great leaders are not defined by the absence of weakness, but rather by the presence of clear strengths.", by : "John Zenger" },
    {id:"546", category:"Leadership", body : "Don't be afraid to give up the good to go for the great.", by : "John D. Rockefeller" },
    {id:"547", category:"Leadership", body : "Leadership is unlocking people's potential to become better.", by : "Bill Bradley" },
    {id:"548", category:"Leadership", body : "The greatest leaders mobilize others by coalescing people around a shared vision.", by : "Ken Blanchard" },
    {id:"549", category:"Leadership", body : "The supreme quality of leadership is integrity.", by : "Dwight D. Eisenhower" },
    {id:"550", category:"Leadership", body : "The function of leadership is to produce more leaders, not more followers.", by : "Ralph Nader" },
    {id:"551", category:"Business", body : "It is better to fail in originality than to succeed in imitation.", by : "Herman Melville" },
    {id:"552", category:"Business", body : "The road to success and the road to failure are almost exactly the same.", by : " Colin R. Davis" },
    {id:"553", category:"Business", body : "Success usually comes to those who are too busy to be looking for it.", by : "Henry David Thoreau" },
    {id:"554", category:"Business", body : "Opportunities don't happen. You create them.", by : "Chris Grosser" },
    {id:"555", category:"Business", body : "Don't be afraid to give up the good to go for the great.", by : "John D. Rockefeller" },
    {id:"556", category:"Business", body : "I find that the harder I work, the more luck I seem to have.", by : "Thomas Jefferson" },
    {id:"557", category:"Business", body : "Never give in except to convictions of honor and good sense.", by : "Winston Churchill" },
    {id:"558", category:"Business", body : "Stop chasing the money and start chasing the passion.", by : "Tony Hsieh" },
    {id:"559", category:"Business", body : "The ones who are crazy enough to think they can change the world, are the ones that do.", by : "Anonymous" },
    {id:"560", category:"Business", body : "All progress takes place outside the comfort zone.", by : "Michael John Bobak" },
    {id:"561", category:"Business", body : "Don't let the fear of losing be greater than the excitement of winning.", by : "Robert Kiyosaki" },
    {id:"562", category:"Business", body : "If you really look closely, most overnight successes took a long time.", by : "Steve Jobs" },
    {id:"563", category:"Business", body : "The way to get started is to quit talking and begin doing.", by : "Walt Disney" },
    {id:"564", category:"Business", body : "The successful warrior is the average man, with laser-like focus.", by : "Bruce Lee" },
    {id:"565", category:"Business", body : "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.", by : "Colin Powell" },
    {id:"566", category:"Business", body : "I cannot give you the formula for success, but I can give you the formula for failure--It is: Try to please everybody.", by : "Herbert Bayard Swope" },
    {id:"567", category:"Business", body : "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", by : "Albert Schweitzer" },
    {id:"568", category:"Business", body : "If you can dream it, you can do it.", by : "Walt Disney" },
    {id:"569", category:"Business", body : "A successful man is one who can lay a firm foundation with the bricks that other throw at him.", by : "David Brinkley" },
    {
        "id": "570", "category":"Motivational", "body": "Intelligence without ambition is like a bird without wings.", "by": "C. Archie Danielson"
    },
   
    {
        "id": "571", "category":"Motivational", "body": "Some things have to be believed to be seen.", "by": "Ralph Hodgson"
    },
    {
        "id": "572", "category":"Motivational", "body": "Wealth is the product of man's ability to think.", "by": "Ayn Rand"
    },
    {
        "id": "573", "category":"Motivational", "body": "We must never be afraid to go too far, for success lies just beyond.", "by": "Marcel Proust"
    },
    
    {
        "id": "574", "category":"Motivational", "body": "High expectations are the key to everything.", "by": "Sam Walton"
    },
   
    {
        "id": "575", "category":"Motivational", "body":  "It is what you learn after you know it all that counts.", "by": "John Wooden"
    },
   
   
    {
        "id": "576", "category":"Motivational", "body":  "It is no sin to attempt and fail. The only sin is to not make the attempt.", "by": "Suellen Fried"
    },
    {
        "id": "577", "category":"Motivational", "body":  "Dreams are the reality of tomorrow.", "by": "Dean Marshall"
    },
    {
        "id": "578", "category":"Motivational", "body":  "If anything is worth trying at all, it's worth trying at least ten times. -", "by": "Art Linkletter"
    },
  
    {
        "id": "579", "category":"Motivational", "body":  "The atmosphere of expectancy is the breeding ground for miracles.", "by": "Rodney L. Parsley"
    },
    {
        "id": "580", "category":"Motivational", "body":  "Problems are only opportunities in work clothes.", "by": "Henry J. Kaiser"
    },
    {
        "id": "581", "category":"Motivational", "body":  "The best way to escape from a problem is to solve it.", "by": "Anonymous"
    },
    
   
    {
        "id": "582", "category":"Motivational", "body":  "You will become as small as your controlling desire; as great as your dominant aspiration.", "by": "James Allen"
    },
    
    {
        "id": "583", "category":"Motivational", "body":  "Procrastination is opportunities natural assassin.", "by": "Victor Kiam"
    },
    {
        "id": "584", "category":"Motivational", "body":  "Nothing is particularly hard if you divide it into small jobs.", "by": "Henry Ford"
    },
   
    {
        "id": "585", "category":"Motivational", "body":  "You can't build a reputation on what you are going to do.", "by": "Henry Ford"
    },
    {
        "id": "586", "category":"Motivational", "body":  "When I've heard all I need to make a decision, I don't take a vote. I make a decision.", "by": "Ronald Reagan"
    },
    {
        "id": "587", "category":"Motivational", "body":  "You can't have a better tomorrow if you are thinking about yesterday all the time.", "by": "Charles F. Kettering"
    },
   
    {
        "id": "588", "category":"Motivational", "body":  "Never complain about what you permit.", "by": "Mike Murdock"
    },
    {
        "id": "589", "category":"Motivational", "body":  "Take heed: you do not find what you do not seek.", "by": "Proverb"
    },
    {
        "id": "590", "category":"Motivational", "body":  "Our imagination is the only limit to what we can hope to have in the future." ,"by": "Charles Kettering"
    },
    
   
    {
        "id": "591", "category":"Motivational", "body":  "Keys to success: Research your ideas, plan for success, expect success, and just do it.", "by": "John S. Hinds"
    },
    {
        "id": "592", "category":"Motivational", "body":  "I maintained my edge by always being a student; you will always have something new to learn.", "by": "Jackie Joyner Kersee"
    },
    {
        "id": "593", "category":"Motivational", "body":  "It is not the mountain we conquer, but ourselves.", "by": "Sir Edmund Hillary"
    },
    {
        "id": "594", "category":"Motivational", "body":  "If what you did yesturday seems big, you haven't done anything today.", "by": "Lou Holtz"
    },
    {
        "id": "595", "category":"Motivational", "body":  "Life is change; growth is optional. Choose wisely.", "by": "Karen Kaiser Clark"
    },
    
    {
        "id": "596", "category":"Motivational", "body":  "You don't just stumble into the future you create your own future.", "by": "Roger Smith"
    },
    {
        "id": "597", "category":"Motivational", "body":  "This one step, choosing a goal and sticking to it, changes everything.", "by": "Scott reed"
    },
    {
        "id": "598", "category":"Motivational", "body":  "Failure? I never encountered it. All I ever met were temporary setbacks.", "by": "Dottie Walters"
    },
    {
        "id": "599", "category":"Motivational", "body":  "Great minds have purpose, while others just have wishes.", "by": "Washington Irving"
    },
   
    
    {
        "id": "601", "category":"Motivational", "body":  "Our life is what it is as a result of how we think.", "by": "George DeVack"
    },
    {
        "id": "602", "category":"Motivational", "body":  "We are what and where we are because we have first imagined it.", "by": "Donald Curtis"
    },
    {
        "id": "603", "category":"Motivational", "body":  "Even a mistake may turn out to be the one thing necessary to a worthwhile achievement.", "by": "Henry Ford"
    },
    {
        "id": "604", "category":"Motivational", "body":  "Action, to be effective, must be directed to clearly conceived ends.", "by": "Jawaharlal Nehru"
    },
    {
        "id": "605", "category":"Motivational", "body":  "Our imagination is the only limit to what we can hope to have in the future.", "by": "Charles Kettering"
    },
    {
        "id": "606", "category":"Motivational", "body":  "He who is afraid of asking is ashamed of learning.", "by": "Danish Proverb"
    },
    {
        "id": "607", "category":"Motivational", "body":  "Obstacles are what appear when you take your eyes off your dreams.", "by": "George DeVack"
    },
    
    {
        "id": "608", "category":"Motivational", "body":  "If we always look back, we lose sight of what's ahead.", "by": "Justin Sims"
    },
    {
        "id": "609", "category":"Motivational", "body":  "Success based on anything but internal fulfillment is bound to be empty.", "by": "Dr MArtha Friedman"
    },
    {
        "id": "610", "category":"Motivational", "body":  "Do not wait for ideal circumstances, nor for the best opportunities; they will never come.", "by": "Janet Erskine Stuart"
    },
    {
        "id": "611", "category":"Motivational", "body":  "Triumph often is nearest when defeat seems inescapable.", "by": "B.C. Forbes"
    },
    {
        "id": "612", "category":"Motivational", "body":  "An error gracefully acknowledged is a victory won.", "by": "Caroline L. Gascoigne"
    },
    {
        "id": "613", "category":"Motivational", "body":  "The courage to be is the courage to accept oneself, in spite of being unacceptable.", "by": "Paul Tillisch"
    },
    {
        "id": "614", "category":"Motivational", "body":  "Confidence imparts a wonderful inspiration to its possessor.", "by": "John Milton"
    },
    
    {
        "id": "615", "category":"Motivational", "body":  "The universe is full of magical things, patiently waiting for our wits to grow sharper.", "by": "Eden Phillpotts"
    },
    {
        "id": "616", "category":"Motivational", "body":  "The death of fear is in doing what you fear to do.", "by": "Sequichie Comingdeer"
    },
    {
        "id": "617", "category":"Motivational", "body":  "When we place blame, we give away our power.", "by": "Greg Anderson"
    },
    {
        "id": "618", "category":"Motivational", "body":  "What really matters is what you do with what you have.", "by": "Shirley Lord"
    },
    
    {
        "id": "619", "category":"Motivational", "body":  "Happiness does not depend on outward things, but on the way we see them.", "by": "Leo tolstoy"
    },
    {
        "id": "620", "category":"Motivational", "body":  "Your self-beliefs either support or undermine you.", "by": "Marsha Sinetar"
    },
    {
        "id": "621", "category":"Motivational", "body":  "The greatest mistake you can make in life is to be continually fearing you will make one.", "by": "Elbert Hubbard"
    },
    
    {
        "id": "622", "category":"Motivational", "body":  "While we may not be able to control all that happens to us, we can control what happens inside us.", "by": "Benjamin Franklin"
    },
    {
        "id": "623", "category":"Motivational", "body":  "Draw from others the lesson that may profit yourself.", "by": "Terrance"
    },
    {
        "id": "624", "category":"Motivational", "body":  "Living a life of integrity is one of the greatest missions we can undertake.", "by": "Greg Anderson"
    },
    {
        "id": "625", "category":"Motivational", "body":  "Life does not happen to us, it happens from us.", "by": "Mike Wickett"
    },
    {
        "id": "626", "category":"Motivational", "body":  "What concerns me is not the way things are, but rather the way people think things are.", "by": "Epicetus"
    },
    {
        "id": "627", "category":"Motivational", "body":  "No one can make you feel inferior without your consent.", "by": "Eleanor Roosevelt"
    },
    {
        "id": "628", "category":"Motivational", "body":  "Where there is no vision, the people perish.", "by": "Proverbs 29:18"
    },
    {
        "id": "629", "category":"Motivational", "body":  "They are able because they think they are able.", "by": "Virgil"
    },
    {
        "id": "630", "category":"Motivational", "body":  "Whatever we leave to God, God does and blesses us.", "by": "Henry David Thoreau"
    },
    {
        "id": "631", "category":"Motivational", "body":  "Therefore do not worry about tomorrow, for tomorrow will worry about its own things. Sufficient for the day is its own trouble.", "by": "Matthew 6: 34"
    },
    {
        "id": "632", "category":"Motivational", "body":  "Growth and change are never easy...If it were easy, you would have done it long ago.", "by": "Lawrence LeShan"
    },
    {
        "id": "633", "category":"Motivational", "body":  "Repeat anything long enough and it will start to become you.", "by": "Tom Hopkins"
    },
    
   
    {
        "id": "634", "category":"Motivational", "body":  "Great minds have purpose, others have wishes.", "by": "Washington Irving"
    },
    {
        "id": "635", "category":"Motivational", "body":  "There is no security on this earth; there is only opportunity.", "by": "Douglas MacArthur"
    },
    
    
    {
        "id": "636", "category":"Motivational", "body":  "The first step towards success in any occupation is to become interested in it.", "by": "Sir William Osler"
    },
    {
        "id": "637", "category":"Motivational", "body":  "Ultimately we know deeply that the other side of every fear is a freedom.", "by": "Marilyn Ferguson"
    },
    {
        "id": "638", "category":"Motivational", "body":  "Man is a goal-seeking animal. His life only has meaning if he is reaching out and striving for his goals.", "by": "Aristotle"
    },
    
    {
        "id": "639", "category":"Motivational", "body":  "Human beings can alter their lives by altering their attitudes of mind.", "by": "William James"
    },
   
    
    {
        "id": "640", "category":"Motivational", "body":  "We cannot always build the future for our youth, but we can build our youth for the future.", "by": "Franklin Delano Roosevelt"
    },
   
    {
        "id": "641", "category":"Motivational", "body":  "Follow your instincts. That's where true wisdom manifests itself.", "by": "Oprah Winfrey"
    },
    {
        "id": "642", "category":"Motivational", "body":  "Opportunity does not knock; it presents itself when you beat down the door.","by": "Kyle Chandler"
    },
    {
        "id":"643",  "category": "Inspirational", "body": "But no one thinks of changing himself.", "by":" Count Leo Tolstoy"
    },
    {
        "id":"644", "category": "Inspirational", "body": "You are not what you think you are, but what your THINK, you are.", "by":"M.V.Hansen"
    },
    {
        "id":"645", "category": "Inspirational", "body": "Fears are educated into us and can, if we wish, be educated out..", "by":"Karl Menninger"
    },
   
    {
        "id":"646", "category": "Inspirational", "body": "However beautiful the strategy, you should occasionally look at the results.", "by":" Unknown"
    },
    {
        "id":"647", "category": "Inspirational", "body": "The pain lies in the difference of what we think should happen and what actually happens.", "by":"Vernon Howard"
    },
    {
        "id":"648", "category": "Inspirational", "body": "It is in the expectations of happiness that much of happiness itself is found."
    },
    {
        "id":"649", "category": "Inspirational", "body": "And it takes courage to expect happiness.", "by":" Earl Nightingale"
    },
   
    {
        "id":"650", "category": "Inspirational", "body": "Defeat is not the worst of failures. Not to have tried is the true failure..", "by":"George E. Woodberry"
    },
    {
        "id":"651", "category": "Inspirational", "body": "If you change the way you look at things, the things you look at change..", "by":"Dr. Wayne Dayer"
    },
    {
        "id":"652", "category": "Inspirational", "body": "Courage is doing what you're afraid to do. There can be no courage unless you're scared.", "by":" Eddie Rickenbacker"
    },
    {
        "id":"653", "category": "Inspirational", "body": "It is the greatest of all mistakes to do nothing because you can do only a little. Do what you can.", "by":" Sydney Smith"
    },
    {
        "id":"654", "category": "Inspirational", "body": "All big things in this world are done by people who are naïve and have an idea that is obviously impossible.", "by":" Dr. Wayne DyerFrank Richards"
    },
    {
        "id":"655", "category": "Inspirational", "body": "In the best institutions, promises are kept, no matter what the cost in agony and overtime..", "by":"David Ogilvy"
    },
   
    {
        "id":"657", "category": "Inspirational", "body": "I find that the harder I work the more luck I seem to have..", "by":"Thomas Jefferson"
    },
    {
        "id":"658", "category": "Inspirational", "body": "Man never made any material as resilient as the human spirit.", "by":"Bern Williams"
    },
    {
        "id":"659", "category": "Inspirational", "body": "Not everything that can be counted counts and not everything that counts can be counted..", "by":"Albert Einstein"
    },
   
    {
        "id":"660", "category": "Inspirational", "body": "It is our choices . . . that show what we truly are, far more than our abilities..", "by":"J. K. Rowling,"
    },
    {
        "id":"661", "category": "Inspirational", "body": "All things are difficult before they are easy.", "by":" John Norley"
    },
    {
        "id":"662", "category": "Inspirational", "body": "Far and away the best prize that life offers is the chance to work hard at work worth doing..", "by":"Theodore Roosevelt"
    },
    {
        "id":"663", "category": "Inspirational", "body": "The Truth is realized in an instant; the Act is practiced step by step.", "by":" Zen saying"
    },
   
    {
        "id":"664", "category": "Inspirational", "body": "Adversity is the diamond dust heaven polishes its jewels with..", "by":"Robert Leighton"
    },
    {
        "id":"665", "category": "Inspirational", "body": "Every artist was first an amateur..", "by":"Ralph Waldo Emerson"
    },
    {
        "id":"666", "category": "Inspirational", "body": "The genius of money is not knowing everything, but rather, surrounding yourself with those who do.", "by":" Glen Purdy"
    },
    {
        "id":"667", "category": "Inspirational", "body": "Efficiency is doing things right. Effectiveness is doing the right things..", "by":"Peter Drucker"
    },
    {
        "id":"668", "category": "Inspirational", "body": "You wander from room to room. Hunting for the diamond necklace that is already around your neck!.", "by":"Jalal-Uddin Rumi"
    },
    {
        "id":"669", "category": "Inspirational", "body": "It is not easy to find happiness in ourselves, and it is not possible to find it elsewhere.", "by":" Agnes Repplier"
    },
    {
        "id":"670", "category": "Inspirational", "body": "We cannot teach people anything; we can only help them discover it within themselves.", "by":" Galileo Galilei"
    },
    {
        "id":"671", "category": "Inspirational", "body": "Man will occasionally stumble over the truth, but most times he will pick himself up and carry on.", "by":" Winston Churchill"
    },
    {
        "id":"672", "category": "Inspirational", "body": "Luck is when preparation meets opportunity..", "by":"Brian Tracy"
    },
    
    {
        "id":"673", "category": "Inspirational", "body": "The greatest amount of wasted time is the time not getting started.", "by":" Dawson Trotman"
    },
   
    {
        "id":"674", "category": "Inspirational", "body": "Argue for your limitations, and sure enough, they're yours.", "by":" Richard Bach"
    },
    {
        "id":"675", "category": "Inspirational", "body": "There are two types of speakers, those that are nervous and those that are liars.", "by":" Mark Twain"
    },
    {
        "id":"676", "category": "Inspirational", "body": "The world hates change, yet it is the only thing that has brought progress.", "by":" Unknown"
    },
   
    {
        "id":"677", "category": "Inspirational", "body": "You must begin to think of yourself as becoming the person you want to be.", "by":" David Viscott"
    },
    {
        "id":"678", "category": "Inspirational", "body": "Of all the judgments we pass in life, none is as important as the one we pass on ourselves.", "by":" Unknown"
    },
    {
        "id":"679", "category": "Inspirational", "body": "Recommend to your children virtue; that alone can make them happy, not gold..", "by":"Ludwig van Beethoven"
    },
    {
        "id":"680", "category": "Inspirational", "body": "If you let conditions stop you from working, they'll always stop you.", "by":" James T. Farrell"
    },
    {
        "id":"681", "category": "Inspirational", "body": "Only those who risk going too far can possibly find out how far one can go..", "by":"T. S. Eliot"
    },
    {
        "id":"682", "category": "Inspirational", "body": "To win, you have to risk loss..", "by":"Jean Claude Killy"
    },
    
    {
        "id":"683", "category": "Inspirational", "body": "Expertise is generic. Point of view is what audiences pay for.", "by":"Mark Sanborn,"
    },
    
    {
        "id":"684", "category": "Inspirational", "body": "We have to live today by what truth we can get today and be ready tomorrow to call it falsehood..", "by":"William James"
    },
    {
        "id":"685", "category": "Inspirational", "body": "YOU don't have to get it right, YOU just have to get it going..", "by":"Michael Bloomberg"
    },
    {
        "id":"686", "category": "Inspirational", "body": "In all affairs it's a healthy thing to hang a question mark on the things you have long taken for granted..", "by":"Bertrand Russell (1872–1970)"
    },
    {
        "id":"687", "category": "Inspirational", "body": "Modesty is the only sure bait when you angle for praise..", "by":"Lord Chesterfield"
    },
    {
        "id":"688", "category": "Inspirational", "body": "The greatest success stories were created by people who recognized a problem and turned it into an opportunity.", "by":" Joseph Sugarman"
    },
    {
        "id":"689", "category": "Inspirational", "body": "The roots of education are bitter, but the fruit is sweet..", "by":"Aristotle,"
    },
    {
        "id":"690", "category": "Inspirational", "body": "People living deeply have no fear of death..", "by":"Anais Nin"
    },
    {
        "id":"691", "category": "Inspirational", "body": "If your project doesn't work, look for the part that you didn't think was important.", "by":" Arthur Bloch"
    },
    {
        "id":"692", "category": "Inspirational", "body": "Experience is simply the name we give our mistakes..", "by":"Oscar Wilde."
    },
    {
        "id":"693", "category": "Inspirational", "body": "We make a We make a living by what we get. We make a life by what we give.", "by" :"Winston Churchill"
    },
    {
        "id":"694", "category": "Inspirational", "body": "To win, you have to risk loss..", "by":"Jean Claude Killy"
    },
    {
        "id":"695", "category": "Inspirational", "body": "Efficiency is doing things right. Effectiveness is doing the right things..", "by":"Peter Drucker"
    },
    {
        "id":"696", "category": "Inspirational", "body": "We are what we repeatedly do..", "by":"Aristotle"
    },
    {
        "id":"697", "category": "Inspirational", "body": "Life is like a game of cards. The hand that is dealt you is determinism; the way you play it is free will..", "by":"Jawaharlal Nehru"
    },
    {
        "id":"698", "category": "Inspirational", "body": "Half the troubles of this life can be traced to saying yes too quickly and not saying no soon enough..", "by":"Josh Billings"
    },
    {
        "id":"699", "category": "Inspirational", "body": "Even the fear of death is nothing compared to the fear of not having lived authentically and fully..", "by":"Frances Moore Lappe"
    },
    {
        "id":"701", "category": "Inspirational", "body": "If you let conditions stop you from working, they'll always stop you.", "by":" James T. Farrell"
    },
    {
        "id":"702", "category": "Inspirational", "body": "Nothing can add more power to your life than concentrating all of your energies on a limited set of targets..", "by":"Nido Qubein"
    },
    {
        "id":"703", "category": "Inspirational", "body": "Too many people are thinking of security instead of opportunity. They seem more afraid of life than death.", "by":" James F. Byrnes"
    },
    {
       "id": "704", "category": "Inspirational", "body": "Shoot for the moon. Even if you miss it, you will land among the stars..", "by":"Les Brown"
    },
    {
       "id": "705", "category": "Inspirational", "body": "Knowing is not enough; we must apply. Willing is not enough; we must do..", "by":"Johann von Goethe"
    },
    {
       "id": "706", "category": "Inspirational", "body": "A leader must know, must know that he knows and must be able to make it abundantly clear to those about him that he knows..", "by":"Clarence B. Randall"
    },
    {
       "id": "707", "category": "Inspirational", "body": "Our only limitations are those which we set up in our minds or permit others to establish for us..", "by":"Elizabeth Arden"
    },
    {
       "id": "708", "category": "Inspirational", "body": "You are not only responsible for what you say, but also for what you do not say.", "by":" Martin Luther"
    },
    {
       "id": "709", "category": "Inspirational", "body": "Ability is what you’re capable of doing. Motivation determines what you do."
    },
    {
       "id": "710", "category": "Inspirational", "body": "Attitude determines how well you do it.", "by":" Lou Holtz"
    },
    {
       "id": "711", "category": "Inspirational", "body": "The beginning is the most important part of the work..", "by":"Plato"
    },
    {
       "id": "712", "category": "Inspirational", "body": "Wealth is the product of a man’s capacity to think..", "by":"Ayn Rand"
    },
    {
       "id": "713", "category": "Inspirational", "body": "Prosperity is a great teacher; adversity is a greater one.", "by":"William Hazlitt"
    },

    {
       "id": "714", "category": "Inspirational", "body": "Change the way you look at things, and the things you look at change.", "by":"Dr. Wayne Dyer"
    },
    {
       "id": "715", "category": "Inspirational", "body": "Begin With The End in Mind.", "by":"Stephen Covey"
    },
    {
       "id": "716", "category": "Inspirational", "body": "I decided to be the best and the smartest..", "by":"Oprah Winfrey"
    },
   
    {
       "id": "717", "category": "Inspirational", "body": "To avoid criticism... Do nothing... Say nothing... Be nothing!.", "by":"Elbert Hubbard"
    },
  
    
    {
       "id": "718", "category": "Inspirational", "body": "The noblest search is the search for excellence.", "by":"- Lyndon B. Johnson"
    },
    {
       "id": "719", "category": "Inspirational", "body": "Excellence is the gradual result of always striving to do better.", "by":"- Pat Riley"
    },
    {
       "id": "720", "category": "Inspirational", "body": "Do what you love to do and commit yourself to doing it in an excellent fashion.", "by":"- Brian Tracy"
    },
    {
        "id":"721", "category": "Inspirational", "body": "Cherish your visions and your dreams as they are the children of your soul, the blueprints of your ultimate accomplishments.", "by":"Napoleon Hill"
    },
    {
       "id": "722", "category": "Inspirational", "body": "Nearly all men can stand adversity, but if you want to test a man’s character, give him power..","by":"Abraham Lincoln"
    },
    {
       "id": "723", "category": "Inspirational", "body": "My great concern is not whether you have failed, but whether you are content with your failure.", "by":" Abraham Lincoln"
    },
    {
       "id": "724", "category": "Inspirational", "body": "Everyone has his burden. What counts is how you carry it.", "by":" Unknown"
    },
    {
       "id": "725", "category": "Inspirational", "body": "You haven't failed until you quit trying.", "by":" Unknown"
    },
    {
       "id": "726", "category": "Inspirational", "body": "You're on the road to success when you realize that failure is only a detour.", "by":" Unknown"
    },
    {
       "id": "727", "category": "Inspirational", "body": "I am not discouraged, because every wrong attempt discarded is another step forward.", "by":" Thomas A. Edison"
    },
    {
       "id": "728", "category": "Inspirational", "body": "Dreams are extremely important. You can’t do it unless you imagine it..", "by":"George Lucas"
    },
    {
       "id": "729", "category": "Inspirational", "body": "In business, the competition will bite you if you keep running; if you stand still, they will swallow you..", "by":"William Knudsen Jr."
    },
    {
        "id":"730", "category": "Inspirational", "body": "Success is the proper utilization of failure.", "by":" Unknown"
    },
    {
       "id": "731", "category": "Inspirational", "body": "Champions aren't made in the gyms. Champions are made from something they have deep inside them, a desire, a dream, a vision.", "by":" Muhammad Ali"
    },
    {
       "id": "732", "category": "Inspirational", "body": "Rowing harder doesn't help if the boat is headed in the wrong direction..", "by":"Kenichi Ohmae"
    },
    {
       "id": "733", "category": "Inspirational", "body": "It takes as much energy to wish as it does to plan..", "by":"Eleanor Roosevelt"
    },
    {
       "id": "734", "category": "Inspirational", "body": "There are many truths of which the full meaning cannot be realized until personal experience has brought it home..", "by":"John Stuart Mill"
    },
    {
       "id": "735", "category": "Inspirational", "body": "Pleasure in the job puts perfection in the work.", "by":" Aristole"
    },
    {
       "id": "736", "category": "Inspirational", "body": "Everybody thinks of changing humanity, but nobody thinks of changing himself..", "by":"Leo Tolstoy"
    },
    {
       "id": "737", "category": "Inspirational", "body": "True commitment...is the power of getting out of any situation all that there is in it. It is arduous, and it is rare..", "by":"G.K. Chesterton"
    },
    {
       "id": "738", "category": "Inspirational", "body": "Laziness is a secret ingredient that goes into failure. But it’s only kept a secret from the person who fails..", "by":"Robert Half"
    },
    {
       "id": "739", "category": "Inspirational", "body": "Difficulties are meant to rouse, not discourage. The human spirit is to grow strong by conflict..", "by":"William Ellery Channing"
    },
   
    {
       "id": "740", "category": "Inspirational", "body": "Why not go out on a limb? Isn't that where the fruit is?.", "by":"Frank Scully"
    },
    {
       "id": "741", "category": "Inspirational", "body": "The biggest mistake people make in life is not making a living at doing what they most enjoy.", "by":" Malcolm S. Forbes"
    },
    {
       "id": "742", "category": "Inspirational", "body": "Man is the only creature that strives to surpass himself and yearns for the impossible.", "by":" Eric Hoffer"
    },
    {
       "id": "743", "category": "Inspirational", "body": "You're writing the story of your life one moment at a time.", "by":" Doc Childre"
    },
    {
       "id": "744", "category": "Inspirational", "body": "You'll see it, when you believe it.", "by":"Dr. Wayne Dyer"
    },
    {
       "id": "745", "category": "Inspirational", "body": "Dream lofty dreams, and as you dream, so shall you become. Your vision is the promise of what you shall one day be.", "by":" James Allen"
    },
    {
       "id": "746", "category": "Inspirational", "body": "Things may come to those who wait, but only the things left by those who hustle..", "by":"Abraham Lincoln"
    },
    {
       "id": "747", "category": "Inspirational", "body": "Self trust is the first secret of success.", "by":" Ralph Waldo Emerson"
    },
    {
       "id": "748", "category": "Inspirational", "body": "It is easier to be wise for others than for ourselves..", "by":"Alexander Solzhenitsyn"
    },
    {
       "id": "749", "category": "Inspirational", "body": "As I see it, every day you can do one of two things: build health or produce disease in yourself..", "by":"Adele Davis"
    },
    {
       "id": "750", "category": "Inspirational", "body": "Learn to see in another's calamity the ills that you should avoid."
    },
    {
       "id": "751", "category": "Inspirational", "body": "People with goals succeed because they know where they are going... It's as simple as that.", "by":" Earl Nightingale"
    },
    {
       "id": "752", "category": "Inspirational", "body": "Change your direction and you will change your destiny.", "by":"Mark Victor Hansen"
    },
    {
       "id": "753", "category": "Inspirational", "body": "Democracy is a process by which the people are free to choose the man who will get the blame.", "by":" Laurence J. Peter"
    },
    {
       "id": "754", "category": "Inspirational", "body": "A teacher who is attempting to teach, without inspiring the pupil with a desire to learn, is hammering on a cold iron.", "by":" Horace Mann"
    },
    {
       "id": "755", "category": "Inspirational", "body": "The strangest and most fantastic fact about negative emotions is that people actually worship them.", "by":" P. D. Ouspensky"
    },
    {
       "id": "756", "category": "Inspirational", "body": "In the middle of difficulty lies opportunity..", "by":"Unkown"
    },
    {
       "id": "757", "category": "Inspirational", "body": "There are only two ways to live your life. One is as though nothing is a miracle. The other is as if everything is.", "by":" Albert Einstein"
    },
    {
       "id": "758", "category": "Inspirational", "body": "Real courage is moving forward when the outcome is uncertain.", "by":" Michael Angier"
    },
    {
       "id": "759", "category": "Inspirational", "body": "Nothing is a waste of time if you use the experience wisely.", "by":" Auguste Rodin"
    },
    {
       "id": "760", "category": "Inspirational", "body": "Concentration comes out of a combination of confidence and hunger..", "by":"Arnold Palmer"
    },
    {
       "id": "761", "category": "Inspirational", "body": "Failure comes only when we forget our ideals and objectives and principles. Jawaharal Nehru"
    },
    {
       "id": "762", "category": "Inspirational", "body": "I have not failed. I've just found 10,000 ways that won't work.", "by":"Thomas Alva Edison"
    },
    {
       "id": "763", "category": "Inspirational", "body": "Genius without education is like silver in the mine.", "by":" Benjamin Franklin"
    },
    {
       "id": "764", "category": "Inspirational", "body": "You are accountable for what you do, and no one else is accountable..", "by":"Edith Martin"
    },
    {
       "id": "765", "category": "Inspirational", "body": "Luck is not chance; it’s toil. Fortune’s expensive smile is earned..", "by":"Emily Dickinson"
    },
    {
       "id": "766", "category": "Inspirational", "body": "Success is more a function of consistent common sense than it is of genius..", "by":"An Wang"
    },
    {
       "id": "767", "category": "Inspirational", "body": "In a time of universal deceit, telling the truth is a revolutionary act.", "by":" George Orwell"
    },
    {
       "id": "768", "category": "Inspirational", "body": "Academic qualifications are important and so is financial education. They're both important and schools are forgetting one of them.", "by":" Robert Kiyosaki"
    },
    {
       "id": "769", "category": "Inspirational", "body": "Good judgment is gained through experience. Experience is gained through poor judgment..", "by":"Unknown"
    },
    {
        "id":"770", "category": "Inspirational", "body": "The most powerful weapon on Earth is the human soul on fire..", "by":"Ferdinand Foch"
    },
    {
       "id": "771", "category": "Inspirational", "body": "You can find on the outside only what you possess on the inside.", "by":" Adolfo Montiel Ballesteros"
    },
    {
       "id": "772", "category": "Inspirational", "body": "There is nothing more genuine than breaking away from the chorus to learn the sound of your own voice.", "by":" Po Bronson"
    },
    {
       "id": "773", "category": "Inspirational", "body": "For all sad words of tongue and pen, the saddest are these, 'It might have been'.", "by":" John Greenleaf Whittier"
    },
    {
       "id": "774", "category": "Inspirational", "body": "Take a chance! All life is a chance. The man who goes furthest is generally the one who is willing to do and dare.", "by":" Dale Carnegie"
    },
    {
       "id": "775", "category": "Inspirational", "body": "You must be the change you wish to see in the world.", "by":" Mahatma Gandhi"
    },
    {
       "id": "776", "category": "Inspirational", "body": "Follow effective action with quiet reflection. From the quiet reflection will come even more effective action..", "by":"Peter Drucker"
    },
    {
       "id": "777", "category": "Inspirational", "body": "True leadership must be for the benefit of the followers, not the enrichment of the leaders..", "by":"Robert Townsend"
    },
    {
       "id": "778", "category": "Inspirational", "body": "It is not how much we do, but how much love we put in the doing. It is not how much we give, but how much love we put in the giving.", "by":" Mother Teresa"
    },
    {
       "id": "779", "category": "Inspirational", "body": "The moment you let avoiding failure become your motivator, you’re down the path of inactivity..", "by":"Roberto Goizueta"
    },
    {
        "id":"780", "category": "Inspirational", "body": "You’ve got to get to the stage in life where going for it is more important than winning or losing..", "by":"Arthur Ashe"
    },
    {
       "id": "781", "category": "Inspirational", "body": "I judge character not by how men deal with their superiors, but mostly how they deal with their subordinates.", "by":" Norman Schwarzkopf"
    },
    {
       "id": "782", "category": "Inspirational", "body": "To attain knowledge, add things every day.", "by":"Unknown"
    },
    {
       "id": "783", "category": "Inspirational", "body": "To attain wisdom, remove things every day.", "by":" Tao Te Ching"
    },
    {
       "id": "784", "category": "Inspirational", "body": "Don’t waste your effort on a thing that results in a petty triumph unless you are satisfied with a life of petty issues.", "by":" John D. Rockerfeller"
    },
    {
       "id": "785", "category": "Inspirational", "body": "If we are strong, our strength will speak for itself. If we are weak, words will be of no help..", "by":"John F. Kennedy"
    },
    {
       "id": "786", "category": "Inspirational", "body": "No set goal achieved satisfies. Success only breeds a new goal. The golden apple devoured has seeds. It is endless..", "by":"Bette Davis"
    },
    {
       "id": "787", "category": "Inspirational", "body": "Wherever you see a successful business, someone once made a courageous decision..", "by":"Peter Drucker"
    },
    {
       "id": "788", "category": "Inspirational", "body": "Use the past as a guide for the future, not as an excuse for not dealing with it.", "by": "Patricia Fripp"
    },
    {
       "id": "789", "category": "Inspirational", "body": "Nearly all men can stand adversity, but if you want to test a man’s character, give him power..", "by":"Abraham Lincoln"
    },
    {
        "id":"790", "category": "Inspirational", "body": "Don’t wait around for other people to be happy for you. Any happiness you get you’ve got to make yourself..", "by":"Alice Walker"
    },
    {
       "id": "791", "category": "Inspirational", "body": "Money was never a big motivation for me, except as a way to keep score. The real excitement is playing the game.","by": "Donald Trump"
    },
   
    {
       "id": "792", "category": "Inspirational", "body": "Men is a money-making animal with propensity too often interferes with his benevolence..", "by":"Herman Melville"
    },
    {
       "id": "793", "category": "Inspirational", "body": "Many speak the truth when they say that they despise riches, but they mean the riches possessed by other men.", "by":" Charles Caleb Colton"
    },
    {
       "id": "794", "category": "Inspirational", "body": "Most people are to busy earning a living to make any money.","by": "Unknown"
    },
    {
       "id": "795", "category": "Inspirational", "body": "Pattern your Life after success not indifference..", "by":"Robert G. Allen"
    },
    {
       "id": "796", "category": "Inspirational", "body": "Knowledge-based innovation has the longest lead time of all innovations..", "by":"Peter Drucker"
    },
    {
       "id": "797", "category": "Inspirational", "body": "Knowledge is the antidote to fear.", "by":" Ralph Waldo Emerson"
    },
   
    {
       "id": "798", "category": "Inspirational", "body": "Happiness is not in the mere possession of money; it lies in the joy of achievement, in the thrill of creative effort.", "by":" Franklin D. Roosevelt"
    },
    {
       "id": "799", "category": "Inspirational", "body": "Be civil to all; sociable to many; familiar with few; friend to one; enemy to none.",  "by":"Benjamin Franklin"
    },
    {
        "id":"800", "category": "Inspirational", "body": "The Way is not difficult; only there must be no wanting or not wanting.", "by":" Chao-Chou."
    },
    {
       "id": "801", "category": "Inspirational", "body": "How shall I grasp it? Do not grasp it. That which remains when there is no more grasping is the Self.", "by":" Panchadasi."
    },
    {
       "id": "802", "category": "Inspirational", "body": "Zen has nothing to grab on to. When people who study Zen don't see it,that is because they approach it too eagerly.", "by":" Ying-An."
    },
   
    {
       "id": "803", "category": "Inspirational", "body": "Small opportunities are often the beginning of great enterprises.", "by":" Demosthenes"
    },
    {
       "id": "804", "category": "Inspirational", "body": "Everyone has a talent. What is rare is the courage to nurture it in solitude and to follow the talent to the dark places where it leads.", "by":" Erica Jong"
    },
    {
       "id": "805", "category": "Inspirational", "body": "The individual activity of one man with backbone will do more than a thousand men with a mere wishbone.", "by":" William J. Boetcker"
    },
    {
       "id": "806", "category": "Inspirational", "body": "It sounds boring, but anything is easy to start - starting a novel, starting a business ... it's keeping the thing going that is difficult.", "by":" Prue Leith"
    },
    {
       "id": "807", "category": "Inspirational", "body": "Take the negativity, conquer it with indifference, and use it to achieve your goal, wealth, health and happiness.", "by":"Rasheed Ali"
    },
    {
       "id": "808", "category": "Inspirational", "body": "Your most unhappy customers are your greatest source of learning.– Bill Gates, Microsoft Inc. Company Founder and Chairman"
    },
    {
       "id": "809", "category": "Inspirational", "body": "If you aren’t fired by enthusiasm, you will be fired with enthusiasm..", "by":"Vince Lombardi"
    },
    {
        "id":"810", "category": "Inspirational", "body": "Education is simply the soul of a society as it passes from one generation to another.", "by":" G. K. Chesterton"
    },
    {
       "id": "811", "category": "Inspirational", "body": "Be careful what you do, because what you do is what you end up doing.", "by":" Hans Glint"
    },
    {
       "id": "812", "category": "Inspirational", "body": "You can do anything you want to do, but you can not do all the things you want to do.", "by":" Hans Glint"
    },
    {
       "id": "813", "category": "Inspirational", "body": "Success is the ability to go from one failure to another with no loss of enthusiasm. –Winston Churchill, British statesman"
    },
    {
       "id": "814", "category": "Inspirational", "body": "The human brain starts working the moment you are born and never stops until you stand up to speak in public.", "by":" George Jessel"
    },
    {
       "id": "815", "category": "Inspirational", "body": "Make sure you have finished speaking before your audience has finished listening.", "by":" Dorothy Sarnoff"
    },
    {
       "id": "816", "category": "Inspirational", "body": "Every idea you present must be something you could get across easily at a cocktail party with strangers..", "by":"Jack Welch"
    },
    {
       "id": "817", "category": "Inspirational", "body": "Courage and perseverance have a magical talisman, before which difficulties disappear and obstacles vanish into air..", "by":"John Quincy Adams"
    },
    {
       "id": "818", "category": "Inspirational", "body": "When you dance, your purpose is not to get to a certain place on the floor.", "by":" Unknown"
    },
    {
       "id": "819", "category": "Inspirational", "body": "It's to enjoy each step along the way.", "by":" Wayne Dyer"
    },
    {
        "id":"820", "category": "Inspirational", "body": "I find that when you have a real interest in life and a curious life, that sleep is not the most important thing.", "by":" Martha Stewart"
    },
    {
       "id": "821", "category": "Inspirational", "body": "This was work (music industry) but it was the awakening to what was to become a life's passion.", "by":" Clive Davis"
    },
    {
       "id": "822", "category": "Inspirational", "body": "A man who dares to waste one hour of life has not discovered the value of life.", "by":" Charles Darwin"
    },
    {
       "id": "823", "category": "Inspirational", "body": "Doing what you love is the cornerstone of having abundance in your life.", "by":" Wayne Dyer"
    },
    {
       "id": "824", "category": "Inspirational", "body": "It's much easier for me to make major life, multi-million dollar decisions, than it is to decide on a carpet for my front porch. That's the truth.", "by":" Oprah Winfrey"
    },
    {
       "id": "825", "category": "Inspirational", "body": "You are doomed to make choices. This is life’s greatest paradox.", "by":" Wayne Dyer"
    },
    {
       "id": "826", "category": "Inspirational", "body": "Succeeding is not really a life experience that does that much good. Failing is a much more sobering and enlightening experience.", "by":" Michael Eisner"
    },
    {
       "id": "827", "category": "Inspirational", "body": "Life is a succession of lessons which must be lived to be understood.", "by":" Ralph Waldo Emerson"
    },
    {
       "id": "828", "category": "Inspirational", "body": "Don't be too timid and squeamish about your actions. All life is an experiment.", "by":" Ralph Waldo Emerson"
    },
    {
       "id": "829", "category": "Inspirational", "body": "There never was a good war or a bad peace.", "by":" Benjamin Franklin"
    },
    {
        "id":"830", "category": "Inspirational", "body": "Up, sluggard, and waste not life; in the grave will be sleeping enough.", "by":" Benjamin Franklin"
    },
    
    {
       "id": "831", "category": "Inspirational", "body": "It's all about quality of life and finding a happy balance between work and friends and family.", "by":" Philip Green"
    },
    {
       "id": "832", "category": "Inspirational", "body": "I love the market, it is my work, my play and my life.", "by":" Rene Rivkin"
    },
    {
       "id": "833", "category": "Inspirational", "body": "Most people struggle with life balance simply because they haven't paid the price to decide what is really important to them.", "by":" Stephen Covey"
    },
    {
       "id": "834", "category": "Inspirational", "body": "It is decidedly not true that ‘nice guys finish last’.", "by":" Leo Durocher"
    },
    {
       "id": "835", "category": "Inspirational", "body": "Getting money is not all a man's business: to cultivate kindness is a valuable part of the business of life.", "by":" Samuel Johnson"
    },
    {
       "id": "836", "category": "Inspirational", "body": "People first, then money, then things.", "by":" Suze Orman"
    },
    {
       "id": "837", "category": "Inspirational", "body": "I think one can achieve a very pleasant lifestyle by treating human beings, fellow human beings, very well.", "by":" Rene Rivkin"
    },
    {
       "id": "838", "category": "Inspirational", "body": " How am I going to live today in order to create the tomorrow I'm committed to?.", "by":"Anthony Robbins"
    },
    {
       "id": "839", "category": "Inspirational", "body": "The man who does not work for the love of work but only for money is not likely to make money nor find much fun in life.", "by":" Charles Schwab"
    },
    {
        "id":"840", "category": "Inspirational", "body": "Anyone who thinks my story is anywhere near over is sadly mistaken.", "by":" Donald Trump"
    },
    {
       "id": "841", "category": "Inspirational", "body": "What you do speaks so loudly that I cannot hear what you say. .", "by":"Ralph Waldo Emerson"
    },
    {
       "id": "842", "category": "Inspirational", "body": "The world and life have been mighty good to me. And I want to put something back.", "by":" Ted Turner"
    },
    {
       "id": "843", "category": "Inspirational", "body": "A big part of financial freedom is having your heart and mind free from worry about the what-ifs of life.", "by":" Suze Orman"
    },
    {
       "id": "844", "category": "Inspirational", "body": "We are not animals. We are not a product of what has happened to us in our past. We have the power of choice.", "by":" Stephen Covey"
    },
    {
       "id": "845", "category": "Inspirational", "body": "You can have everything in life that you want if you will just help enough other people get what they want. Zig Ziglar"
    },
    {
       "id": "846", "category": "Inspirational", "body": "You will become as great as your dominant aspiration...if you cherish a vision in your heart, you will realize it.", "by":" James Allen"
    },
    {
       "id": "847", "category": "Inspirational", "body": "The difference between the impossible and the possible lies in not giving up..", "by":"Tommy Lasorda"
    },
    {
       "id": "848", "category": "Inspirational", "body": "The important thing is to learn a lesson every time you lose..", "by":"John McEnroe"
    },
    {
        "id":"849", "category": "Inspirational", "body": "You can’t help someone get up a hill without getting closer to the top yourself..", "by":"H. Norman Schwarzkopf"
    },
    {
        "id":"850", "category": "Inspirational", "body": "You’ll never get the best from employees by trying to build a fire under them"
    },
    {
       "id": "851", "category": "Inspirational", "body": "— you’ve got to build a fire within them.", "by":" Bob Nelson"
    },
    {
       "id": "852", "category": "Inspirational", "body": "In the business world, the rearview mirror is always clearer than the windshield..", "by":"Warren Buffet"
    },
    
    {
       "id": "853", "category": "Inspirational", "body": "Do not go where the path may lead, go instead where there is no path and leave a trail..", "by":"Waldo Emerson"
    },
    {
       "id": "854", "category": "Inspirational", "body": "We know what we are, but know not what we may be..", "by":"William Shakespeare"
    },
    {
       "id": "855", "category": "Inspirational", "body": "It's hard for young players to see the big picture. They just see three or four years down the road.", "by":" Kareem Abdul-Jabar"
    },
    {
       "id": "856", "category": "Inspirational", "body": "Man's mind stretched to a new idea never goes back to its original dimensions.", "by":"Oliver Wendell Holmes"
    },
    {
       "id": "857", "category": "Inspirational", "body": "Give a lot of thought to the future because that is where you are going to spend the rest of your life.", "by":" Charles Kettering"
    },
    {
       "id": "858", "category": "Inspirational", "body": "The time you enjoy wasting is not wasted time.", "by":" Bertrand Russell"
    },
    {
       "id": "859", "category": "Inspirational", "body": "Remember, a dead fish can float downstream, but it takes a live one to swim upstream..", "by":"W. C. Fields"
    },
    {
        "id":"860", "category": "Inspirational", "body": "You must avoid the investigation trap you can’t postpone tough decisions by studying them to death..", "by":"Percy Barnevik"
    },
    {
       "id": "861", "category": "Inspirational", "body": "Luck is a dividend of sweat. The more you sweat, the luckier you get..", "by":"Ray Kroc"
    },
    {
       "id": "862", "category": "Inspirational", "body": "Great things are done by a series of small things brought together.","by":"Vincent Van Gogh"
    },
    {
       "id": "863", "category": "Inspirational", "body": "Never assume the obvious is true..", "by":"Albert Einstein"
    },
    {
       "id": "864", "category": "Inspirational", "body": "Nothing in life is to be feared. It is only to be understood..", "by":"Marie Curie"
    },
    {
       "id": "865", "category": "Inspirational", "body": "If I have ever made any valuable discoveries, it has been owing more to patient attention than to any other talent..", "by":"Isaac Newton"
    },
    {
       "id": "866", "category": "Inspirational", "body": "Never tell people how to do things. Tell them what to do, and they will surprise you with their ingenuity.", "by":" George S. Patton"
    },
    {
       "id": "867", "category": "Inspirational", "body": "Money isn't the most important thing in life, but it's reasonably close to oxygen on the gotta have it scale. .", "by":"Zig Ziglar"
    },
    {
       "id": "868", "category": "Inspirational", "body": "Some of us are timid. We think we have something to lose, so we don’t try for the next hill..", "by":"Maya Angelou"
    },
    {
       "id": "869", "category": "Inspirational", "body": "To a brave man, good and bad luck are like his right and left hand. He uses both.", "by":"Unknown"
    },
    {
        "id":"870", "category": "Inspirational", "body": "I take advice from five wise men: Mr Who, Mr Where, Mr What, Mr Why and Mr When.", "by":"Unknown"
    },
    {
       "id": "871", "category": "Inspirational", "body": "Good plans shape good decisions. That's why good planning helps to make elusive dreams come true.", "by":" Lester R. Bittel"
    },
    {
       "id": "872", "category": "Inspirational", "body": "Concentration, in its truest, unadulterated form, means the ability to focus the mind on one single solitary thing.", "by":" Komar"
    },
    {
       "id": "873", "category": "Inspirational", "body": "Be not afraid of life. Believe that life is worth living and your belief will help create the fact.",  "by":"William James"
    },
    {
       "id": "874", "category": "Inspirational", "body": "The first requisite of success is the ability to apply your physical and mental energies to one problem without growing weary..", "by":"Thomas Edison"
    },
    {
       "id": "875", "category": "Inspirational", "body": "Reading without reflection is like eating without digesting..", "by":"Edmund Burke"
    },
    {
       "id": "876", "category": "Inspirational", "body": "Authority does not make you a leader It gives you the opportunity to be one.", "by":" Unknown"
    },
    {
       "id": "877", "category": "Inspirational", "body": "Action may not always be happiness, but there is no happiness without action.","by": "Benjamin Disraeli"
    },
    {
       "id": "878", "category": "Inspirational", "body": "Life is mostly froth and bubble, Two things stand like stone, Kindness in another's trouble, Courage in your own.", "by":"Adam Lindsay Gordon"
    },
    {
       "id": "879", "category": "Inspirational", "body": "The work of the individual still remains the spark that moves mankind forward.", "by":" Igor Sikorsky"
    },
    {
        "id":"880", "category": "Inspirational", "body": "The biggest mistake people make in life is not making a living at doing what they most enjoy.", "by":" Malcolm S. Forbes"
    },
    {
       "id": "881", "category": "Inspirational", "body": "There are a thousand excuses for every failure but never a good reason..", "by":"Mark Twain"
    },
    {
       "id": "882", "category": "Inspirational", "body": "We cannot cross the sea merely by staring at the water.", "by":" Rabindranath Tagore"
    },
    
    {
       "id": "883", "category": "Inspirational", "body": "The noblest search is the search for excellence.", "by":" Lyndon B. Johnson"
    },
    {
       "id": "884", "category": "Inspirational", "body": "I do not try to dance better than anyone else. I only try to dance better than myself..", "by":"Famous Ballet Dancer"
    },
    {
       "id": "885", "category": "Inspirational", "body": "Writing is the gold standard of communication. Learn to do it well and see more gold.", "by":" Chris Widener"
    },
    {
       "id": "886", "category": "Inspirational", "body": "Indecision is the thief of opportunity.", "by":" Jim Rohn"
    },
    {
       "id": "887", "category": "Inspirational", "body": "The will to believe is perhaps the most powerful, but certainly the most dangerous, human attribute..", "by":"Dero Ames Saunders"
    },
    {
       "id": "888", "category": "Inspirational", "body": "Would that I could stand on a busy corner, hat in hand, and beg people to throw me all their wasted hours.","by": "Bernard Berenson"
    },
    {
       "id": "889", "category": "Inspirational", "body": "Excellence is the gradual result of always striving to do better.", "by":" Pat Riley"
    },
    {
        "id":"890", "category": "Inspirational", "body": "Do what you love to do and commit yourself to doing it in an excellent fashion.", "by":" Brian Tracy"
    },
    {
       "id": "891", "category": "Inspirational", "body": "You don’t get to choose how you’re going to die. Or when. You can only decide how you’re going to live. And that is Now..", "by":"Joan Baez Singer"
    },
    {
       "id": "892", "category": "Inspirational", "body": "Fear is that little darkroom where negatives are developed.", "by":" Michael Pritchard"
    },
    {
       "id": "893", "category": "Inspirational", "body": "Failure will never overtake me if my determination to succeed is strong enough.", "by":"Og Mandino"
    },
    {
       "id": "894", "category": "Inspirational", "body": "If you are never scared, embarrassed or hurt, it means you never take chances.", "by":" Julia Soul"
    },
    {
       "id": "895", "category": "Inspirational", "body": "Courage is not the lack of fear. It is acting in spite of it..", "by":"Mark Twain"
    },
    {
       "id": "896", "category": "Inspirational", "body": "One person with courage makes a majority.", "by":" Andrew Jackson"
    },
    {
       "id": "897", "category": "Inspirational", "body": "All life is a chance. So take it! The person who goes furthest is the one who is willing to do and dare..", "by":"Dale Carnegie"
    },
    {
       "id": "898", "category": "Inspirational", "body": "The world always steps aside for people who know where they’re going.", "by":" Miriam Viola Larsen"
    },
    {
       "id": "899", "category": "Inspirational", "body": "They can conquer who believe they can..", "by":"Virgil"
    },
    {
        "id":"900", "category": "Inspirational", "body": "Strength does not come from physical capacity. It comes from an indomitable will.", "by":" Mahatma Gandhi"
    },
    {
       "id": "901", "category": "Inspirational", "body": "Audiences don't care what you've done. They care about what you've learned.", "by":" Mark Sanborn"
    },
    {
       "id": "902", "category": "Inspirational", "body": "All difficult things have their origin in that which is easy, and great things in that which is small.", "by":" Lao-Tzu"
    },
    {
       "id": "903", "category": "Inspirational", "body": "You will become as great as your dominant aspiration...if you cherish a vision in your heart, you will realize it.", "by":" James Allen"
    },
    {
       "id": "904", "category": "Inspirational", "body": "Cherish your visions and your dreams, as they are the children of your soul, the blueprints of your ultimate accomplishments.", "by":" Napoleon Hill"
    },
    {
       "id": "905", "category": "Inspirational", "body": "You will succeed best when you put the restless, anxious side of affairs out of mind, and allow the restful side to live in your thoughts.", "by":" Margaret Stowe"
    },
    {
       "id": "906", "category": "Inspirational", "body": "I don't know the key to success, but the key to failure is to try to please everyone.", "by":" Bill Cosby Comedian"
    },
    {
       "id": "907", "category": "Inspirational", "body": "Make no little plans; they have no magic to stir men’s blood . . . Make big plans, aim high in hope and work..", "by":"Daniel Burnham"
    },
    {
       "id": "908", "category": "Inspirational", "body": "Millions long for immortality and they do not know what to do with themselves on a lonely Sunday afternoon..", "by":"Murphy"
    },
    {
       "id": "909", "category": "Inspirational", "body": "The world cares very little about what a man or woman knows; it is what a man or woman is able to do that counts.", "by":" Booker T. Washington"
    },
    {
        "id":"910", "category": "Inspirational", "body": "Do unto others as they would have you do unto them..", "by":"Dr. Tony Alessandra"
    },
    {
       "id": "911", "category": "Inspirational", "body": "Don’t treat others the way you want to be treated. Treat others the way THEY want to be treated..", "by":"Vic Johnson"
    },
    {
       "id": "912", "category": "Inspirational", "body": "You control your life by controlling your time..", "by":"Conrad Hilton"
    },
    {
       "id": "913", "category": "Inspirational", "body": "Nearly all men can stand adversity, but if you want to test a man’s character, give him power..", "by":"Abraham Lincoln"
    },
    {
       "id": "914", "category": "Inspirational", "body": "I take nothing for granted. I now have only good days, or great days..", "by":"Lance Armstrong"
    },
    {
       "id": "915", "category": "Inspirational", "body": "Few cases of eye strain have been developed by looking on the bright side of things..", "by":"Unknown"
    },
    {
       "id": "916", "category": "Inspirational", "body": "Enthusiasm spells the difference between mediocrity and accomplishment..", "by":"Norman Vincent Peale"
    },
   
    {
       "id": "917", "category": "Inspirational", "body": "When it’s time to make a decision about a person or problem, trust your intuition (and) act..", "by":"Bud Hadfield,"
    },
    {
       "id": "918", "category": "Inspirational", "body": "A man that cannot be bothered to do little things, cannot be trusted to do big things..", "by":"Lawrence Bell"
    },
    {
       "id": "919", "category": "Inspirational", "body": "Big problems arise from small problems. The wise takes care of all his small problems. Thus he has no problems.", "by":" Tao"
    },
    {
        "id":"920", "category": "Inspirational", "body": "My great concern is not whether you have failed, but whether you are content with your failure.", "by":" Abraham Lincoln"
    },
    
    {
       "id": "921", "category": "Inspirational", "body": "Good will is the one and only asset that competition cannot undersell or destroy..", "by":"Marshall Field"
    },
    {
       "id": "922", "category": "Inspirational", "body": "Nothing will ever be attempted if all possible objections must first be overcome..", "by":"Samuel Johnson"
    },
    {
       "id": "923", "category": "Inspirational", "body": "Success is a journey, not only a destination. The doing is often more important than the outcome..", "by":"Arthur Ashe"
    },
    {
       "id": "924", "category": "Inspirational", "body": "Truth has no special time of its own. Its hour is now - always.", "by":" Albert Schweitzer"
    },
    {
       "id": "925", "category": "Inspirational", "body": "No great man ever complains of want of opportunity..", "by":"Ralph Waldo Emerson"
    },
    {
       "id": "926", "category": "Inspirational", "body": "Learning is not attained by chance; it must be sought for with ardor and attended to with diligence..", "by":"Abigail Adams"
    },
    {
       "id": "927", "category": "Inspirational", "body": "The real voyage of discovery consists of not in seeking new landscapes but in having new eyes..", "by":"Marcel Proust"
    },
    {
       "id": "928", "category": "Inspirational", "body": "Have something to say, and say it as clearly as you can. This is the only secret to style.", "by":" Matthew Arnold"
    },
    {
       "id": "929", "category": "Inspirational", "body": "If you think you can or if you think you can’t either way, you are right!.", "by":"Henry Ford"
    },
    {
        "id":"930", "category": "Inspirational", "body": "All life is a chance. So take it! The person who goes furthest is the one who is willing to do and dare..", "by":"Dale Carnegie"
    },
    {
       "id": "931", "category": "Inspirational", "body": "Keep your fears to yourself, but share your courage with others..", "by":"Robert Louis Stevenson"
    },
    {
       "id": "932", "category": "Inspirational", "body": "We as human beings have the power of attitude and that attitude determines choice, and choice determines results.", "by":"Jim Rohn"
    },
    {
       "id": "933", "category": "Inspirational", "body": "Happiness is not something you postpone for the future; it is something you design for the present. Zig Ziglar"
    },
    {
       "id": "934", "category": "Inspirational", "body": "How we spend our days is, of course, how we spend our lives.", "by":" Annie Dillard"
    },
    {
       "id": "935", "category": "Inspirational", "body": "Reading is a means of thinking with another person’s mind; it forces you to stretch your own..", "by":"Charles Scribner"
    },
    {
       "id": "936", "category": "Inspirational", "body": "You must learn how to handle difficulty; it always comes after opportunity..", "by":"Jim Rohn"
    },
    {
       "id": "937", "category": "Inspirational", "body": "It is our attitude at the beginning of a difficult task which, more than anything else, will affect it's successful outcome.","by":"William James"
    },
    {
       "id": "938", "category": "Inspirational", "body": "No great performance came from holding back.", "by":"Don Greene"
    },
    {
       "id": "939", "category": "Inspirational", "body": "When you are clear on what you want in your life, it will show up and only to the extent you are clear.", "by":" Janet Bray Attwood"
    },
    {
        "id":"940", "category": "Inspirational", "body": "Transform challenge into choices, obstacles into opportunity, and tragedy into triumph.", "by":"Randy Gage."
    },
    {
       "id": "941", "category": "Inspirational", "body": "Even if you’re on the right track, you’ll get run over if you just sit there..", "by":"Will Rogers"
    },
    
    {
       "id": "942", "category": "Inspirational", "body": "You haven't failed until you quit trying.", "by":" Unknown"
    },
    {
       "id": "943", "category": "Inspirational", "body": "There are a thousand hacking at the branches of evil to one who is hacking at the roots.", "by":" Henry David Thoreau"
    },
    {
       "id": "944", "category": "Inspirational", "body": "If we have our own why of life, we can clear almost any how..", "by":"Friedrich Nietzsche"
    },
    {
       "id": "945", "category": "Inspirational", "body": "To earn more, you must learn more..", "by":"Brian Tracy"
    },
    {
       "id": "946", "category": "Inspirational", "body": "If you are not committed to getting better at what you are doing, you are bound to get worse.", "by":" Pat Riley"
    },
    {
       "id": "947", "category": "Inspirational", "body": "Develop your willpower so that you can make yourself do what you should do, when you should do it, whether you feel like it or not.", "by":" Brian Tracy"
    },
    {
       "id": "948", "category": "Inspirational", "body": "Integrity makes my job easier. It’s deception and dishonesty that requires so much diligent effort..", "by":"Bobby Bowden"
    },
    
    {
       "id": "949", "category": "Inspirational", "body": "You are what you are today because of the choices you made in the past..", "by":"Jim Rohn"
    },
    {
       "id": "950", "category": "Inspirational", "body": "A discovery is said to be an accident meeting a prepared mind..", "by":"Albert Szent-Gyorgi"
    },
    {
       "id": "951", "category": "Inspirational", "body": "Everything comes to he who hustles while he waits..", "by":"Thomas Edison"
    },
    {
       "id": "952", "category": "Inspirational", "body": "Noise proves nothing. Often a hen that has merely laid an egg cackles as if she laid an asteroid..", "by":"Mark Victor Hansen"
    },
    
    {
       "id": "953", "category": "Inspirational", "body": "Example is not the main thing in influencing others, it is the only thing..", "by":"Albert Schweitzer"
    },
    {
       "id": "954", "category": "Inspirational", "body": "The secret to success is to start from scratch and keep on scratching.– Dennis Green"
    },
    {
       "id": "955", "category": "Inspirational", "body": "It is amazing what can be accomplished when nobody cares about who gets the credit..", "by":"Robert Yates"
    },
    {
       "id": "956", "category": "Inspirational", "body": "Knowing is not enough; we must apply. Willing is not enough; we must do..", "by":"Johann von Goethe"
    },
    {
       "id": "957", "category": "Inspirational", "body": "We want to reach for the stars and not merely across the table..", "by":"Denise Magyar"
    },
    {
       "id": "958", "category": "Inspirational", "body": "Positive anything is better than negative nothing. Elbert Hubbard"
    },
   
    {
       "id": "959", "category": "Inspirational", "body": "Together, one person, one course at a time we can transform the world.", "by":" T. Harv Eker"
    },
    {
        "id":"960", "category": "Inspirational", "body": "Find the good. It’s all around you. Find it, showcase it and you’ll start believing in it..", "by":"Jesse Owens"
    },
    {
        "id":"961", "category": "Inspirational", "body": "We must never allow our mediocre successes to cloud our future expectations..", "by":"M. Avis"
    },
    {
       "id": "962", "category": "Inspirational", "body": "We are sitting in the shade today because someone planted a tree a long time ago.", "by":" Warren Buffett"
    },
   
    {
       "id": "963", "category": "Inspirational", "body": "Maturity is achieved when a person postpones immediate pleasures for long- term values.", "by":" Joshua L. Liebman"
    },
    {
       "id": "964", "category": "Inspirational", "body": "You're on the road to success when you realize that failure is only a detour.", "by":" Unknown"
    },
    {
       "id": "965", "category": "Inspirational", "body": "Success is a lousy teacher. It seduces smart people into thinking they can’t lose..", "by":"Bill Gates"
    },
    {
       "id": "966", "category": "Inspirational", "body": "Employ your time in improving yourself by other men’s writings so that you shall come easily by what others have labored hard for.", "by":" Socrates"
    },
    {
       "id": "967", "category": "Inspirational", "body": "I am not discouraged, because every wrong attempt discarded is another step forward.– Thomas A. Edison"
    },
    {
       "id": "968", "category": "Inspirational", "body": "Pessimist: A person who says that O is the last letter in ZERO, Instead of the first letter in word OPPORTUNITY.", "by":" Unknown"
    },
    {
       "id": "969", "category": "Inspirational", "body": "Concentration, in its truest, unadulterated form, means the ability to focus the mind on one single solitary thing.", "by":" Komar"
    },
    {
        "id":"970", "category": "Inspirational", "body": "Don’t give up trying to do what you really want to do. Where there is love, inspiration and hard work. I don’t think you can go wrong..", "by":"Ella Fitzgerald"
    },
    {
       "id": "971", "category": "Inspirational", "body": "Real integrity is doing the right thing, knowing that nobody’s going to know whether you did it or not.", "by":" Oprah Winfrey"
    },
    {
       "id": "972", "category": "Inspirational", "body": "There is never enough time to do everything, but there is always enough time to do the most important thing.", "by":" Unknown"
    },
    {
       "id": "973", "category": "Inspirational", "body": "When you go through the bottom of one thing, you wind on the top of another.", "by":" Unknown"
    },
    {
       "id": "974", "category": "Inspirational", "body": "The illiterate of the 21st century will not be those who cannot read and write but those who cannot learn, unlearn, and relearn.", "by":" Alvin Toffler"
    },
    {
       "id": "975", "category": "Inspirational", "body": "Dreams are extremely important. You can’t do it unless you imagine it.", "by":" George Lucas"
    },
    {
       "id": "976", "category": "Inspirational", "body": "Imagination is more important than knowledge.", "by":"Albert Einstein"
    },
    {
       "id": "977", "category": "Inspirational", "body": "The wisest mind has something yet to learn..", "by":"George Santayana"
    },
    {
       "id": "978", "category": "Inspirational", "body": "The greatest discovery of my generation is that human beings can alter their lives by altering their attitudes of mind..", "by":"William James"
    },
    {
       "id": "979", "category": "Inspirational", "body": "Nothing works until you do.", "by":" Mike Brescia"
    },
    {
        "id":"980", "category": "Inspirational", "body": "The mere fact that you have obstacles to overcome is in your favor..", "by":"Robert Collier"
    },
    {
       "id": "981", "category": "Inspirational", "body": "Defensive strategy never has produced ultimate victory..", "by":"Douglas MacArthur"
    },
    {
       "id": "982", "category": "Inspirational", "body": "I have never seen pessimists make anything work, or contribute anything of lasting value..", "by":"Harry Truman"
    },
    {
       "id": "983", "category": "Inspirational", "body": "Power is not revealed by striking hard or often, but by striking true..", "by":"Honore de Balzac"
    },
    {
       "id": "984", "category": "Inspirational", "body": "The starting point of all achievement is desire. Keep this constantly in mind."
    },
    {
       "id": "985", "category": "Inspirational", "body": "Weak desires bring weak results..", "by":"Napoleon Hill"
    },
    {
       "id": "986", "category": "Inspirational", "body": "In business, the competition will bite you if you keep running; if you stand still, they will swallow you..", "by":"William Knudsen Jr."
    },
    {
       "id": "987", "category": "Inspirational", "body": "Attitude determines choice, and choice determines results..", "by":"Jim Rohn"
    },
    {
       "id": "988", "category": "Inspirational", "body": "Ninety-nine percent of failures come from people who have the habit of making excuses..", "by":"George Washington"
    },
    
    {
       "id": "989", "category": "Inspirational", "body": "So, I learn from my mistakes. It’s a very painful way to learn, but without pain, the old saying is, there’s no gain..", "by":"Johnny Cash"
    },
    {
        "id":"990", "category": "Inspirational", "body": "There is no inevitability in history except as men make it..", "by":"Felix Frankfurter"
    },
    {
        "id":"991", "category": "Inspirational", "body": "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change..", "by":"Charles Darwin"
    },
    {
        "id":"992", "category": "Inspirational", "body": "The greatest of faults is to be conscious of none..", "by":"Thomas Carlyle"
    },
    {
        "id":"993", "category": "Inspirational", "body": "If an individual wants to be a leader and isn’t controversial, that means he never stood for anything.", "by":" Richard M. Nixon"
    },
    {
        "id":"994", "category": "Inspirational", "body": "A man who wants to lead the orchestra must turn his back on the crowd.", "by":" James Crook"
    },
    {
        "id":"995", "category": "Inspirational", "body": "You will either step forward into growth or you will step back into safety.", "by":"Abraham Lincoln"
    },
    {
        "id":"996", "category": "Inspirational", "body": "Rowing harder doesn't help if the boat is headed in the wrong direction..", "by":"Kenichi Ohmae"
    },
    {
        "id":"997", "category": "Inspirational", "body": "The test we must set for ourselves is not to march alone but to march in such a way that others will wish to join us..", "by":"Hubert Humphrey"
    },
    {
        "id":"998", "category": "Inspirational", "body": "Order and simplification are the first steps toward the mastery of a subject..", "by":"Thomas Mann"
    },
    {
        "id":"999", "category": "Inspirational", "body": "There are many truths of which the full meaning cannot be realized until personal experience has brought it home..", "by":"John Stuart Mill"
    },
    {
        "id":"1000", "category": "Inspirational", "body": "We must concentrate not merely on the negative expulsion of war but the positive affirmation of peace.", "by": "Martin Luther King"
    },
    {
        "id":"1001", "category": "Success" , "body": "The genius of money is not knowing everything, but rather, surrounding yourself with those who do.", "by":" Glen Purdy"
    },
    {
        "id": "1002",   "category": "Success" , "body": "I believe that the only courage anybody ever needs is the courage to follow your own dreams."
     , "by": "Oprah Winfrey"
    },
    {
        "id": "1003",   "category": "Success" , "body": "Everything we call a trial, a sorrow, or a duty, believe me... the gift is there and the wonder of an overshadowing presence.", "by":" Fra Giovanni"
     , "by": "Michael Jordan"
    },
    {
        "id": "1004",   "category": "Success" , "body": "Yesterday is history. Tomorrow is a mystery Today is a gift That’s why it’s called the present."
     , "by": "Unknown"
    },
    {
        "id": "1005",   "category": "Success" , "body": "Don't wait. The time will never be just right."
     , "by": "Napoleon Hill"
    },
    {
        "id": "1006",   "category": "Success" , "body": "Life isn’t about getting and having it’s about giving and being."
     , "by": "Kevin Kruse"
    },
    {
        "id": "1007",   "category": "Success" , "body": "If you can dream it, you can achieve it."
     , "by": "Zig Ziglar"
    },
    {
        "id": "1008",   "category": "Success" , "body": "How am I going to live today in order to create the tomorrow I'm committed to?"
     , "by": "Anthony Robbins"
    },
    {
        "id": "1009",   "category": "Success" , "body": "Too many of us are not living our dreams because we are living our fears."
     , "by": "Les Brown"
    },
    {
         "id": "1010",   "category": "Success" , "body": "Build your own dreams or someone else will hire you to build theirs."
     , "by": "Farrah Gray"
    },
    {
        "id":"1011", "category": "Inspirational", "body": "There are risks and cost to a program of action, but they are far less than the long-term risks and cost of a comfortable program of inaction..", "by":"John F. Kennedy"
    },
    
    {
        "id":"1012", "category": "Inspirational", "body": "Benjamin Franklin may have discovered electricity, but it is the man who invented the meter who made the money.", "by":" Earl Warren"
    },
    {
        "id":"1013", "category": "Inspirational", "body": "Pleasure in the job puts perfection in the work.", "by":" Aristole"
    },
    {
        "id":"1014", "category": "Inspirational", "body": "We are here to add what we can do, not to get what we can from life..", "by":"William Osler"
    },
    {
        "id":"1015", "category": "Inspirational", "body": "Hard work spotlights the character of people: some turn up their sleeves, some turn up their noses and some don’t turn up at all.", "by":"Sam Ewing"
    },
    {
        "id":"1016", "category": "Inspirational", "body": "Everybody thinks of changing humanity, but nobody thinks of changing himself..", "by":"Leo Tolstoy"
    },
    {
        "id":"1017", "category": "Inspirational", "body": "If you really want something, and really work hard, and take advantage of opportunities, and never give up, you will find a way..", "by":"Jane Goodall"
    },
    {
        "id":"1018", "category": "Inspirational", "body": "We must have long term goals, to keep us from being frustrated by short- term failures..", "by":"Charles C. Noble"
    },
    {
        "id":"1019", "category": "Inspirational", "body": "A great flame follows a little spark..", "by":"Dante Alighieri"
    },
    {
        "id":"1020", "category": "Inspirational", "body": "Everything we call a trial, a sorrow, or a duty, believe me... the gift is there and the wonder of an overshadowing presence.", "by":" Fra Giovanni"
    },
    {
        "id":"1021", "category": "Inspirational", "body": "Practice means to perform, over and over again in the face of all obstacles, some act of vision, of faith, of desire.", "by":" Martha Graham"
    },
    
    {
        "id":"1022", "category": "Inspirational", "body": "Low self-esteem is like driving through life with your hand-break on.", "by":" Maxwell Maltz"
    },
    {
        "id":"1023", "category": "Inspirational", "body": "Think highly of yourself, for the world takes you at your own estimate..", "by":"Unknown"
    },
    {
        "id":"1024", "category": "Inspirational", "body": "I am not what happened to me. I am what I choose to become.", "by":" Carl Jung"
    },
    {
        "id":"1025", "category": "Inspirational", "body": "Education is not the filling of a pail, but the lighting of a fire..", "by":"William Butler Yeats"
    },
    {
        "id":"1026", "category": "Inspirational", "body": "The winds and waves are always on the side of the ablest navigators..", "by":"Edward Gibbon"
    },
    {
        "id":"1027", "category": "Inspirational", "body": "Making the simple complicated is commonplace; making the complicated simple, awesomely simple, that’s creative.", "by":" Charles Mingus"
    },
    {
        "id":"1028", "category": "Inspirational", "body": "Better to light one small candle than to curse the darkness.", "by":" Chinese Proverb"
    },
    {
        "id":"1029", "category": "Inspirational", "body": "If opportunity doesn’t knock, build a door..", "by":"Milton Berle"
    },
   
    {
        "id":"1030", "category": "Inspirational", "body": "The price of greatness is responsibility..", "by":"Winston Churchill"
    },
    {
        "id":"1031", "category": "Inspirational", "body": "We are not human beings on a spiritual journey. We are spiritual beings on a human journey.", "by":"Stephen Covey"
    },
    {
        "id":"1032", "category": "Inspirational", "body": "Laziness is a secret ingredient that goes into failure. But it’s only kept a secret from the person who fails..", "by":"Robert Half"
    },
    {
        "id":"1033", "category": "Inspirational", "body": "Few things help an individual more than to place responsibility upon him, and to let him know that you trust him.", "by":"Booker T. Washington"
    },
    {
        "id":"1034", "category": "Inspirational", "body": "The virtue of man ought to be measured, not by his extraordinary exertions, but by his everyday conduct.", "by":" Blaise Pascal"
    },
    {
        "id":"1035", "category": "Inspirational", "body": "Don't strive for perfection in items or actions that don't matter."
    },
    {
        "id":"1036", "category": "Inspirational", "body": "People are usually paid to get results, not to be perfect..", "by":"Patricia Fripp"
    },
    {
        "id":"1037", "category": "Inspirational", "body": "Ninety-nine percent of failures come from people who have a habit of making excuses..", "by":"George Washington Carver"
    },
    {
        "id":"1038", "category": "Inspirational", "body": "Only those who will risk going too far can possibly find out how far one can go.", "by":"T.S. Eliot"
    },
     
    {
        "id":"1039", "category": "Inspirational", "body": "Opportunities are usually disguised as hard work, so most people don’t recognize them.", "by":" Ann Landers"
    },
    {
        "id":"1040", "category": "Inspirational", "body": "The tragedy of life doesn't lie in not reaching your goal. The tragedy lies in having no goal to reach.", "by":" Benjamin Mays"
    },
    {
        "id":"1041", "category": "Inspirational", "body": "Get a good idea and stay with it. Dog it, and work at it until it’s done right..", "by":"Walt Disney"
    },
    {
        "id":"1042", "category": "Inspirational", "body": "Difficulties are meant to rouse, not discourage. The human spirit is to grow strong by conflict.","by":"William Ellery Channing"
    },
    {
        "id":"1043", "category": "Inspirational", "body": "If a man goes into business with only the idea of making money, the chances are he won’t..", "by":"Joyce Clyde Hall"
    },
    {
        "id":"1044", "category": "Inspirational", "body": "The secret of change consists in spending your energy on creating the new and not in fighting the old.", "by":" Dan Millman"
    },
    {
        "id":"1045", "category": "Inspirational", "body": "It makes small numbers formidable, procures success to the weak, and esteem to all..", "by":"George Washington"
    },
    {
        "id":"1046", "category": "Inspirational", "body": "Confidence is contagious. So is lack of confidence.", "by":" Michael O'Brien"
    },
    {
        "id":"1047", "category": "Inspirational", "body": "Advances are made by those with at least a touch of irrational confidence in what they can do.", "by":" Joan L. Curciopeople."
    },
    {
        "id":"1048", "category": "Inspirational", "body": "Time is nature's way of keeping everything from happening at once.", "by":" Unknown"
    },
    {
        "id":"1049", "category": "Inspirational", "body": "The weak can never forgive. Forgiveness is the attribute of the strong.", "by":" Mohandas Gandhi"
    },
    {
        "id":"1050", "category": "Inspirational", "body": "To have no vision of your own means living the vision of someone else.", "by":"Laurie Beth Jones"
    },
    {
        "id":"1051", "category": "Inspirational", "body": "A deadline is negative inspiration. Still, it's better than no inspiration at all. Rita Mae Brown"
    },
    
    {
        "id":"1052", "category": "Inspirational", "body": "Play every game as if you job depends on it. It just might.", "by":" Casey Stengel"
    },
    {
        "id":"1053", "category": "Inspirational", "body": "Use the past as a guide for the future, not as an excuse for not dealing with it.", "by":" Patricia Fripp"
    },
    {
        "id":"1054", "category": "Inspirational", "body": "Few things are impossible to diligence and skill..", "by":"Samuel Johnson"
    },
    {
        "id":"1055", "category": "Inspirational", "body": "What you think of yourself is much more important than what others think of you..", "by":"Lucius Annaeus Seneca"
    },
    {
        "id":"1056", "category": "Inspirational", "body": "Only those who dare to fail greatly can ever achieve greatly.", "by":" J.F. Kennedy"
    },
    {
        "id":"1057", "category": "Inspirational", "body": "A man, as a general rule, owes very little to what he is born with.A man is what he makes himself..", "by":"Alexander Graham Bell"
    },
    
    {
        "id":"1058", "category": "Inspirational", "body": "Daring ideas are like chessmen moved forward. They may be beaten, but they may start a winning game..", "by":"Johann Wolfgang"
    },
    {
        "id":"1059", "category": "Inspirational", "body": "Why not go out on a limb? Isn't that where the fruit is?.", "by":"Frank Scully"
    },
    {
        "id":"1060", "category": "Inspirational", "body": "The person who gets the farthest is generally the one who is willing to do and dare. The sure-thing boat never gets far from shore..", "by":"Dale Carnegie"
    },
    {
        "id":"1061", "category": "Inspirational", "body": "If we had no winter, the spring would not be so pleasant; if we did not sometimes taste of adversity, prosperity would not be so welcome.", "by":" Anne Brads"
    },
    {
        "id":"1062", "category": "Inspirational", "body": "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence..", "by":"Helen Keller"
    },
   
    {
        "id":"1063", "category": "Inspirational", "body": "Pessimism leads to weakness, optimism to power..", "by":"William James,"
    },
   
    {
        "id":"1064", "category": "Inspirational", "body": "The way to gain a good reputation is to endeavor to be what you desire to appear.", "by":" Socrates"
    },
    {
        "id":"1065", "category": "Inspirational", "body": "Spectacular achievements are always preceded by painstaking preparation..", "by":"Roger Staubach"
    },
    {
        "id":"1066", "category": "Inspirational", "body": "The greatest good you can do for another is not just to share your riches, but to reveal to him his own.", "by":" Benjamin Disraeli"
    },
    {
        "id":"1067", "category": "Inspirational", "body": "Outstanding leaders have a sense of mission, a belief in themselves and the value of their work.", "by":" Brian Tracy"
    },
    {
        "id":"1068", "category": "Inspirational", "body": "Truth is a hard master and costly to serve, but it simplifies all problems..", "by":"Ellis Peters"
    },
    {
        "id":"1069", "category": "Inspirational", "body": "'I didn't have 10,000 failures; I learned 10,000 ways that didn't work.", "by":" Thomas Edison"
    },
    {
        "id":"1070", "category": "Inspirational", "body": "Life shrinks or expands in proportion to one's courage. Anais Nin If you don't risk anything, you risk even more.", "by":" Erica Jong"
    },
    {
        "id":"1071", "category": "Inspirational", "body": "The only way to fail is to fail to try.", "by":" Jacqueline McLarens"
    },
    {
        "id":"1072", "category": "Inspirational", "body": "To keep yourself honest, imagine a camcorder recording all your decisions..", "by":"Lawrence MacGregor Serven"
    },
    {
        "id":"1073", "category": "Inspirational", "body": "Learn to differentiate between what is truly important and what can be dealt with at another time..", "by":"Mia Hamm"
    },
    {
        "id":"1074", "category": "Inspirational", "body": "I know fear is an obstacle for some people, but it is an illusion to me…failure always made me try harder next time.", "by": "Michael Jordan"
    },
    {
        "id":"1075", "category": "Inspirational", "body": "You can't build a reputation on what you are going to do.", "by":" Henry Ford"
    },
    {
        "id":"1076", "category": "Inspirational", "body": "A dose of adversity is often as needful as a dose of medicine.", "by":" American proverb"
    },
    {
        "id":"1077", "category": "Inspirational", "body": "If you want the rainbow, you've got to put up with the rain..", "by":"Jimmy Durante"
    },
    {
        "id":"1078", "category": "Inspirational", "body": "To Make Progress You Must Actually Get Started. The key is to take a step today.", "by":" Jim Rohn"
    },
    {
        "id":"1079", "category": "Inspirational", "body": "Money is a reward you receive for the service you render. The more valuable the service, the greater the reward..", "by":"Bob Proctor"
    },
    {
        "id":"1080", "category": "Inspirational", "body": "Act as if you were already happy, and that will tend to make you happy..", "by":"Dale Carnegie"
    },
    {
        "id":"1081", "category": "Inspirational", "body": "Being broke is a temporary situation. Being poor is a mental state.", "by":" Mike Todd"
    },
    {
        "id":"1082", "category": "Inspirational", "body": "Everyone who got where he is had to begin where he was..", "by":"Robert Louis Stevenson"
    },
    {
        "id":"1083", "category": "Inspirational", "body": "We are continuously faced by great opportunities brilliantly disguised as insoluble problems..", "by":"Lee Iacocca"
    },
    {
        "id":"1084", "category": "Inspirational", "body": "The mass of men lead lives of quiet desperation. What is called resignation is confirmed desperation.", "by":" Thoreau"
    },
    {
        "id":"1085", "category": "Inspirational", "body": "We must use time wisely and forever realize that the time is always ripe to do right.", "by":" Nelson Mandela"
    },
    {
        "id":"1086", "category": "Inspirational", "body": "The greatest good you can do for another is not just to share your riches, but to reveal to him his own..", "by":"Benjamin Disraeli"
    },
    {
        "id":"1087", "category": "Inspirational", "body": "We are what we repeatedly do. Excellence, then, is not an act but a habit..", "by":"Aristotle"
    },
    {
        "id":"1088", "category": "Inspirational", "body": "Progress is a nice word. But change is its motivator. And change has its enemies..", "by":"Robert Kennedy, US Senator"
    },
    {
        "id":"1089", "category": "Inspirational", "body": "I am not bound to win, but I am bound to be true. I am not bound to succeed, but I am bound to live by the light that I have","by": "Abraham Lincoln"
    },
    {
        "id":"1090", "category": "Inspirational", "body": "Assumption is the mother of mistakes.", "by":" Angelo Donghia"
    },
    {
        "id":"1091", "category": "Inspirational", "body": "I do not believe in a fate that falls on men however they act, but I believe in a fate that falls on men unless they act..", "by":"G.K. Chesterton"
    },
    {
        "id":"1092", "category": "Inspirational", "body": "At the end of each day, you should play back the tapes of your performance."
    },
    {
        "id":"1093", "category": "Inspirational", "body": "The results should either applaud you or prod you.", "by":" Jim Rohn"
    },
    {
        "id":"1094", "category": "Inspirational", "body": "It takes but one positive thought when given a chance to survive and thrive to overpower an entire army of negative thoughts.", "by":" Unknown"
    },
    {
        "id":"1095", "category": "Inspirational", "body": "Great minds have purposes, others have wishes..", "by":"Washington Irving"
    },
    {
        "id":"1095", "category": "Inspirational", "body": "A man, as a general rule, owes very little to what he is born with - a man is what he makes himself.", "by":" Alexander Graham Bell"
    },
    {
        "id":"1096", "category": "Inspirational", "body": "Success is a lousy teacher. It seduces smart people into thinking they can’t lose..", "by":"Bill Gates"
    },
    {
        "id":"1097", "category": "Inspirational", "body": "All speech is vain and empty unless it be accompanied by action..", "by":"Demosthenes"
    },
    {
        "id":"1098", "category": "Inspirational", "body": "You cannot tailor make your situation in life, but you can tailor make your attitudes to fit those situations.", "by":" Zig Ziglar"
    },
    {
        "id":"1099", "category": "Inspirational", "body": "In real estate, it’s location, location, location. In business, it’s differentiate, differentiate, differentiate.", "by":" Robert Goizueta"
    },
    {
        "id":"1100", "category": "Inspirational", "body": "Always bear in mind that your own resolution to succeed is more important than any other..", "by":"Abraham Lincoln"
    },
    {
        "id":"1101", "category": "Inspirational", "body": "Persistence: Fall down seven times; Stand up eight.", "by":" Japanese Proverb"
    },
    {
        "id":"1102", "category": "Inspirational", "body": "Tact is the knack of making a point without making an enemy..", "by":"Isaac Newton"
    },
    {
        "id":"1103", "category": "Inspirational", "body": "You can't push anyone up the ladder unless he is willing to climb himself.", "by":" Andrew Carnegie"
    },
    {
        "id":"1104", "category": "Inspirational", "body": "Confidence imparts a wonderful inspiration to its possessor.", "by":" John Milton"
    },
    {
        "id":"1105", "category": "Inspirational", "body": "Yesterday is not ours to recover, but tomorrow is ours to win or to lose..", "by":"Lyndon B. Johnso"
    },
    {
        "id":"1106", "category": "Inspirational", "body": "Growth demands a temporary surrender of security.", "by":" Gail Sheehy"
    },
    {
        "id":"1107", "category": "Inspirational", "body": "Everything depends upon execution; having just a vision is no solution..", "by":"Stephen Sondheim"
    },
    {
        "id":"1108", "category": "Inspirational", "body": "The bitterest tears shed over graves are for words left unsaid and deeds left undone..", "by":"Harriet Beecher"
    },
    {
        "id":"1109", "category": "Inspirational", "body": "Daring ideas are like chessmen moved forward; they may be beaten, but they may start a winning game.", "by":"- Johann Wolfgang"
    },
    {
        "id":"1110", "category": "Inspirational", "body": "You’re never a loser until you quit trying..", "by":"Mike Ditka"
    },
    {
        "id": "1111",   "category": "Success" , "body": "I’ve learned that people will forget what you said people will forget what you did, but people will never forget how you made them feel."
    , "by": "Maya Angelou"
    },
    {
        "id": "1112",   "category": "Success" , "body": "Life is 10% what happens to me and 90% of how I react to it."
    , "by": "Charles Swindoll"
    },
    {
        "id": "1113",   "category": "Success" , "body": "Go confidently in the direction of your dreams. Live the life you have imagined."
    , "by": "Henry David Thoreau"
    },
    {
        "id": "1114",   "category": "Success" , "body": "Life is what happens to you while you’re busy making other plans."
    , "by": "John Lennon"
    },
    {
        "id": "1115",   "category": "Success" , "body": "The best time to plant a tree was 20 years ago. The second best time is now."
    , "by": "Chinese Proverb"
    },
    {
        "id": "1116",   "category": "Success" , "body": "Whatever the mind of man can conceive and believe, it can achieve."
    , "by": "Napoleon Hill"
    },
    {
        "id": "1117",   "category": "Success" , "body": "Dream big and dare to fail."
    , "by": "Norman Vaughan"
    },
    {
        "id": "1118",   "category": "Success" , "body": "If you want to lift yourself up, lift up someone else."
    , "by": "Booker T. Washington"
    },
    {
        "id": "1119",   "category": "Success" , "body": "A good plan violently executed now is better than a perfect plan executed next week."
    , "by": "George Patton"
    },
    {
       "id": "1120",   "category": "Success" , "body": "Two roads diverged in a wood and I–I took the one less traveled by, And that has made all the difference."
    , "by": "Robert Frost"
    },
    {
       "id": "1121",   "category": "Success" , "body": "A journey of a thousand miles must begin with a single step."
    , "by": "Lao Tzu"
    },
    {
       "id": "1122",   "category": "Success" , "body": "What would you do if you weren't afraid?"
    , "by": "Spencer Johnson"
    },
    {
       "id": "1123", "category": "Success", "body": "If you let conditions stop you from working, they'll always stop you.", "by":" James T. Farrell"
    },
    
    {
       "id": "1124",   "category": "Success" , "body": "A goal without a plan is just a wish."
    , "by": "Larry Elder"
    },
    {
       "id": "1125",   "category": "Success" , "body": "Progress is a nice word. But change is its motivator. And change has its enemies..", "by":"Robert Kennedy, US Senator"
    },
    {
       "id": "1126",   "category": "Success" , "body": "A leader is best when people barely know he exists, when his work is done, his aim fulfilled, they will say: we did it ourselves."
    , "by": "Lao Tzu"
    },
    
    
    {
       "id": "1127",   "category": "Success" , "body": "A man who dares to waste one hour of life has not discovered the value of life."
    , "by": "Charles Darwin"
    },
    {
       "id": "1128",   "category": "Success" , "body": "A person who never made a mistake never tried anything new."
    , "by": "Albert Einstein"
    },
    {
       "id": "1129",   "category": "Success" , "body": "A truly rich man is one whose children run into his arms when his hands are empty."
    , "by": "Unknown"
    },
    {
       "id": "1130",   "category": "Success" , "body": "A true leader has the confidence to stand alone, the courage to make tough decisions, and the compassion to listen to the needs of others."
    , "by": "Douglas MacArthur"
    },
    {
       "id": "1131",   "category": "Success" , "body": "All the forces in the world are not so powerful as an idea whose time has come."
    , "by": "Victor Hugo"
    },
    {
       "id": "1132",   "category": "Success" , "body": "Anyone can hold the helm when the sea is calm."
    , "by": "Publilius Syrus"
    },
    {
       "id": "1133", "category": "Success", "body": " A goal is not always meant to be reached; it often serves simply as something to aim at."
    , "by": "Bruce Lee"
    },
    {
       "id": "1134",   "category": "Success" , "body": "Definiteness of purpose is the starting point of all achievement."
    , "by": "W. Clement Stone"
    },
    {
       "id": "1135",   "category": "Success" , "body": "Fall seven times and stand up eight."
    , "by": "Japanese Proverb"
    },
    {
       "id": "1136",   "category": "Success" , "body": "If one advances confidently in the direction of his dreams, and endeavors to live the life he has imagined, he will meet with a success unexpected in common hours."
    , "by": "Henry Thoreau"
    },
    {
       "id": "1137",   "category": "Success" , "body": "Goals are dreams with deadlines."
    , "by": "Diana Scharf Hunt"
    },
    {
       "id": "1138",   "category": "Success" , "body": "I am not a product of my circumstances I am a product of my decisions."
    , "by": "Stephen Covey"
    },
    {
       "id": "1139",   "category": "Success" , "body": "I cannot give you the formula for success, but I can give you the formula for failure, which is: Try to please everybody."
    , "by": "Herbert Swope"
    },
    {
       "id": "1140",   "category": "Success" , "body": "I recommend to you to take care of the minutes; for hours will take care of themselves."
    , "by": "Lord Chesterfield"
    },
    {
       "id": "1141",   "category": "Success" , "body": "If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on."
    , "by": "Sheryl Sandberg"
    },
    {
       "id": "1142",   "category": "Success" , "body": "Impossible is a word to be found only in the dictionary of fools."
    , "by": "Napoleon Bonaparte"
    },
    {
       "id": "1143",   "category": "Success" , "body": "The only way to do great work is to love what you do."
    , "by": "Steve Jobs"
    },
    {
       "id": "1144",   "category": "Success" , "body": "It is better to have lived one day as a tiger than a thousand years as a sheep."
    , "by": "Tibetan saying"
    },
    {
       "id": "1145",   "category": "Success" , "body": "It’s not the years in your life that count It’s the life in your years."
    , "by": "Abraham Lincoln"
    },
    {
       "id": "1146",   "category": "Success" , "body": "My interest in life comes from setting myself huge, apparently unachievable challenges and trying to rise above them."
    , "by": "Richard Branson"
    },
    {
       "id": "1147",   "category": "Success" , "body": "Lead me, follow me, or get out of my way."
    , "by": "General George Patton"
    },
    {
       "id": "1148",   "category": "Success" , "body": "Money is a wonderful thing but it is possible to pay too high a price for it."
    , "by": "Alexander Bloch"
    },
    {
       "id": "1149",   "category": "Success" , "body": "If you’re going through hell, keep going!"
    , "by": "Winston Churchill"
    },
    {
       "id": "1150",   "category": "Success" , "body": "Shoot for the moon. Even if you miss, you'll land among the stars."
    , "by": "Les Brown"
    },
    {
       "id": "1151",   "category": "Success" , "body": "Life is not measured by the number of breaths we take, but by the moments that take our breath away."
    , "by": "Maya Angelou"
    },
    {
       "id": "1152",   "category": "Success" , "body": "Not the cry, but the flight of a wild duck, leads the flock to fly and follow."
    , "by": "Chinese Proverb"
    },
    {
       "id": "1153",   "category": "Success" , "body": "Strive not to be a success, but rather to be of value."
    , "by": "Albert Einstein"
    },
    {
       "id": "1154",   "category": "Success" , "body": "Take care of the minutes and the hours will take care of themselves."
    , "by": "Lord Chesterfield"
    },
    {
       "id": "1155",   "category": "Success" , "body": "The greatest dreams are always unrealistic."
    , "by": "Will Smith"
    },
    {
       "id": "1156",   "category": "Success" , "body": "The mind is everything What you think you become."
    , "by": "Buddha"
    },
    {
       "id": "1157",   "category": "Success" , "body": "The question isn’t who is going to let me; it’s who is going to stop me."
    , "by": "Ayn Rand"
    },
    {
       "id": "1158",   "category": "Success" , "body": "The two most important days in your life are the day you are born and the day you find out why."
    , "by": "Mark Twain"
    },
    {
       "id": "1159",   "category": "Success" , "body": "There are no traffic jams along the extra mile."
    , "by": "Roger Staubach"
    },
    {
       "id": "1160",   "category": "Success" , "body": "There is nothing so useless as doing efficiently that which should not be done at all."
    , "by": "Peter Drucker"
    },
    {
       "id": "1161",   "category": "Success" , "body": "There is only one way to avoid criticism: do nothing, say nothing, and be nothing."
    , "by": "Aristotle"
    },
    {
       "id": "1162",   "category": "Success" , "body": "Time is the coin of your life. It is the only coin you have, and only you can determine how it will be spent. Be careful lest you let other people spend it for you."
    , "by": "Carl Sandburg"
    },
    {
       "id": "1163",   "category": "Success" , "body": "We become what we think about."
    , "by": "Earl Nightingale"
    },
    {
       "id": "1164",   "category": "Success" , "body": "What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do."
    , "by": "Bob Dylan"
    },
    {
       "id": "1165",   "category": "Success" , "body": "Whatever you are, be a good one."
    , "by": "Abraham Lincoln"
    },
    {
       "id": "1166",   "category": "Success" , "body": "Whatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it."
    , "by": "Johann Wolfgang von Goethe"
    },
    {
       "id": "1167",   "category": "Success" , "body": "Where there is no vision, the people perish."
    , "by": "Proverbs 29:18"
    },
    {
       "id": "1168",   "category": "Success" , "body": "When I was 5 years old, my mother always told me that happiness was the key to life.\tWhen I went to school, they asked me what I wanted to be when I grew up. I wrote down ‘happy’.\tThey told me I didn’t understand the assignment, and I told them they didn’t understand life."
    , "by": "John Lennon"
    },
    {
       "id": "1169",   "category": "Success" , "body": "Whether you think you can or you think you can’t, you’re right."
    , "by": "Henry Ford"
    },
    {
       "id": "1170",   "category": "Success" , "body": "You become what you believe."
    , "by": "Oprah Winfrey"
    },
    {
       "id": "1171",   "category": "Success" , "body": "You miss 100% of the shots you don’t take."
    , "by": "Wayne Gretzky"
    },
    {
       "id": "1172",   "category": "Success" , "body": "You will never find time for anything If you want time you must make it."
    , "by": "Charles Buxton"
    },
    {
       "id": "1173",   "category": "Success" , "body": "Change your thoughts and you change your world."
    , "by": "Norman Vincent Peale"
    },
    {
       "id": "1174",   "category": "Success" , "body": "Never doubt that a small group of thoughtful, concerned citizens can change world. Indeed it is the only thing that ever has."
    , "by": "Margaret Mead"
    },
    {
       "id": "1175",   "category": "Success" , "body": "Neither success nor failure are ever final."
    , "by": "Roger Babson"
    },
    {
       "id": "1176",   "category": "Success" , "body": "You are not defined by your past. You are prepared by your past."
    , "by": "Joel Osteen"
    },
    {
       "id": "1177",   "category": "Success" , "body": "Always do what you are afraid to do."
    , "by": "Ralph Waldo Emerson"
    },
    {
       "id": "1178",   "category": "Success" , "body": "We tend to forget that happiness doesn't come as a result of getting something we don't have, but rather recognizing and appreciating what we do have."
    , "by": "Friedrich Koenig"
    },
    {
       "id": "1179",   "category": "Success" , "body": "Nobody can go back and start a new beginning, but anyone can start today and make a new ending."
    , "by": "Maria Robinson"
    },
    {
       "id": "1180",   "category": "Success" , "body": "Seek opportunity, not security A boat in a harbor is safe, but in time its bottom will rot out."
    , "by": "H. Jackson Brown Jr."
    },
    {
       "id": "1181", "category": "Success", "body": "Don't worry about failure; you only have to be right once."
    , "by": "Drew Houston"
    },
    {
       "id": "1182",   "category": "Success" , "body": "I must follow the people. Am I not their leader?"
    , "by": "Benjamin Disraeli"
    },
    {
       "id": "1183",   "category": "Success" , "body": "If you want to be happy set a goal that commands your thoughts, liberates your energy and inspires your hopes."
    , "by": "Andrew Carnegie"
    },
    {
       "id": "1184",   "category": "Success" , "body": "People buy into the leader before they buy into the vision."
    , "by": "John Maxwell"
    },
    {
       "id": "1185",   "category": "Success" , "body": "Don't ask what the world needs. Ask what makes you come alive, and go do it. Because what the world needs is people who have come alive."
    , "by": "Howard Thurman"
    },
    {
       "id": "1186", "category": "Success", "body": "  The art of leadership is saying no, not saying yes. It is very easy to say yes."
    , "by": "Tony Blair"
    },
    {
       "id": "1187",   "category": "Success" , "body": "To command is to serve, nothing more and nothing less."
    , "by": "Andre Malraux"
    },
    {
       "id": "1188",   "category": "Success" , "body": "We are too busy mopping the floor to turn off the faucet."
    , "by": "Unknown"
    },
    {
       "id": "1189",   "category": "Success" , "body": "What you do has far greater impact than what you say."
    , "by": "Stephen Covey"
    },
    {
       "id": "1190",   "category": "Success" , "body": "You manage things; you lead people."
    , "by": "Rear Admiral Grace Murray Hopper"
    },
    {
       "id": "1191", "category": "Success", "body": " A day wasted on others is not wasted on one’s self."
    , "by": "Charles Dickens"
    },
    
    {
       "id":"1192", "category": "Success" , "body": "The greatest success stories were created by people who recognized a problem and turned it into an opportunity.", "by":" Joseph Sugarman"
    },
    
    {
       "id": "1193",   "category": "Success" , "body": "A leader is a dealer in hope."
    , "by": "Napoleon Bonaparte"
    },
    {
       "id": "1194",   "category": "Success" , "body": "A leader is one who knows the way, goes the way, and shows the way."
    , "by": "John C. Maxwell"
    },
    {
       "id": "1195",   "category": "Success" , "body": "A leader takes people where they want to go A great leader takes people where they don’t necessarily want to go, but ought to be."
    , "by": "Rosalynn Carter"
    },
    {
       "id": "1196",   "category": "Success" , "body": "A man who wants to lead the orchestra must turn his back on the crowd."
    , "by": "Max Lucado"
    },
    {
       "id": "1197",   "category": "Success" , "body": "All great achievements require time."
    , "by": "Maya Angelou"
    },
    {
       "id": "1198",   "category": "Success" , "body": "All successful people have a goal. No one can get anywhere unless he knows where he wants to go and what he wants to be or do."
    , "by": "Norman Vincent Peale"
    },
    {
       "id": "1199",   "category": "Success" , "body": "All that really belongs to us is time; even he who has nothing else has that."
    , "by": "Baltasar Gracián"
    },
    {
         "id": "1200",   "category": "Success" , "body": "All the flowers of all of the tomorrows are in the seeds of today."
     , "by": "Chinese Proverb"
    },
    {
        "id": "1201",   "category": "Success" , "body": "An unexamined life is not worth living."
    , "by": "Socrates"
   },
   {
        "id": "1202",   "category": "Success" , "body": "Arise, awake, stop not until your goal is achieved."
    , "by": "Swami Vivekananda"
   },
   {
        "id": "1203",   "category": "Success" , "body": "An average person with average talents and ambition and average education, can outstrip the most brilliant genius in our society, if that person has clear, focused goals."
    , "by": "Mary Kay Ash"
   },
   {
        "id": "1204",   "category": "Success" , "body": "Arriving at one goal iIs the starting point to another."
    , "by": "John Dewey"
   },
   {
        "id": "1205",   "category": "Success" , "body": "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you."
    , "by": "Jesus"
   },
   {
        "id": "1206",   "category": "Success" , "body": "Be mindful of how you approach time Watching the clock is not the same as watching the sun rise."
    , "by": "Sophia Bedford–Pierce"
   },
   {
        "id": "1207",   "category": "Success" , "body": "Before you are a leader, success is all about growing yourself. When you become a leader, success is all about growing others."
    , "by": "Jack Welch"
   },
   {
        "id": "1208",   "category": "Success" , "body": "Believe you can and you’re halfway there."
    , "by": "Theodore Roosevelt"
   },
   {
        "id": "1209",   "category": "Success" , "body": "Certain things catch your eye but pursue only those that capture the heart."
    , "by": "Ancient Indian Proverb"
   },
   {
        "id": "1210",   "category": "Success" , "body": "Challenges are what make life interesting and overcoming them is what makes life meaningful."
    , "by": "Joshua J. Marine"
   },
   {
        "id": "1211",   "category": "Success" , "body": "Destiny is no matter of chance. It is a matter of choice. It is not a thing to be waited for; it is a thing to be achieved."
    , "by": "William Jennings Bryan"
   },
   {
        "id": "1212",   "category": "Success" , "body": "Discipline is the bridge between goals and accomplishment."
    , "by": "Jim Rohn"
   },
   {
        "id": "1213",   "category": "Success" , "body": "Do not confuse motion and progress A rocking horse keeps moving but does not make any progress."
    , "by": "Alfred A. Montapert"
   },
   {
        "id": "1214",   "category": "Success" , "body": "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment."
    , "by": "Buddha"
   },
   {
        "id": "1215",   "category": "Success" , "body": "Do what you can, where you are with what you have."
    , "by": "Teddy Roosevelt"
   },
   {
        "id": "1216",   "category": "Success" , "body": "Do what you feel in your heart to be right–for you’ll be criticized anyway."
    , "by": "Eleanor Roosevelt"
   },
   {
        "id": "1217",   "category": "Success" , "body": "Don’t be fooled by the calendar There are only as many days in the year as you make use of. One man gets only a week’s value out of a year while another man gets a full year’s value out of a week."
    , "by": "Charles Richards"
   },
   {
        "id": "1218",   "category": "Success" , "body": "Don’t be stomping on ants when you have elephants to feed."
    , "by": "Peter Turla"
   },
   {
        "id": "1219",   "category": "Success" , "body": "Don’t spend a dollar’s worth of time on a ten",
       "minute video which reveals “6 Things Successful People Do To  Get & Stay Motivated”.": "cent decision."
    , "by": "Peter Turla"
   },
   {
        "id": "1220",   "category": "Success" , "body": "Dost thou love life? Then do not squander time, for that’s the stuff that life is made of."
    , "by": "Benjamin Franklin"
   },
   {
        "id": "1221",   "category": "Success" , "body": "Dreaming, after all, is a form of planning."
    , "by": "Gloria Steinem"
   },
   {
        "id": "1222",   "category": "Success" , "body": "Every child is an artist The problem is how to remain an artist once he grows up."
    , "by": "Pablo Picasso"
   },
   {
        "id": "1223", "category": "Success" , "body": " Education costs money. But then so does ignorance."
    , "by": "Sir Claus Moser"
   },
   {
        "id": "1224",   "category": "Success" , "body": "Eighty percent of success is showing up."
    , "by": "Woody Allen"
   },
   {
        "id": "1225",   "category": "Success" , "body": "Either write something worth reading or do something worth writing."
    , "by": "Benjamin Franklin"
   },
   {
        "id": "1226",   "category": "Success" , "body": "Earn your leadership every day."
    , "by": "Michael Jordan"
   },
   {
        "id": "1227",   "category": "Success" , "body": "Either you run the day, or the day runs you."
    , "by": "Jim Rohn"
   },
   {
        "id": "1228",   "category": "Success" , "body": "I am endlessly fascinated that playing football is considered a training ground for leadership, but raising children isn’t."
    , "by": "Dee Dee Myers"
   },
   {
        "id": "1229",   "category": "Success" , "body": "Every strike brings me closer to the next home run."
    , "by": "Babe Ruth"
   },
   {
        "id": "1230",   "category": "Success" , "body": "Everything you’ve ever wanted is on the other side of fear."
    , "by": "George Adair"
   },
   {
        "id": "1231",   "category": "Success" , "body": "Fear melts when you take action towards a goal you really want."
    , "by": "Robert Allen"
   },
   {
        "id": "1232",   "category": "Success" , "body": "Great leaders are not defined by the absence of weakness, but rather by the presence of clear strengths."
    , "by": "John Zenger"
   },
   {
        "id": "1233",   "category": "Success" , "body": "Half our life is spent trying to find something to do with the time we have rushed through life trying to save."
    , "by": "Will Rogers"
   },
   {
        "id": "1234",   "category": "Success" , "body": "Happiness is not something readymade. It comes from your own actions."
    , "by": "Dalai Lama"
   },
   {
        "id": "1235",   "category": "Success" , "body": "He who has great power should use it lightly."
    , "by": "Seneca"
   },
   {
        "id": "1236",   "category": "Success" , "body": "He who has never learned to obey cannot be a good commander."
    , "by": "Aristotle"
   },
   {
        "id": "1237",   "category": "Success" , "body": "How wonderful it is that nobody need wait a single moment before starting to improve the world."
    , "by": "Anne Frank"
   },
   {
        "id": "1238",   "category": "Success" , "body": "I am looking for a lot of men who have an infinite capacity to not know what can't be done."
    , "by": "Henry Ford"
   },
   {
        "id": "1239",   "category": "Success" , "body": "I didn’t fail the test I just found 100 ways to do it wrong."
    , "by": "Benjamin Franklin"
   },
   {
        "id": "1240",   "category": "Success" , "body": "I have learned over the years that when one’s mind is made up, this diminishes fear."
    , "by": "Rosa Parks"
   },
   {
        "id": "1241",   "category": "Success" , "body": "I start with the premise that the function of leadership is to produce more leaders, not more followers."
    , "by": "Ralph Nader"
   },
   {
        "id": "1242",   "category": "Success" , "body": "I would rather die of passion than of boredom."
    , "by": "Vincent van Gogh"
   },
   {
        "id": "1243",   "category": "Success" , "body": "The purpose of our lives is to be happy."
    , "by": "Dalai Lama"
   },
   {
        "id": "1244",   "category": "Success" , "body": "If one is lucky, a solitary fantasy can totally transform one million realities."
    , "by": "Maya Angelou"
   },
   {
        "id": "1245",   "category": "Success" , "body": "If you aim at nothing, you will hit it every time."
    , "by": "Zig Ziglar"
   },
   {
        "id": "1246",   "category": "Success" , "body": "If you do what you’ve always done, you’ll get what you’ve always gotten."
    , "by": "Tony Robbins"
   },
   {
        "id": "1247",   "category": "Success" , "body": "If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced."
    , "by": "Vincent Van Gogh"
   },
   {
        "id": "1248",   "category": "Success" , "body": "If you look at what you have in life you’ll always have more. If you look at what you don’t have in life, you’ll never have enough."
    , "by": "Oprah Winfrey"
   },
   {
        "id": "1249",   "category": "Success" , "body": "If your actions inspire others to dream more, learn more, do more and become more, you are a leader."
    , "by": "John Quincy Adams"
   },
   {
        "id": "1250",   "category": "Success" , "body": "In matters of style, swim with the current; in matters of principle, stand like a rock."
    , "by": "Thomas Jefferson"
   },
   {
        "id": "1251",   "category": "Success" , "body": "Live fully. Love openly. Make a difference."
    , "by": "Brendan Burchard"
   },
   {
        "id": "1252",   "category": "Success" , "body": "In truth, people can generally make time for what they choose to do; it is not really the time but the will that is lacking."
    , "by": "Sir John Lubbock"
   },
   {
        "id": "1253",   "category": "Success" , "body": "It doesn't matter where you are coming from All that matters is where you are going."
    , "by": "Brian Tracy"
   },
   {
        "id": "1254",   "category": "Success" , "body": "It is good to have an end to journey toward; but it is the journey that matters, in the end."
    , "by": "Ernest Hemingway"
   },
   {
        "id": "1255",   "category": "Success" , "body": "It’s better to do the right thing slowly than the wrong thing quickly."
    , "by": "Peter Turla"
   },
   {
        "id": "1256",   "category": "Success" , "body": "Know the true value of time; snatch, seize, and enjoy every moment of it. No idleness, no laziness, no procrastination; Never put off till tomorrow what you can do today."
    , "by": "Lord Chesterfield"
   },
   {
        "id": "1257",   "category": "Success" , "body": "Know your limits, but never stop trying to exceed them."
    , "by": "Unknown"
   },
   {
        "id": "1258",   "category": "Success" , "body": "Lead and inspire people. Don’t try to manage and manipulate people. Inventories can be managed but people must be lead."
    , "by": "Ross Perot"
   },
   {
        "id": "1259",   "category": "Success" , "body": "Leaders aren’t born, they are made And they are made just like anything else, through hard work. And that’s the price we’ll have to pay to achieve that goal, or any goal."
    , "by": "Vince Lombardi"
   },
   {
        "id": "1260",   "category": "Success" , "body": "Nothing is a waste of time if you use the experience wisely."
    , "by": "Rodin"
   },
   {
        "id": "1261",   "category": "Success" , "body": "Leadership does not always wear the harness of compromise."
    , "by": "Woodrow Wilson"
   },
   {
        "id": "1262",   "category": "Success" , "body": "Nothing is impossible, the word itself says, “I’m possible!”"
    , "by": "Audrey Hepburn"
   },
   {
        "id": "1263",   "category": "Success" , "body": "Leadership is the art of getting someone else to do something you want done because he wants to do it."
    , "by": "General Dwight Eisenhower"
   },
   {
        "id": "1264",   "category": "Success" , "body": "Living without an aim is like sailing without a compass."
    , "by": "Alexander Dumas"
   },
   {
        "id": "1265",   "category": "Success" , "body": "Money, I can only gain or lose. But time I can only lose. So, I must spend it carefully."
    , "by": "Unknown"
   },
   {
        "id": "1266", "category": "Success", "body": "  Leadership is the capacity to translate vision into reality."
    , "by": "Warren Bennis"
   },
   {
        "id": "1267",   "category": "Success" , "body": "My responsibility is getting all my players playing for the name on the front of the jersey, not the one on the back."
    , "by": "Unknown"
   },
   {
        "id": "1268",   "category": "Success" , "body": "Leadership is the key to 99 percent of all successful efforts."
    , "by": "Erskine Bowles"
   },
   {
        "id": "1269",   "category": "Success" , "body": "Life shrinks or expands in proportion to one’s courage."
    , "by": "Anais Nin"
   },
   {
        "id": "1270",   "category": "Success" , "body": "Leadership is unlocking people’s potential to become better."
    , "by": "Bill Bradley"
   },
   {
        "id": "1271",   "category": "Success" , "body": "Live each day as if it be your last."
    , "by": "Marcus Aurelius"
   },
   {
        "id": "1272",   "category": "Success" , "body": "Lost time is never found again."
    , "by": "Proverb"
   },
   {
        "id": "1273",   "category": "Success" , "body": "Map out your future, but do it in pencil."
    , "by": "Jon Bon Jovi"
   },
   {
        "id": "1274",   "category": "Success" , "body": "Men make history and not the other way around. In periods where there is no leadership, society stands still. Progress occurs when courageous, skillful leaders seize the opportunity to change things for the better."
    , "by": "Harry S. Truman"
   },
   {
        "id": "1275",   "category": "Success" , "body": "Nothing is ours except time."
    , "by": "Johann Wolfgang von Goethe"
   },
   {
        "id": "1276",   "category": "Success" , "body": "Obstacles are those frightful things you see when you take your eyes off your goal."
    , "by": "Henry Ford"
   },
   {
        "id": "1277",   "category": "Success" , "body": "Of course I'm ambitious. What's wrong with that? Otherwise you sleep all day."
    , "by": "Ringo Starr"
   },
   {
        "id": "1278",   "category": "Success" , "body": "One of the secrets of life is to make stepping",
       "minute video which reveals “6 Things Successful People Do To  Get & Stay Motivated”.": "stones out of stumbling blocks."
    , "by": "Jack Penn"
   },
   {
        "id": "1279",   "category": "Success" , "body": "Our lives begin to end the day we become silent about things that matter."
    , "by": "Martin Luther King Jr."
   },
   {
        "id": "1280",   "category": "Success" , "body": "Remember that not getting what you want is sometimes a wonderful stroke of luck."
    , "by": "Dalai Lama"
   },
   {
        "id": "1281",   "category": "Success" , "body": "Start where you are. Use what you have Do what you can."
    , "by": "Arthur Ashe"
   },
   {
        "id": "1282",   "category": "Success" , "body": "The best revenge is massive success."
    , "by": "Frank Sinatra"
   },
   {
        "id": "1283",   "category": "Success" , "body": "The distance between insanity and genius is measured only by success."
    , "by": "Bruce Feirstein"
   },
   {
        "id": "1284",   "category": "Success" , "body": "The first responsibility of a leader is to define reality. The last is to say thank you. In between, the leader is a servant."
    , "by": "Max DePree"
   },
   {
        "id": "1285",   "category": "Success" , "body": "The key is in not spending time, but in investing it."
    , "by": "Stephen R. Covey"
   },
   {
        "id": "1286",   "category": "Success" , "body": "The most common way people give up their power is by thinking they don’t have any."
    , "by": "Alice Walker"
   },
   {
        "id": "1287",   "category": "Success" , "body": "The person who says it cannot be done should not interrupt the person who is doing it."
    , "by": "Chinese Proverb"
   },
   {
        "id": "1288",   "category": "Success" , "body": "The supreme quality of leadership is integrity."
    , "by": "Dwight Eisenhower"
   },
   {
        "id": "1289",   "category": "Success" , "body": "Time is money."
    , "by": "Benjamin Franklin"
   },
   {
        "id": "1290",   "category": "Success" , "body": "Time is what we want most, but what we use worst."
    , "by": "William Penn"
   },
   {
        "id": "1291",   "category": "Success" , "body": "Try not. Do or do not. There is no try."
    , "by": "Yoda"
   },
   {
        "id": "1292",   "category": "Success" , "body": "Until thought is linked with purpose there is no intelligent accomplishment."
    , "by": "James Allen"
   },
   {
        "id": "1293",   "category": "Success" , "body": "Until we can manage time, we can manage nothing else."
    , "by": "Peter Drucker"
   },
   {
        "id": "1294",   "category": "Success" , "body": "Until you value yourself, you will not value your time. Until you value your time you will not do anything with it."
    , "by": "M. Scott Peck"
   },
   {
        "id": "1295",   "category": "Success" , "body": "Vision without action is a daydream. Action without vision is a nightmare."
    , "by": "Japanese Proverb"
   },
   {
        "id": "1296",   "category": "Success" , "body": "There is no such thing as failure You either succeed or learn."
    , "by": "Kevin Kruse"
   },
   {
        "id": "1297",   "category": "Success" , "body": "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light."
    , "by": "Plato"
   },
   {
        "id": "1298",   "category": "Success" , "body": "We can no more afford to spend major time on minor things than we can to spend minor time on major things."
    , "by": "Jim Rohn"
   },
   {
        "id": "1299",   "category": "Success" , "body": "When I stand before God at the end of my life I would hope that I would not have a single bit of talent left and could say, I used everything you gave me."
    , "by": "Erma Bombeck"
   },
    {
        "id": "1300",   "category": "Success" , "body": "You can never cross the ocean until you have the courage to lose sight of the shore."
     , "by": "Christopher Columbus"
    },
    {
        "id": "1301",   "category": "Success" , "body": "You can’t fall if you don’t climb. But there’s no joy in living your whole life on the ground."
     , "by": "Unknown"
    },
    {
        "id": "1302",   "category": "Success" , "body": "You may be disappointed if you fail, but you are doomed if you don’t try."
     , "by": "Beverly Sills"
    },
    {
        "id": "1303",   "category": "Success" , "body": "You must get good at one of two things. Planting in the spring or begging in the fall."
     , "by": "Jim Rohn"
    },
    {
        "id": "1304",   "category": "Success" , "body": "You take your life in your own hands, and what happens? A terrible thing, no one to blame."
     , "by": "Erica Jong"
    },
    {
        "id": "1305",   "category": "Success" , "body": "When I let go of what I am, I become what I might be."
     , "by": "Lao Tzu"
    },
    {
        "id": "1306", "category": "Success", "body": "Have the courage to follow your heart and intuition. They somehow already know"
     , "by": "Steve Jobs"
    },
    {
        "id": "1307",   "category": "Success" , "body": "The death rate for people who play it safe and for people who live boldly is the same: 100%."
     , "by": "Patti Digh"
    },
    {
        "id": "1308",   "category": "Success" , "body": "There is no passion to be found playing small."
     , "by": "Nelson Mandela"
    },
    {
        "id": "1309",   "category": "Success" , "body": "Better three hours too soon, than one minute too late."
     , "by": "William Shakespeare"
    },
    {
        "id": "1310",   "category": "Success" , "body": "You can’t use up creativity The more you use, the more you have."
     , "by": "Maya Angelou"
    },
    {
        "id": "1311",   "category": "Success" , "body": "A cowardly leader is the most dangerous of men."
     , "by": "Stephen King"
    },
    {
        "id": "1312",   "category": "Success" , "body": "A deadline is negative inspiration. Still, it's better than no inspiration at all."
     , "by": "Rita Mae Brown"
    },
    {
        "id": "1313",   "category": "Success" , "body": "A good general not only sees the way to victory; he also knows when victory is impossible."
     , "by": "Polybius"
    },
    {
        "id": "1314",   "category": "Success" , "body": "A great leader’s courage to fulfill his vision comes from passion, not position."
     , "by": "John C. Maxwell"
    },
    {
        "id": "1315",   "category": "Success" , "body": "A great person attracts great people and knows how to hold them together."
     , "by": "Johann Wolfgang Von Goethe"
    },
    {
        "id": "1316",   "category": "Success" , "body": "As long as I have a want, I have a reason for living. Satisfaction is death."
     , "by": "George Bernard Shaw"
    },
    {
        "id": "1317",   "category": "Success" , "body": "As we look ahead into the next century, leaders will be those who empower others."
     , "by": "Bill Gates"
    },
    {
        "id": "1318",   "category": "Success" , "body": "Between the great things we cannot do and the small things we will not do, the danger is that we shall do nothing."
     , "by": "Adolphe Monod"
    },
    {
        "id": "1319",   "category": "Success" , "body": "Difficulties increase the nearer we approach the goal."
     , "by": "Johann Wolfgang von Goethe"
    },
    {
        "id": "1320",   "category": "Success" , "body": "Don’t say you don’t have enough time. You have exactly the same number of hours per day that were given to Helen Keller, Pasteur Michelangelo, Mother Teresa, Leonardo da Vinci, Thomas Jefferson, and Albert Einstein."
     , "by": "H. Jackson Brown"
    },
    {
        "id": "1321",   "category": "Success" , "body": "Don't be afraid to take a big step if one is indicated; you can't cross a chasm in two small jumps."
     , "by": "David Lloyd George"
    },
    {
        "id": "1322",   "category": "Success" , "body": "Education is the mother of leadership."
     , "by": "Wendell Willkie"
    },
    {
        "id": "1323",   "category": "Success" , "body": "If you want your children to turn out well, spend twice as much time with them and half as much money."
     , "by": "Abigail Van Buren"
    },
    {
        "id": "1324",   "category": "Success" , "body": "Effective leadership is not about making speeches or being liked; leadership is defined by results not attributes."
     , "by": "Peter Drucker"
    },
    {
        "id": "1325",   "category": "Success" , "body": "Effective leadership is putting first things first. Effective management is discipline, carrying it out."
     , "by": "Stephen Covey"
    },
    {
        "id": "1326",   "category": "Success" , "body": "Even if you’re on the right track, you’ll get run over if you just sit there."
     , "by": "Will Rogers"
    },
    {
        "id": "1327",   "category": "Success" , "body": "Everything has beauty, but not everyone can see."
     , "by": "Confucius"
    },
    {
        "id": "1328",   "category": "Success" , "body": "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him."
     , "by": "Booker T. Washington"
    },
    {
        "id": "1329",   "category": "Success" , "body": "For time and the world do not stand still Change is the law of life. And those who look only to the past or the present are certain to miss the future."
     , "by": "John F. Kennedy"
    },
    {
        "id": "1330",   "category": "Success" , "body": "Gaining time is gaining everything in love, trade and war."
     , "by": "John Shebbeare"
    },
    {
        "id": "1331",   "category": "Success" , "body": "Goals are not only absolutely necessary to motivate us. They are essential to really keep us alive."
     , "by": "Robert H. Schuller"
    },
    {
        "id": "1332",   "category": "Success" , "body": "Goals determine what you're going to be."
     , "by": "Julius Erving"
    },
    {
        "id": "1333",   "category": "Success" , "body": "He that rises late must trot all day."
     , "by": "Benjamin Franklin"
    },
    {
        "id": "1334",   "category": "Success" , "body": "He who gains time gains everything."
     , "by": "Benjamin Disraeli"
    },
    {
        "id": "1335",   "category": "Success" , "body": "He who knows most grieves most for wasted time."
     , "by": "Dante"
    },
    {
        "id": "1336",   "category": "Success" , "body": "I am reminded how hollow the label of leadership sometimes is and how heroic followership can be."
     , "by": "Warren Bennis"
    },
    {
        "id": "1337",   "category": "Success" , "body": "I attribute my success to this: I never gave or took any excuse."
     , "by": "Florence Nightingale"
    },
    {
        "id": "1338",   "category": "Success" , "body": "I don’t think of the past. The only thing that matters is the everlasting present."
     , "by": "Somerset Maugham"
    },
    {
        "id": "1339",   "category": "Success" , "body": "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do."
     , "by": "Leonardo da Vinci"
    },
    {
        "id": "1340",   "category": "Success" , "body": "If the wind will not serve, take to the oars."
     , "by": "Latin Proverb"
    },
    {
        "id": "1341",   "category": "Success" , "body": "If you don't have time to do it right you must have time to do it over."
     , "by": "John Wooden"
    },
    {
        "id": "1342",   "category": "Success" , "body": "If you don't know where you are going, you will probably end up somewhere else."
     , "by": "Lawrence J. Peter"
    },
    {
        "id": "1343",   "category": "Success" , "body": "If you have built castles in the air, your work need not be lost; that is where they should be. Now put the foundations under them."
     , "by": "Henry David Thoreau"
    },
    {
        "id": "1344",   "category": "Success" , "body": "In a day, when you don't come across any problems –you can be sure that you are travelling in a wrong path."
     , "by": "Swami Vivekananda"
    },
    {
        "id": "1345",   "category": "Success" , "body": "It is a mistake to look too far ahead Only one link of the chain of destiny can be handled at a time."
     , "by": "Winston Churchill"
    },
    {
        "id": "1346",   "category": "Success" , "body": "It is absurd that a man should rule others, who cannot rule himself."
     , "by": "Latin Proverb"
    },
    {
        "id": "1347",   "category": "Success" , "body": "It is easier to go down a hill than up, but the view is best from the top."
     , "by": "Arnold Bennett"
    },
    {
        "id": "1348",   "category": "Success" , "body": "It is never too late to be who you might have been."
     , "by": "George Eliot"
    },
    {
        "id": "1349",   "category": "Success" , "body": "It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings."
     , "by": "Ann Landers"
    },
    {
        "id": "1350",   "category": "Success" , "body": "It’s not enough to be busy, so are the ants. The question is, what are we busy about?"
     , "by": "Henry David Thoreau"
    },
    {
        "id": "1351",   "category": "Success" , "body": "It’s your place in the world; it’s your life Go on and do all you can with it, and make it the life you want to live."
     , "by": "Mae Jemison"
    },
    {
        "id": "1352",   "category": "Success" , "body": "Leadership cannot just go along to get along. Leadership must meet the moral challenge of the day."
     , "by": "Jesse Jackson"
    },
    {
        "id": "1353",   "category": "Success" , "body": "Leadership is a potent combination of strategy and character. But if you must be without one, be without the strategy."
     , "by": "Norman Schwarzkopf"
    },
    {
        "id": "1354",   "category": "Success" , "body": "Life is full of obstacle illusions."
     , "by": "Grant Frazier"
    },
    {
        "id": "1355",   "category": "Success" , "body": "Look to the future, because that is where you'll spend the rest of your life."
     , "by": "George Burns"
    },
    {
        "id": "1356",   "category": "Success" , "body": "Management is efficiency in climbing the ladder of success; leadership determines whether the ladder is leaning against the right wall."
     , "by": "Stephen Covey"
    },
    {
        "id": "1357",   "category": "Success" , "body": "Never leave till tomorrow that which you can do today."
     , "by": "Benjamin Franklin"
    },
    {
        "id": "1358",   "category": "Success" , "body": "Never let yesterday use up today."
     , "by": "Richard H. Nelson"
    },
    {
        "id": "1359",   "category": "Success" , "body": "No man will make a great leader who wants to do it all himself, or to get all the credit for doing it."
     , "by": "Andrew Carnegie"
    },
    {
        "id": "1360",   "category": "Success" , "body": "Nothing else, perhaps, distinguishes effective executives as much as their tender loving care of time."
     , "by": "Peter Drucker"
    },
    {
        "id": "1361",   "category": "Success" , "body": "Nothing happens until something moves."
     , "by": "Albert Einstein"
    },
    {
        "id": "1362",   "category": "Success" , "body": "Once you have mastered time, you will understand how true it is that most people overestimate what they can accomplish in a year –and underestimate what they can achieve in a decade."
     , "by": "Anthony Robbins"
    },
    {
        "id": "1363",   "category": "Success" , "body": "Ordinary people think merely of spending time. Great people think of using it."
     , "by": "Unknown"
    },
    {
        "id": "1364",   "category": "Success" , "body": "People often say that motivation doesn’t last. Well, neither does bathing That’s why we recommend it daily."
     , "by": "Zig Ziglar"
    },
    {
        "id": "1365",   "category": "Success" , "body": "Realize that now, in this moment of time you are creating. You are creating your next moment. That is what’s real."
     , "by": "Sara Paddison"
    },
    {
        "id": "1366",   "category": "Success" , "body": "Remember no one can make you feel inferior without your consent."
     , "by": "Eleanor Roosevelt"
    },
    {
        "id": "1367",   "category": "Success" , "body": "So much of what we call management consists in making it difficult for people to work."
     , "by": "Peter Drucker"
    },
    {
        "id": "1368",   "category": "Success" , "body": "The battles that count aren’t the ones for gold medals. The struggles within yourself– the invisible battles inside all of us–that’s where it’s at."
     , "by": "Jesse Owens"
    },
    {
        "id": "1369",   "category": "Success" , "body": "The future belongs to those who believe in the beauty of their dreams."
     , "by": "Eleanor Roosevelt"
    },
    {
        "id": "1370",   "category": "Success" , "body": "The great dividing line between success and failure can be expressed in five words: “I did not have time.”"
     , "by": "Franklin Field"
    },
    {
        "id": "1371",   "category": "Success" , "body": "The higher goal a person pursues, the quicker his ability develops, and the more beneficial he will become to the society. I believe for sure that this is also a truth."
     , "by": "Maksim Gorky"
    },
    {
        "id": "1372",   "category": "Success" , "body": "The impossible is often the untried."
     , "by": "Jim Goodwin"
    },
    {
        "id": "1373",   "category": "Success" , "body": "The most difficult thing is the decision to act; the rest is merely tenacity."
     , "by": "Amelia Earhart"
    },
    {
        "id": "1374",   "category": "Success" , "body": "The most effective way to do it is to do it."
     , "by": "Amelia Earhart"
    },
    {
        "id": "1375",   "category": "Success" , "body": "The most important question to ask is, what am I becoming?"
     , "by": "Jim Rohn"
    },
    {
        "id": "1376",   "category": "Success" , "body": "The time for action is now It’s never too late to do something."
     , "by": "Carl Sandburg"
    },
    {
        "id": "1377",   "category": "Success" , "body": "The very essence of leadership is that you have to have a vision. It’s got to be a vision you articulate clearly and forcefully on every occasion. You can’t blow an uncertain trumpet."
     , "by": "Reverend Theodore Hesburgh"
    },
    {
        "id": "1378",   "category": "Success" , "body": "There are no shortcuts to any place worth going."
     , "by": "Beverly Sills"
    },
    {
        "id": "1379",   "category": "Success" , "body": "Though no one can go back and make a brand new start, anyone can start from now and make a brand new ending."
     , "by": "Attributed to Carl Bard"
    },
    {
        "id": "1380",   "category": "Success" , "body": "Time is a great teacher, but unfortunately it kills all its pupils."
     , "by": "Hector Louis Berlioz"
    },
    {
        "id": "1381",   "category": "Success" , "body": "Time lost is never found again."
     , "by": "Benjamin Franklin"
    },
    {
        "id": "1382",   "category": "Success" , "body": "To do great things is difficult; but to command great things is more difficult."
     , "by": "Friedrich Nietzsche"
    },
    {
        "id": "1383",   "category": "Success" , "body": "We must believe that we are gifted for something, and that this thing at whatever cost, must be attained."
     , "by": "Marie Curie"
    },
    {
        "id": "1384",   "category": "Success" , "body": "What you get by achieving your goals is not as important as what you become by achieving your goals."
     , "by": "Zig Ziglar"
    },
    {
        "id": "1385",   "category": "Success" , "body": "While we are postponing, life speeds by."
     , "by": "Seneca"
    },
    {
        "id": "1386",   "category": "Success" , "body": "You can’t change the past, but you can ruin the present by worrying about the future."
     , "by": "Unknown"
    },
    {
        "id": "1387",   "category": "Success" , "body": "You cannot do a kindness too soon, for you never know how soon it will be too late."
     , "by": "Ralph Waldo Emerson"
    },
    {
        "id": "1388",   "category": "Success" , "body": "Every day of your working life is part of an interview for a job you don't even know you're going for yet."
     , "by": "Adam Darowski"
    },
    {
        "id": "1389",   "category": "Success" , "body": "Risk more than others think is safe. Care more than others think is wise. Dream more than others think is practical. Expect more than others think is possible."
     , "by": "Claude Bissell"
    },
    {
        "id": "1390",   "category": "Success" , "body": "You never know when a moment and a few sincere words can have an impact on a life."
     , "by": "Zig Ziglar"
    },
    {
        "id": "1391",   "category": "Success" , "body": "A hundred years from now it will not matter what my bank account was, the sort of house I lived in, or the kind of car I drove…but the world may be different because I was important in the life of a child."
     , "by": "Forest Witcraft"
    },
    {
        "id": "1392",   "category": "Success" , "body": "Establishing goals is all right if you don't let them deprive you of interesting detours."
     , "by": "Doug Larson"
    },
    {
        "id": "1393",   "category": "Success" , "body": "Great leaders are almost always great simplifiers, who can cut through argument, debate, and doubt to offer a solution everybody can understand."
     , "by": "General Colin Powell"
    },
    {
        "id": "1394",   "category": "Success" , "body": "He does not seem to me to be a free man who does not sometimes do nothing."
     , "by": "Cicero"
    },
    {
        "id": "1395",   "category": "Success" , "body": "He lives long that lives well; and time misspent is not lived but lost."
     , "by": "Thomas Fuller"
    },
    {
        "id": "1396",   "category": "Success" , "body": "I love deadlines. I like the whooshing sound they make as they fly by."
     , "by": "Douglas Adams"
    },
    {
        "id": "1397",   "category": "Success" , "body": "If it weren’t for the last minute a lot of things wouldn’t get done."
     , "by": "Michael S. Traylor"
    },
    {
        "id": "1398",   "category": "Success" , "body": "If you want to make good use of your time, you’ve got to know what’s most important and then give it all you’ve got."
     , "by": "Lee Iacocca"
    },
    {
        "id": "1399",   "category": "Success" , "body": "If you would hit the mark, you must aim a little above it; every arrow that flies feels the attraction of earth."
     , "by": "Henry Wadsworth Longfellow"
    },
    {
        "id": "1400",   "category": "Success" , "body": "If you're bored with life ––you don't get up every morning with a burning desire to do things ––you don't have enough goals."
     , "by": "Lou Holtz"
    },
    {
        "id": "1401",   "category": "Success" , "body": "It is a most mortifying reflection for a man to consider what he has done, compared to what he might have done."
     , "by": "Samuel Johnson"
    },
    {
        "id": "1402",   "category": "Success" , "body": "It’s how we spend our time here and now, that really matters. If you are fed up with the way you have come to interact with time, change it."
     , "by": "Marcia Wieder"
    },
    {
        "id": "1403",   "category": "Success" , "body": "Leaders think and talk about the solutions. Followers think and talk about the problems."
     , "by": "Brian Tracy"
    },
    {
        "id": "1404",   "category": "Success" , "body": "Leadership and learning are indispensable to each other."
     , "by": "John F. Kennedy"
    },
    {
        "id": "1405",   "category": "Success" , "body": "Leadership is solving problems. The day soldiers stop bringing you their problems is the day you have stopped leading them. They have either lost confidence that you can help or concluded you do not care. Either case is a failure of leadership."
     , "by": "General Colin Powell"
    },
    {
        "id": "1406",   "category": "Success" , "body": "Lost wealth may be replaced by industry, lost knowledge by study, lost health by temperance or medicine, but lost time is gone forever."
     , "by": "Samuel Smiles"
    },
    {
        "id": "1407",   "category": "Success" , "body": "Management is about arranging and telling. Leadership is about nurturing and enhancing."
     , "by": "Tom Peters"
    },
    {
        "id": "1408",   "category": "Success" , "body": "Only those who will risk going too far can possibly find out how far one can go."
     , "by": "T.S. Eliot"
    },
    {
        "id": "1409",   "category": "Success" , "body": "Outstanding leaders go out of their way to boost the self–esteem of their personnel. If people believe in themselves, it’s amazing what they can accomplish."
     , "by": "Sam Walton"
    },
    {
        "id": "1410",   "category": "Success" , "body": "Perhaps when we find ourselves wanting everything, it is because we are dangerously close to wanting nothing."
     , "by": "Sylvia Plath"
    },
    {
        "id": "1411",   "category": "Success" , "body": "Some of the world's greatest feats were accomplished by people not smart enough to know they were impossible."
     , "by": "Doug Larson"
    },
    {
        "id": "1412",   "category": "Success" , "body": "Take a rest. A field that has rested yields a beautiful crop."
     , "by": "Ovid"
    },
    {
        "id": "1413",   "category": "Success" , "body": "Take the first step in faith We don't need to see the whole staircase; we just need to take the first step."
     , "by": "Martin Luther King Jr"
    },
    {
        "id": "1414",   "category": "Success" , "body": "Teach thy tongue to say, “I do not know,” and thou shalt progress."
     , "by": "Maimonides"
    },
    {
        "id": "1415",   "category": "Success" , "body": "The best angle from which to approach any problem is the try–angle."
     , "by": "Author Unknown"
    },
    {
        "id": "1416",   "category": "Success" , "body": "The best executive is the one who has sense enough to pick good men to do what he wants done, and self–restraint enough to keep from meddling with them while they do it."
     , "by": "Theodore Roosevelt"
    },
    {
        "id": "1417",   "category": "Success" , "body": "The growth and development of people is the highest calling of leadership."
     , "by": "Harvey Firestone"
    },
    {
        "id": "1418",   "category": "Success" , "body": "The important thing in life is to have a great aim, and the determination to attain it."
     , "by": "Johann Wolfgang von Goethe"
    },
    {
        "id": "1419",   "category": "Success" , "body": "The key to successful leadership today is influence, not authority."
     , "by": "Kenneth Blanchard"
    },
    {
        "id": "1420",   "category": "Success" , "body": "The leader has to be practical and a realist yet must talk the language of the visionary and the idealist."
     , "by": "Eric Hoffer"
    },
    {
        "id": "1421",   "category": "Success" , "body": "The nation will find it very hard to look up to the leaders who are keeping their ears to the ground."
     , "by": "Sir Winston Churchill"
    },
    {
        "id": "1422",   "category": "Success" , "body": "The only person you are destined to become is the person you decide to be."
     , "by": "Ralph Waldo Emerson"
    },
    {
        "id": "1423",   "category": "Success" , "body": "The real pleasure of one's life is the devotion to a great objective of one's consideration."
     , "by": "George Bernard Shaw"
    },
    {
        "id": "1424",   "category": "Success" , "body": "The rung of a ladder was never meant to rest upon, but only to hold a man's foot long enough to enable him to put the other somewhat higher."
     , "by": "Thomas Henry Huxley"
    },
    {
        "id": "1425",   "category": "Success" , "body": "Every no gets me closer to a yes."
     , "by": "Mark Cuban"
    },
    {
        "id": "1426",   "category": "Success" , "body": "The time you enjoy wasting is not wasted time."
     , "by": "Bertrand Russell"
    },
    {
        "id": "1427",   "category": "Success" , "body": "The world is moving so fast these days that the man who says it can't be done is generally interrupted by someone doing it."
     , "by": "Elbert Hubbard"
    },
    {
        "id": "1428",   "category": "Success" , "body": "The worst days of those who enjoy what they do are better than the best days of those who don’t."
     , "by": "Jim Rohn"
    },
    {
        "id": "1429",   "category": "Success" , "body": "The young do not know enough to be prudent, and therefore they attempt the impossible –and achieve it, generation after generation."
     , "by": "Pearl S. Buck"
    },
    {
        "id": "1430",   "category": "Success" , "body": "This time, like all times, is a very good one, if we but know what to do with it."
     , "by": "Ralph Waldo Emerson"
    },
    {
        "id": "1431",   "category": "Success" , "body": "Those who make the worse use of their time are the first to complain of its shortness."
     , "by": "Jean De La Bruyere"
    },
    {
        "id": "1432",   "category": "Success" , "body": "Time is a great healer, but a poor beautician."
     , "by": "Lucille Harper"
    },
    {
        "id": "1433",   "category": "Success" , "body": "Time is really the only capital that any human being has, and the only thing he can’t afford to lose."
     , "by": "Thomas Edison"
    },
    {
        "id": "1434",   "category": "Success" , "body": "Time is the wisest counselor of all."
     , "by": "Pericles"
    },
    {
        "id": "1435",   "category": "Success" , "body": "Time will take your money, but money won't buy time."
     , "by": "James Taylor"
    },
    {
        "id": "1436",   "category": "Success" , "body": "To think too long about doing a thing often becomes its undoing."
     , "by": "Eva Young"
    },
    {
        "id": "1437",   "category": "Success" , "body": "To do two things at once is to do neither."
     , "by": "Publius Syrus"
    },
    {
        "id": "1438",   "category": "Success" , "body": "True leadership lies in guiding others to success. In ensuring that everyone is performing at their best, doing the work they are pledged to do and doing it well."
     , "by": "Bill Owens"
    },
    {
        "id": "1439",   "category": "Success" , "body": "What is not started today is never finished tomorrow."
     , "by": "Johann Wolfgang von Goethe"
    },
    {
        "id": "1440",   "category": "Success" , "body": "What may be done at any time will be done at no time."
     , "by": "Scottish Proverb"
    },
    {
        "id": "1441",   "category": "Success" , "body": "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it."
     , "by": "Henry Ford"
    },
    {
        "id": "1442",   "category": "Success" , "body": "When I give a minister an order I leave it to him to find the means to carry it out."
     , "by": "Napoleon Bonaparte"
    },
    {
        "id": "1443",   "category": "Success" , "body": "Work expands so as to fill the time available for its completion."
     , "by": "Cyril Parkinson"
    },
    {
        "id": "1444",   "category": "Success" , "body": "You gain strength, courage and confidence by every experience in which you really stop to look fear in the face. You must do the thing you think you cannot do."
     , "by": "Eleanor Roosevelt"
    },
    {
        "id": "1445",   "category": "Success" , "body": "You may delay, but time will not."
     , "by": "Benjamin Franklin"
    },
    {
        "id": "1446",   "category": "Success" , "body": "You must have long–range goals to keep you from being frustrated by short–range failures."
     , "by": "Charles C. Noble"
    },
    {
        "id": "1447",   "category": "Success" , "body": "Your goals are the road maps that guide you and show you what is possible for your life."
     , "by": "Les Brown"
    },
    {
        "id": "1448",   "category": "Success" , "body": "You cannot change your destination overnight, but you can change your direction overnight."
     , "by": "Jim Rohn"
    },
    {
        "id": "1449",   "category": "Success" , "body": "If you obey all the rules, you miss all the fun."
     , "by": "Katharine Hepburn"
    },
    {
        "id": "1450", "category": "Success", "body": "  The best way to succeed is to double your failure rate."
     , "by": "Thomas Watson"
    },
    {
        "id": "1451",   "category": "Success" , "body": "This to shall pass."
     , "by": "Proverb"
    },
    {
        "id": "1452",   "category": "Success" , "body": "After climbing a great hill, one only finds that there are many more hills to climb."
     , "by": "Nelson Mandela"
    },
    {
        "id": "1453",   "category": "Success" , "body": "Winning isn’t everything, but wanting to win is."
     , "by": "Vince Lombardi"
    },
    {
        "id": "1454",   "category": "Success" , "body": "You can’t cross the sea merely by standing and staring at the water."
     , "by": "Rabindranath Tagore"
    },
    {
        "id": "1455",   "category": "Success" , "body": "You don’t lead by hitting people over the head–that’s assault, not leadership."
     , "by": "Dwight Eisenhower"
    },
    {
        "id": "1456",   "category": "Success" , "body": "You don’t lead by pointing and telling people some place to go. You lead by going to that place and making a case."
     , "by": "Ken Kesey"
    },
    {
        "id": "1457",   "category": "Success" , "body": "A competent leader can get efficient service from poor troops, while on the contrary an incapable leader can demoralize the best of troops."
     , "by": "John Pershing"
    },
    {
        "id": "1458",   "category": "Success" , "body": "A ruler should be slow to punish and swift to reward."
     , "by": "Ovid"
    },
    {
        "id": "1459",   "category": "Success" , "body": "A straight path never leads anywhere except to the objective."
     , "by": "Andre Gide"
    },
    {
        "id": "1460",   "category": "Success" , "body": "A wise person does at once what a fool does at last. Both do the same thing; only at different times."
     , "by": "Baltasar Gracián"
    },
    {
        "id": "1461",   "category": "Success" , "body": "Work like there is someone working 24 hours a day to take it away from you."
     , "by": "Mark Cuban"
    },
    {
        "id": "1462",   "category": "Success" , "body": "The surest way to be late is to have plenty of time."
     , "by": "Leo Kennedy"
    },
    {
        "id": "1463",   "category": "Success" , "body": "The space you occupy and the authority you exercise may be measured with mathematical exactness by the service you render."
     , "by": "Napoleon Hill"
    },
    {
        "id": "1464",   "category": "Success" , "body": "If you only knock long enough and loud enough at the gate, you are sure to wake somebody up."
     , "by": "Henry Longfellow"
    },
    {
        "id": "1465",   "category": "Success" , "body": "By perseverance the snail reached the ark."
     , "by": "Charles Spurgeon"   
    },
    {
        "id":"1466", "category": "Inspirational", "body": "There are many truths of which the full meaning cannot be realized until personal experience has brought it home..", "by":"John Stuart Mill"
    },
    {
        "id":"1467", "category": "Inspirational", "body": "There are two cardinal sins from which all others spring: Impatience and Laziness..", "by":"Franz Kafka"
    },
    {
        "id":"1468", "category": "Inspirational", "body": "Better keep yourself clean and bright; you are the window through which you must see the world.", "by":" George Bernard Shaw"
    },
    {
        "id":"1469", "category": "Inspirational", "body": "It is not God’s will merely that we should be happy, but that we should make ourselves happy..", "by":"Immanuel Kant"
    },
    {
        "id":"1470", "category": "Inspirational", "body": "One's dignity may be assaulted, vandalized and cruelly mocked, but cannot be taken away unless it is surrendered.", "by":" Michael J. Fox"
    },
    {
        "id":"1471", "category": "Inspirational", "body": "Not only strike when the iron is hot, but make it hot by striking..", "by":"Oliver Cromwell"
    },
    {
        "id":"1472", "category": "Inspirational", "body": "If there are things you don’t like in the world you grew up in, make your own life different..", "by":"Dave Thomas"
    },
    {
        "id":"1473", "category": "Inspirational", "body": "Nothing is a greater impediment to being on good terms with others than being ill at ease with yourself.", "by":" Honore De Balzac"
    },
    {
        "id":"1474", "category": "Inspirational", "body": "Great minds have purposes, others have wishes..", "by":"Washington Irving"
    },
    {
        "id":"1475", "category": "Inspirational", "body": "Even the knowledge of my own fallibility cannot keep me from making mistakes. Only when I fall do I get up again.", "by":" Vincent Van Gogh"
    },
    {
        "id":"1476", "category": "Inspirational", "body": "Self-esteem is the reputation we acquire within ourselves.", "by":" Nathaniel Branden"
    },
    {
        "id":"1477", "category": "Inspirational", "body": "Creativity is inventing, experimenting, growing, taking risks, breaking rules, making mistakes, and having fun.", "by":" Mary Lou Cook"
    },
    {
        "id":"1478", "category": "Inspirational", "body": "Difficulties are meant to rouse, not discourage. The human spirit is to grow strong by conflict.", "by":" William Ellery Channing"
    },
    {
        "id":"1479", "category": "Inspirational", "body": "I’ll tell you what leadership is. It’s persuasion and conciliation, education and patience..", "by":"Dwight Eisenhower"
    },
    {
        "id":"1480", "category": "Inspirational", "body": "Learning is not attained by chance; it must be sought for with ardor and attended to with diligence..", "by":"Abigail Adams"
    },
    {
        "id":"1481", "category": "Inspirational", "body": "Leaders are more concerned with winning than with not losing. They are more concerned with what’s right than with who’s right..", "by":"Brian Tracy"
    },
    
    {
        "id":"1482", "category": "Inspirational", "body": "Seeing much, suffering much and studying much are the three pillars of learning. –Benjamin Disraeli"
    },
    {
        "id":"1483", "category": "Inspirational", "body": "To write something, you have to risk making a fool of yourself.", "by":" Anne Rice"
    },
    {
        "id":"1484", "category": "Inspirational", "body": "I never travel without my diary. One should always have something sensational to read in the train.", "by":" Oscar Wilde"
    },
    {
        "id":"1485", "category": "Inspirational", "body": "What is written without effort is in general read without pleasure.", "by":" Samuel Johnson"
    },
    {
        "id":"1486", "category": "Inspirational", "body": "The future starts today, never tomorrow..", "by":"Barbara Hofmeister"
    },
    {
        "id":"1487", "category": "Inspirational", "body": "Poetry is the journal of the sea animal living on land, wanting to fly in the air." , "by" : "Carl Sandburg"
    },
    {
        "id":"1488", "category": "Inspirational", "body": "It took me fifteen years to discover that I had no talent for writing, but I couldn't give it up because by that time I was too famous.", "by":" Robert Benchley"
    },
    {
        "id":"1489", "category": "Inspirational", "body": "It would be curious to discover who it is to whom one writes in a diary. Possibly to some mysterious personification of one's own identity.", "by":" Beatrice Webb"
    },
    {
        "id":"1490", "category": "Inspirational", "body": "Rowing harder doesn't help if the boat is headed in the wrong direction.", "by":" Kenichi Ohmae"
    },
    {
        "id":"1491", "category": "Inspirational", "body": "You don't become enormously successful without encountering and overcoming a number of extremely challenging problems..", "by":"Mark Victor Hansen"
    },
    {
        "id":"1492", "category": "Inspirational", "body": "The mediocre teacher tells. The good teacher explains. The superior teacher demonstrates. The great teacher inspires.", "by":" William Arthur Ward"
    },
    {
        "id":"1493", "category": "Inspirational", "body": "You gain strength, courage and confidence by every experience in which you really stop to look fear in the face.", "by":" Eleanor Roosevelt"
    },
    {
        "id":"1494", "category": "Inspirational", "body": "The definition of insanity is doing the same thing over and over again and expecting a different result.", "by":" Albert Einstein"
    },
    {
        "id":"1495", "category": "Inspirational", "body": "Freedom consists not in doing what we like, but in having the right to do what we ought..", "by":"Pope Jean Paul II"
    },
    {
        "id":"1496", "category": "Inspirational", "body": "Stupidity is also a gift of God, but one mustn't misuse it. Martin Luther Get a check-up from the neck up", "by": "Mark Victor Hansen"
    },
    {
        "id":"1497", "category": "Inspirational", "body": "The will to win is important but the will to prepare is vital.", "by":"Joe Paterno"
    },
    {
        "id":"1498", "category": "Inspirational", "body": "I have learned to use the word impossible with the greatest caution..", "by":"Werner von Braun"
    },
    {
        "id":"1499", "category": "Inspirational", "body": "He who would accomplish little must sacrifice little; he who would achieve much must sacrifice much… ", "by": "James Allen Growth"
    },
    {
        "id":"1500", "category": "Inspirational", "body": "An education is like a crumbling building that needs constant upkeep with repairs and additions. ","by":"Louis Dudek"
    },
    {
        "id":"1501", "category": "Inspirational", "body": "An excuse is worse and more terrible than a lie, for an excuse is a lie guarded.", "by":" Pope John "
    },
    {
        "id":"1502", "category": "Inspirational", "body": "Discipline is the soul of an army. It makes small numbers formidable, procures success to the weak and esteem to all..", "by":"George Washington"
    },
    {
        "id":"1503", "category": "Inspirational", "body": "A feeling of continuous growth is a wonderful source of motivation and self- confidence.", "by":" Brian Tracy"
    },
  
    {
        "id":"1504", "category": "Inspirational", "body": "Make everything you do tend toward the goal you wish to reach..", "by":"Mr. Wattles"
    },
    {
        "id":"1505", "category": "Inspirational", "body": "If you merely do your work perfectly without reference to getting what you want,"
    },
    {
        "id":"1506", "category": "Inspirational", "body": "Winners learn to relish change with the same enthusiasm and energy that they have resisted it in the past..", "by":"Tom Peters"
    },
    {
        "id":"1507", "category": "Inspirational", "body": "Set too many goals and keep adding more goals. Goals have a tendency to be realized all at once.", "by":" Mark Victor Hansen"
    },
    {
        "id":"1508", "category": "Inspirational", "body": "Work bears a particular mark of man and of humanity, the mark of a person operating within a community of persons..", "by":"Pope John Paul II"
    },
    {
        "id":"1509", "category": "Inspirational", "body": "Be courteous to all, but intimate with few; and let those few be well tried before you give them your confidence..", "by":"George Washington"
    },
    {
        "id":"1510", "category": "Inspirational", "body": "We cannot change anything until we accept it. ","by" :"Carl Jung"
    },
    {
        "id":"1511", "category": "Inspirational", "body": "It takes 20 years to build a reputation and five minutes to lose it..", "by":"Warren Buffett"
    },
    {
        "id":"1512", "category": "Inspirational", "body": "Do you know what happens when you give a procrastinator a good idea? Nothing!.", "by":" Donald Gardner"
    },
    {
        "id":"1513", "category": "Inspirational", "body": "Big Jobs usually go to the men who prove their ability to outgrow small ones.","by": "Ralph Waldo Emerson"
    },
    {
        "id":"1514", "category": "Inspirational", "body": "It takes a lot of courage to show your dreams to someone else.", "by":" Kareem Abdul-Jabar"
    },
    {
        "id":"1515", "category": "Inspirational", "body": "I am careful not to confuse excellence with perfection. Excellence, I can reach for; perfection is God's business.", "by":" Michael J. Fox"
    },
    {
        "id":"1516", "category": "Inspirational", "body": "Journal writing is a voyage to the interior.", "by":" Christina Baldwin"
    },
    {
        "id":"1517", "category": "Inspirational", "body": "Our lives improve only when we take chances - and the first and most difficult risk we can take is to be honest with ourselves.", "by":" Walter Anderson"
    },
    {
        "id":"1518", "category": "Inspirational", "body": "Leaders don't create followers. They create more leaders..", "by":"Tom Peters"
    },
    {
        "id":"1519", "category": "Inspirational", "body": "The glad hand is all right in sunshine, but it’s the helping hand on a dark day that folks remember to the end of time..", "by":"Amadeo P. Giannini"
    },
    {
        "id":"1520", "category": "Inspirational", "body": "Just trust yourself, then you will know how to live.", "by":" Johann Wolfgang"
    },
    {
        "id":"1521", "category": "Inspirational", "body": "Hard work spotlights the character of people: some turn up their sleeves, some turn up their noses, and some don't turn up at all.", "by":" Sam Ewing"
    },
    {
        "id":"1522", "category": "Inspirational", "body": "Anyone who has never made a mistake has never tried anything new.", "by":" Albert Einstein"
    },
    {
        "id":"1523", "category": "Inspirational", "body": "The person who removes a mountain begins by carrying away small stones..", "by":"Anonymous"
    },
    {
        "id":"1524", "category": "Inspirational", "body": "Do not fear to be eccentric in opinion, for every opinion now accepted was once eccentric.", "by":" Bertrand Russell"
    },
    {
        "id":"1525", "category": "Inspirational", "body": "The future belongs to those who believe in the beauty of their dreams.", "by":"Eleanor Roosevelt"
    },
    {
        "id":"1526", "category": "Inspirational", "body": "Life isn't about finding yourself. Life is about creating yourself.", "by":"George Bernard Shaw"
    },
    {
        "id":"1527", "category": "Inspirational", "body": "It is never too late to become what you might have been.", "by":" George Eliot"
    },
    {
        "id":"1528", "category": "Inspirational", "body": "And the day came when the risk it took to remain tight inside the bud was more painful than the risk it took to blossom.", "by":" Anais Nin"
    },
    {
        "id":"1529", "category": "Inspirational", "body": "There is only one success--to be able to spend your life in your own way.", "by":" Christopher Morley"
    },
    
    {
        "id":"1530", "category": "Inspirational", "body": "Do you want to be safe and good, or do you want to take a chance and be great","by": "Jimmy Johnson"
    },
    {
        "id":"1531", "category": "Inspirational", "body": "It isn't what the book costs; it's what it will cost if you don't read it..", "by":"Jim Rohn"
    },
    {
        "id":"1532", "category": "Inspirational", "body": "If your only prayer that you ever say is, Thank-you that will be enough.", "by":"Meister Ekhart"
    },
    {
        "id":"1533", "category": "Inspirational", "body": "Whatever you can do or dream you can; Begin it. Boldness has genius, power and magic in it. Begin it … Now..", "by":"J.W. Goethe"
    },
    {
        "id":"1534", "category": "Inspirational", "body": "Many of life's failures are people who had not realized how close they were to success when they gave up.", "by":" Thomas Edison"
    },
    {
        "id":"1535", "category": "Inspirational", "body": "Goals are dreams with deadlines..", "by":"Diana Scharf Hunt"
    },
    
    {
        "id":"1536", "category": "Inspirational", "body": "Never doubt that a small group of thoughtful committed citizens can change the world; indeed it's the only thing that ever has.", "by":" Margaret Mead"
    },
    {
        "id":"1537", "category": "Inspirational", "body": "Determine that the thing can and shall be done, and then we shall find the way.", "by":" Abraham Lincoln"
    },
    {
        "id":"1538", "category": "Inspirational", "body": "There is only one thing more painful than learning from experience and that is; not learning from experience.", "by":" Archibald McLeish"
    },
    {
        "id":"1539", "category": "Inspirational", "body": "I have always been driven to buck the system, to innovate, to take things beyond where they've been.", "by":"Sam Walton"
    },
    {
        "id":"1540", "category": "Inspirational", "body": "If you're NOT a risk taker, you should get the hell out of business.", "by":" Ray Kroc"
    },
    {
        "id":"1541", "category": "Inspirational", "body": "There are two ways to get to the top of an oak tree. One way is to sit on an acorn and wait; the other way is to climb it.", "by":" Kemmons Wilson"
    },
    {
        "id":"1542", "category": "Inspirational", "body": "Sometimes its heaven, sometimes its hell- sometimes I don't even know. Sometimes I take it as far as I can and sometimes I don't even go.", "by":" Willie Nelson"
    },
    {
        "id":"1543", "category": "Inspirational", "body": "A man who carries a cat by the tail learns something he can learn in no other way..", "by":"Unknown"
    },
    {
        "id":"1544", "category": "Inspirational", "body": "Courage is resistance to fear, mastery of fear - not absence of fear.", "by":" Mark Twain"
    },
    
    {
        "id":"1545", "category": "Inspirational", "body": "The most wasted of all days is one without laughter.", "by":" E.E. Cummings"
    },
    {
        "id":"1546", "category": "Inspirational", "body": "Everything should be made as simple as possible, but not simpler.", "by":" Albert Einstein"
    },
    {
        "id":"1547", "category": "Inspirational", "body": "God will not have His works made manifest by cowards.", "by":" Ralph Waldo Emerson"
    },
    {
        "id":"1548", "category": "Inspirational", "body": "By thought, the thing you want is brought to you; by action you receive it.", "by":" Wallace D. Wattles"
    },
    {
        "id":"1549", "category": "Inspirational", "body": "Life is a lively process of becoming.", "by":" Douglas MacArthur"
    },
    {
        "id":"1550", "category": "Inspirational", "body": "There are two primary choices in life: to accept conditions as they exist, or accept the responsibility for changing them.", "by":" Denis Waitley"
    },
    {
        "id":"1551", "category": "Inspirational", "body": "Drive your business! Let not that drive thee.", "by":" Benjamin Franklin"
    },
    
    {
        "id":"1552", "category": "Inspirational", "body": "It's a kind of spiritual snobbery that makes people think they can be happy without money.", "by":" Albert Camus"
    },
    {
        "id":"1553", "category": "Inspirational", "body": "All speech is vain and empty unless it be accompanied by action.", "by":" Demosthenes"
    },
    {
        "id":"1554", "category": "Inspirational", "body": "I can't say I was ever lost, but I was bewildered once for three days.", "by":" Daniel Boone"
    },
    {
        "id":"1555", "category": "Inspirational", "body": "Two of the greatest gifts we can give our children are roots and wings.", "by":" Hodding Carter"
    },
    {
        "id":"1556", "category": "Inspirational", "body": "A man may be born, but in order to be born he must first die, and in order to die he must first awake.", "by":" Carl Sandburg"
    },
    {
        "id":"1557", "category": "Inspirational", "body": "We often take for granted the very things that most deserve our gratitude."
    },
    {
        "id":"1558", "category": "Inspirational", "body": "I am not young enough to know everything.", "by":" Oscar Wilde"
    },
    {
        "id":"1559", "category": "Inspirational", "body": "One of the great joys of youth is the privilege of not knowing any better.", "by":" Michael Morton"
    },

    {
        "id":"1560", "category": "Inspirational", "body": "In three words I can sum up everything I've learned about life: it goes on.", "by":" Robert Frost"
    },
    {
        "id":"1561", "category": "Inspirational", "body": "Don’t try to be great at all things. Pick a few things to be good at and be the best you can.", "by":" Liz Ashe"
    },
    {
        "id":"1562", "category": "Inspirational", "body": "A clear vision, backed by definite plans, gives you a tremendous feeling of confidence and personal power..", "by":"Brian Tracy"
    },
    {
        "id":"1563", "category": "Inspirational", "body": "Don't limit investing to the financial world. Invest something of yourself, and you will be richly rewarded..", "by":"Charles Schwab"
    },
    {
        "id":"1564", "category": "Inspirational", "body": "There are three ingredients in the good life: learning, earning and yearning..", "by":"Christopher Morley"
    },
    {
        "id":"1565", "category": "Inspirational", "body": "Listening to the inner voice — trusting the inner voice — is one of the most important lessons of leadership. ","by": "Warren Bennis"
    },
    {
        "id":"1566", "category": "Inspirational", "body": "Opportunity is missed by most people because it is dressed in overalls and looks like work..", "by":"Thomas A. Edison"
    },
    {
        "id":"1567", "category": "Inspirational", "body": "The bitterest tears shed over graves are for words left unsaid and deeds left undone..", "by":"Harriet Beecher Stowe"
    },
    {
        "id":"1568", "category": "Inspirational", "body": "Most misfortunes are the results of misused time..", "by":"Napoleon Hill"
    },
   
    {
        "id":"1569", "category": "Inspirational", "body": "When I look into the future, it's so bright it burns my eyes..", "by":"Oprah Winfrey"
    },
    {
        "id": "1570", "category":"Motivational", "body": "Intelligence without ambition is like a bird without wings.", "by": "C. Archie Danielson"
    },
   
    {
        "id": "1571", "category":"Motivational", "body": "Some things have to be believed to be seen.", "by": "Ralph Hodgson"
    },
    {
        "id": "1572", "category":"Motivational", "body": "Wealth is the product of man's ability to think.", "by": "Ayn Rand"
    },
    {
        "id": "1573", "category":"Motivational", "body": "We must never be afraid to go too far, for success lies just beyond.", "by": "Marcel Proust"
    },
    
    {
        "id": "1574", "category":"Motivational", "body": "High expectations are the key to everything.", "by": "Sam Walton"
    },
   
    {
        "id": "1575", "category":"Motivational", "body":  "It is what you learn after you know it all that counts.", "by": "John Wooden"
    },
   
   
    {
        "id": "1576", "category":"Motivational", "body":  "It is no sin to attempt and fail. The only sin is to not make the attempt.", "by": "Suellen Fried"
    },
    {
        "id": "1577", "category":"Motivational", "body":  "Dreams are the reality of tomorrow.", "by": "Dean Marshall"
    },
    {
        "id": "1578", "category":"Motivational", "body":  "If anything is worth trying at all, it's worth trying at least ten times. -", "by": "Art Linkletter"
    },
  
    {
        "id": "1579", "category":"Motivational", "body":  "The atmosphere of expectancy is the breeding ground for miracles.", "by": "Rodney L. Parsley"
    },
    {
        "id": "1580", "category":"Motivational", "body":  "Problems are only opportunities in work clothes.", "by": "Henry J. Kaiser"
    },
    {
        "id": "1581", "category":"Motivational", "body":  "The best way to escape from a problem is to solve it.", "by": "Anonymous"
    },
    
   
    {
        "id": "1582", "category":"Motivational", "body":  "You will become as small as your controlling desire; as great as your dominant aspiration.", "by": "James Allen"
    },
    
    {
        "id": "1583", "category":"Motivational", "body":  "Procrastination is opportunities natural assassin.", "by": "Victor Kiam"
    },
    {
        "id": "1584", "category":"Motivational", "body":  "Nothing is particularly hard if you divide it into small jobs.", "by": "Henry Ford"
    },
   
    {
        "id": "1585", "category":"Motivational", "body":  "You can't build a reputation on what you are going to do.", "by": "Henry Ford"
    },
    {
        "id": "1586", "category":"Motivational", "body":  "When I've heard all I need to make a decision, I don't take a vote. I make a decision.", "by": "Ronald Reagan"
    },
    {
        "id": "1587", "category":"Motivational", "body":  "You can't have a better tomorrow if you are thinking about yesterday all the time.", "by": "Charles F. Kettering"
    },
   
    {
        "id": "1588", "category":"Motivational", "body":  "Never complain about what you permit.", "by": "Mike Murdock"
    },
    {
        "id": "1589", "category":"Motivational", "body":  "Take heed: you do not find what you do not seek.", "by": "Proverb"
    },
    {
        "id": "1590", "category":"Motivational", "body":  "Our imagination is the only limit to what we can hope to have in the future." ,"by": "Charles Kettering"
    },
    
   
    {
        "id": "1591", "category":"Motivational", "body":  "Keys to success: Research your ideas, plan for success, expect success, and just do it.", "by": "John S. Hinds"
    },
    {
        "id": "1592", "category":"Motivational", "body":  "I maintained my edge by always being a student; you will always have something new to learn.", "by": "Jackie Joyner Kersee"
    },
    {
        "id": "1593", "category":"Motivational", "body":  "It is not the mountain we conquer, but ourselves.", "by": "Sir Edmund Hillary"
    },
    {
        "id": "1594", "category":"Motivational", "body":  "If what you did yesturday seems big, you haven't done anything today.", "by": "Lou Holtz"
    },
    {
        "id": "1595", "category":"Motivational", "body":  "Life is change; growth is optional. Choose wisely.", "by": "Karen Kaiser Clark"
    },
    
    {
        "id": "1596", "category":"Motivational", "body":  "You don't just stumble into the future you create your own future.", "by": "Roger Smith"
    },
    {
        "id": "1597", "category":"Motivational", "body":  "This one step, choosing a goal and sticking to it, changes everything.", "by": "Scott reed"
    },
    {
        "id": "1598", "category":"Motivational", "body":  "Failure? I never encountered it. All I ever met were temporary setbacks.", "by": "Dottie Walters"
    },
    {
        "id": "1599", "category":"Motivational", "body":  "Great minds have purpose, while others just have wishes.", "by": "Washington Irving"
    },
   
    {
         "id": "1600", "category":"Motivational", "body": "There are many truths of which the full meaning cannot be realized until personal experience has brought it home..", "by":"John Stuart Mill"
    },
    
    {
         "id": "1601", "category":"Motivational", "body":  "Our life is what it is as a result of how we think.", "by": "George DeVack"
    },
    {
         "id": "1602", "category":"Motivational", "body":  "We are what and where we are because we have first imagined it.", "by": "Donald Curtis"
    },
    {
         "id": "1603", "category":"Motivational", "body":  "Even a mistake may turn out to be the one thing necessary to a worthwhile achievement.", "by": "Henry Ford"
    },
    {
         "id": "1604", "category":"Motivational", "body":  "Action, to be effective, must be directed to clearly conceived ends.", "by": "Jawaharlal Nehru"
    },
    {
         "id": "1605", "category":"Motivational", "body":  "Our imagination is the only limit to what we can hope to have in the future.", "by": "Charles Kettering"
    },
    {
         "id": "1606", "category":"Motivational", "body":  "He who is afraid of asking is ashamed of learning.", "by": "Danish Proverb"
    },
    {
         "id": "1607", "category":"Motivational", "body":  "Obstacles are what appear when you take your eyes off your dreams.", "by": "George DeVack"
    },
    
    {
         "id": "1608", "category":"Motivational", "body":  "If we always look back, we lose sight of what's ahead.", "by": "Justin Sims"
    },
    {
         "id": "1609", "category":"Motivational", "body":  "Success based on anything but internal fulfillment is bound to be empty.", "by": "Dr MArtha Friedman"
    },
    {
         "id": "1610", "category":"Motivational", "body":  "Do not wait for ideal circumstances, nor for the best opportunities; they will never come.", "by": "Janet Erskine Stuart"
    },
    {
         "id": "1611", "category":"Motivational", "body":  "Triumph often is nearest when defeat seems inescapable.", "by": "B.C. Forbes"
    },
    {
         "id": "1612", "category":"Motivational", "body":  "An error gracefully acknowledged is a victory won.", "by": "Caroline L. Gascoigne"
    },
    {
         "id": "1613", "category":"Motivational", "body":  "The courage to be is the courage to accept oneself, in spite of being unacceptable.", "by": "Paul Tillisch"
    },
    {
         "id": "1614", "category":"Motivational", "body":  "Confidence imparts a wonderful inspiration to its possessor.", "by": "John Milton"
    },
    
    {
         "id": "1615", "category":"Motivational", "body":  "The universe is full of magical things, patiently waiting for our wits to grow sharper.", "by": "Eden Phillpotts"
    },
    {
         "id": "1616", "category":"Motivational", "body":  "The death of fear is in doing what you fear to do.", "by": "Sequichie Comingdeer"
    },
    {
         "id": "1617", "category":"Motivational", "body":  "When we place blame, we give away our power.", "by": "Greg Anderson"
    },
    {
         "id": "1618", "category":"Motivational", "body":  "What really matters is what you do with what you have.", "by": "Shirley Lord"
    },
    
    {
         "id": "1619", "category":"Motivational", "body":  "Happiness does not depend on outward things, but on the way we see them.", "by": "Leo tolstoy"
    },
    {
         "id": "1620", "category":"Motivational", "body":  "Your self-beliefs either support or undermine you.", "by": "Marsha Sinetar"
    },
    {
         "id": "1621", "category":"Motivational", "body":  "The greatest mistake you can make in life is to be continually fearing you will make one.", "by": "Elbert Hubbard"
    },
    
    {
         "id": "1622", "category":"Motivational", "body":  "While we may not be able to control all that happens to us, we can control what happens inside us.", "by": "Benjamin Franklin"
    },
    {
         "id": "1623", "category":"Motivational", "body":  "Draw from others the lesson that may profit yourself.", "by": "Terrance"
    },
    {
         "id": "1624", "category":"Motivational", "body":  "Living a life of integrity is one of the greatest missions we can undertake.", "by": "Greg Anderson"
    },
    {
         "id": "1625", "category":"Motivational", "body":  "Life does not happen to us, it happens from us.", "by": "Mike Wickett"
    },
    {
         "id": "1626", "category":"Motivational", "body":  "What concerns me is not the way things are, but rather the way people think things are.", "by": "Epicetus"
    },
    {
         "id": "1627", "category":"Motivational", "body":  "No one can make you feel inferior without your consent.", "by": "Eleanor Roosevelt"
    },
    {
         "id": "1628", "category":"Motivational", "body":  "Where there is no vision, the people perish.", "by": "Proverbs 29:18"
    },
    {
         "id": "1629", "category":"Motivational", "body":  "They are able because they think they are able.", "by": "Virgil"
    },
    {
         "id": "1630", "category":"Motivational", "body":  "Whatever we leave to God, God does and blesses us.", "by": "Henry David Thoreau"
    },
    {
         "id": "1631", "category":"Motivational", "body":  "Therefore do not worry about tomorrow, for tomorrow will worry about its own things. Sufficient for the day is its own trouble.", "by": "Matthew 6: 34"
    },
    {
         "id": "1632", "category":"Motivational", "body":  "Growth and change are never easy...If it were easy, you would have done it long ago.", "by": "Lawrence LeShan"
    },
    {
         "id": "1633", "category":"Motivational", "body":  "Repeat anything long enough and it will start to become you.", "by": "Tom Hopkins"
    },
    
   
    {
         "id": "1634", "category":"Motivational", "body":  "Great minds have purpose, others have wishes.", "by": "Washington Irving"
    },
    {
         "id": "1635", "category":"Motivational", "body":  "There is no security on this earth; there is only opportunity.", "by": "Douglas MacArthur"
    },
    
    
    {
         "id": "1636", "category":"Motivational", "body":  "The first step towards success in any occupation is to become interested in it.", "by": "Sir William Osler"
    },
    {
         "id": "1637", "category":"Motivational", "body":  "Ultimately we know deeply that the other side of every fear is a freedom.", "by": "Marilyn Ferguson"
    },
    {
         "id": "1638", "category":"Motivational", "body":  "Man is a goal-seeking animal. His life only has meaning if he is reaching out and striving for his goals.", "by": "Aristotle"
    },
    
    {
         "id": "1639", "category":"Motivational", "body":  "Human beings can alter their lives by altering their attitudes of mind.", "by": "William James"
    },
   
    
    {
         "id": "1640", "category":"Motivational", "body":  "We cannot always build the future for our youth, but we can build our youth for the future.", "by": "Franklin Delano Roosevelt"
    },
   
    {
         "id": "1641", "category":"Motivational", "body":  "Follow your instincts. That's where true wisdom manifests itself.", "by": "Oprah Winfrey"
    },
    {
         "id": "1642", "category":"Motivational", "body":  "Opportunity does not knock; it presents itself when you beat down the door.","by": "Kyle Chandler"
    },
    {
        "id": "1643", "category": "Inspirational", "body": "Waste not fresh tears over old grieves..", "by":"Euripides"
   },
   
   {
        "id": "1644", "category": "Inspirational", "body": "Don't try to be great at all things. Pick a few things to be good at and be the best you can.", "by":" Liz Ashe"
   },
   {
        "id": "1645", "category": "Inspirational", "body": "The universe is completely balanced and in perfect order. You will always be compensated for everything that you do.", "by":" Brian Tracy"
   },
   {
        "id": "1646", "category": "Inspirational", "body": "It has been my observation that most people get ahead during the time that others waste time.", "by":" Henry Ford"
   },
   {
        "id": "1647", "category": "Inspirational", "body": "Aim above morality. Be not simply good for something..", "by":"Henry David Thoreau"
   },
   {
        "id": "1648", "category": "Inspirational", "body": "There is true courage in the acts of every day living.", "by":" Rick Beneteau"
   },
   {
        "id": "1649", "category": "Inspirational", "body": "The only real limitation on your abilities is the level of your desires. If you want it badly enough, there are no limits on what you can achieve..", "by":"Brian Tracy"
   },
   {
       "id":"1650", "category": "Inspirational", "body": "Rarely taught and infrequently practiced, listening is nonetheless a key to communicating and making others feel special.", "by":" Dr. Tony Alessandra"
   },
   {
        "id": "1651", "category": "Inspirational", "body": "He who would learn to fly one day must first learn to stand and walk and run and climb and dance; one cannot fly into flying..", "by":"Friedrich Nietzsche"
   },
   {
        "id": "1652", "category": "Inspirational", "body": "The act of taking the first step is what separates the winners from the losers..", "by":"Brian Tracy"
   },
   {
        "id": "1653", "category": "Inspirational", "body": "Confidence is contagious. So is lack of confidence..", "by":"Vince Lombardi"
   },
   {
        "id": "1654", "category": "Inspirational", "body": "There are three ingredients in the good life: learning, earning and yearning.", "by":"Christopher Morley"
   },
   {
        "id": "1655", "category": "Inspirational", "body": "You gain strength, courage and confidence by every experience in which you really stop to look fear in the face..", "by":"Eleanor Roosevelt"
   },
   {
        "id": "1656", "category": "Inspirational", "body": "The ultimate measure of a man is not where he stands in moments of comfort, but where he stands at times of challenge and controversy..", "by":"Martin Luther King"
   },
   {
        "id": "1657", "category": "Inspirational", "body": "The right to be heard does not automatically include the right to be taken seriously..", "by":"Hubert Humphrey"
   },
   {
        "id": "1658", "category": "Inspirational", "body": "One's dignity may be assaulted, vandalized and cruelly mocked, but cannot be taken away unless it is surrendered.", "by":" Michael J. Fox"
   },
   {
        "id": "1659", "category": "Inspirational", "body": "Confidence is a habit that can be developed by acting as if you already had the confidence you desire to have..", "by":"Brian Tracy"
   },
   {
        "id": "1660", "category": "Inspirational", "body": "The fault is not in the stars, but in ourselves..", "by":"Shakespeare"
   },
   {
        "id": "1661", "category": "Inspirational", "body": "The act of taking the first step is what separates the winners from the losers..", "by":"Brian Tracy"
   },
   {
        "id": "1662", "category": "Inspirational", "body": "What light is to the eyes, what air is to the lungs, what love is to the heart, liberty is to the soul of man..", "by":"Robert Green Ingersoll"
   },
   {
        "id": "1663", "category": "Inspirational", "body": "Every man is a fool for at least five minutes every day; wisdom consists in not exceeding the limit. Elbert Hubbard"
   },
   {
        "id": "1664", "category": "Inspirational", "body": "Dream no small dreams for they have no power to move the hearts. .", "by":"J.W. Goethe"
   },
  
   {
        "id": "1665", "category": "Inspirational", "body": "A clear vision, backed by definite plans, gives you a tremendous feeling of confidence and personal power..", "by":"Brian Tracy"
   },
   {
        "id": "1666", "category": "Inspirational", "body": "When wealth is lost, nothing is lost; when health is lost, something is lost; when character is lost, all is lost.", "by":" Billy Graham"
   },
   {
        "id": "1667", "category": "Inspirational", "body": "I am careful not to confuse excellence with perfection. Excellence, I can reach for; perfection is God's business.", "by":" Michael J. Fox"
   },
   {
        "id": "1668", "category": "Inspirational", "body": "Shoot for the moon. Even if you miss it, you will land among the stars.", "by":" Les Brown"
   },
   {
        "id": "1669", "category": "Inspirational", "body": "Each time you decide to grow again, you realize you're starting at the bottom of another ladder..", "by":"Ken Rosenthal"
   },
   {
        "id": "1670", "category": "Inspirational", "body": "When you feel passion, work and play are the same. When you love what you do, you work harder and produce more results than ever before.", "by":" Unknown"
   },
   {
        "id": "1671", "category": "Inspirational", "body": "Don't limit investing to the financial world. Invest something of yourself, and you will be richly rewarded.", "by":" Charles Schwab"
   },
   {
        "id": "1672", "category": "Inspirational", "body": "People forget how fast you did a job. - but they remember how well you did it..", "by":"Howard Newton"
   },
   {
        "id": "1673", "category": "Inspirational", "body": "When your work is your Hobby, you never have to work a day in your life..", "by":"Siegfried Hofmeister"
   },
   {
        "id": "1674", "category": "Inspirational", "body": "For every result there is a cost..", "by":"Brian Tracy"
   },
   {
        "id": "1675", "category": "Inspirational", "body": "It has been said that success only shows up when determination does... but it must be powered by a non-negotiable decision.", "by":" Doug Firebaugh"
   },
   {
        "id": "1676", "category": "Inspirational", "body": "Great ideas need landing gear as well as wings..", "by":"C.D. Jackson"
   },
  
  
   {
        "id": "1677", "category": "Inspirational", "body": "Putting off an easy thing makes it hard. Putting off a hard thing makes it impossible..", "by":"Charles Wilson"
   },
   {
        "id": "1678", "category": "Inspirational", "body": "The reason why worry kills more people than work is that more people worry than work..", "by":"Robert Frost"
   },
   {
        "id": "1679", "category": "Inspirational", "body": "Having conceived of his purpose, a man should mentally mark out a straight pathway to its achievement, looking neither to the right nor the left.", "by":" James Allen"
   },
   {
        "id": "1680", "category": "Inspirational", "body": "I used to say, 'I sure hope things will change.' Then I learned that the only way things are going to change for me is when I change.", "by":" Jim Rohn"
   },
   {
        "id": "1681", "category": "Inspirational", "body": "If you don't make a total commitment to whatever you're doing, then start to bail out the first time the boat starts leaking..", "by":"Lou Holtz"
   },
   {
        "id": "1682", "category": "Inspirational", "body": "Excellent service is not what you believe it to be, it's what your customer perceives it to be. And tells others.", "by":" Jeffrey Gitomer"
   },
   {
        "id": "1683", "category": "Inspirational", "body": "At first our dreams seem impossible, then they seem improbable, but when we summon the will, they become inevitable..", "by":"Christopher Reeve"
   },
   {
        "id": "1684", "category": "Inspirational", "body": "The things that I found easy to do, others found easy not to do.", "by":" Jim Rohn"
   },
   {
        "id": "1685", "category": "Inspirational", "body": "I know the price of success: dedication, hard work and an unremitting devotion to the things you want to see happen.", "by":" Frank Lloyd Wright"
   },
   {
        "id": "1686", "category": "Inspirational", "body": "Writing is the gold standard of communication. Learn to do it well and see more gold.", "by":" Chris Widener"
   },
   {
        "id": "1687", "category": "Inspirational", "body": "The will to believe is perhaps the most powerful, but certainly the most dangerous, human attribute..", "by":"Dero Ames Saunders"
   },
   {
        "id": "1688", "category": "Inspirational", "body": "Would that I could stand on a busy corner, hat in hand, and beg people to throw me all their wasted hours.", "by":" Bernard Berenson"
   },
   {
        "id": "1689", "category": "Inspirational", "body": "Happiness is not something you postpone for the future; it is something you design for the present.", "by":" Jim Rohn"
   },
   {
        "id": "1690", "category": "Inspirational", "body": "Time management is a vehicle to take you from wherever you are to wherever you want to go.", "by":" Brian Tracy"
   },
   {
        "id": "1691", "category": "Inspirational", "body": "Time is amazing... it has only one thing to say to anyone... When?,", "by": "Doug Firebaugh"
   },
  
   {
        "id": "1692", "category": "Inspirational", "body": "Nothing great has ever been achieved except by those who dared believe", "by":" Unknown"
   },
   {
        "id": "1693", "category": "Inspirational", "body": "something inside them was superior to circumstances.", "by":" Bruce Barton"
   },
   {
        "id": "1694", "category": "Inspirational", "body": "There's a wonder in the way we're always free; to change the world by changing how we see.", "by":" Cyndi Craven"
   },
   {
        "id": "1695", "category": "Inspirational", "body": "The antidote to worry is purposeful action.", "by":" Brian Tracy"
   },
   {
        "id": "1696", "category": "Inspirational", "body": "As the ostrich when pursued hideth his head, but forgetteth his body; so the fears of a coward expose him to danger.", "by":" Akhenaton"
   },
   {
        "id": "1697", "category": "Inspirational", "body": "You Can, When You believe You Can. Max Steingart Success is a state of mind..", "by":"Jim Rohn"
   },
   {
        "id": "1698", "category": "Inspirational", "body": "If you want to be successful, start thinking of yourself as being successful.", "by":" Unknown"
   },
   {
        "id": "1699", "category": "Inspirational", "body": "You are what you believe yourself to be..", "by":"Max Steingart"
   },
   {
        "id": "1700", "category": "Inspirational", "body": "Don't be afraid of what life has to offer you. If you believe that life is worth living, your belief will help create the fact..", "by":"Dalai Lama"
   },
   {
        "id": "1701", "category": "Inspirational", "body": "The barrier between you and success does not exists in the real world. It is simply composed of doubts about your ability..", "by":"Barbara Hofmeister"
   },
   {
        "id": "1702", "category": "Inspirational", "body": "Your only limits to your realization of tomorrow will be your doubts of today.", "by":" Unknown"
   },
   {
        "id": "1703", "category": "Inspirational", "body": "Live not as though there were a thousand years ahead of you. Fate is at your elbow; make yourself good while life and power are still yours..", "by":"Marcus Aurelius"
   },
   {
        "id": "1704", "category": "Inspirational", "body": "Learning to write and speak before an audience. Nothing in life is more important than the ability to communicate effectively.", "by":" Gerald Ford"
   },
   {
        "id": "1705", "category": "Inspirational", "body": "If 50 million people say a foolish thing, it is still a foolish thing..", "by":"Anatole France"
   },
   {
        "id": "1706", "category": "Inspirational", "body": "Obstacles cannot crush me; every obstacle yields to stern resolve.", "by":" Leonardo da Vinci"
   },
   {
        "id": "1707", "category": "Inspirational", "body": "The only way to live is to accept each minute as an unrepeatable miracle, which is exactly what it is - a miracle and unrepeatable.", "by":" Margaret Storm Jameson"
   },
   {
        "id": "1708", "category": "Inspirational", "body": "Our doubts are traitors, and make us lose the good we oft might win by fearing to attempt..", "by":"William Shakespeare"
   },
   {
        "id": "1709", "category": "Inspirational", "body": "A single person who lacks commitment can be a major source of problems in your organization.", "by":" Brian Tracy"
   },
   {
        "id": "1710", "category": "Inspirational", "body": "A wise man will make more opportunities then he finds.", "by":"Francis Bacon"
   },
   {
        "id": "1711", "category": "Inspirational", "body": "Never grow a wishbone where your backbone ought to be..", "by":"Helen Keller"
   },
   {
        "id": "1712", "category": "Inspirational", "body": "The first great gift we can bestow on others is a good example..", "by":"Thomas Morell"
   },
   {
        "id": "1713", "category": "Inspirational", "body": "Things unattended fester. Hearsay happens. Intentions become suspect. The faster you broach the subject, the less infected the wounds..", "by":"Dianna Booher"
   },
   {
        "id": "1714", "category": "Inspirational", "body": "None are so empty as those who are full of themselves.", "by":" Andrew Jackson"
   },
   
   {
        "id": "1715", "category": "Inspirational", "body": "One stumble is enough to deface the character of an honorable life.", "by":" L. Estrange"
   },
   {
        "id": "1716", "category": "Inspirational", "body": "Be absolutely clear about who you are and what you stand for. Refuse to compromise.", "by":" Brian Tracy"
   },
   {
        "id": "1717", "category": "Inspirational", "body": "Whenever you do a thing, act as if all the world were watching.", "by":" Thomas Jefferson"
   },
   {
        "id": "1718", "category": "Inspirational", "body": "Nothing else can quite substitute for a few well chosen, well timed, sincere words of praise. They're absolutely free and worth a fortune.", "by":" Sam Walton"
   },
   {
        "id": "1719", "category": "Inspirational", "body": "Nothing is ever lost by courtesy. It is the cheapest of pleasures, costs nothing, and conveys much.", "by":" Erastus Wiman"
   },
   {
        "id": "1720", "category": "Inspirational", "body": "Kindness is the language which the deaf can hear and the blind can see.", "by":" Mark Twain"
   },
   {
        "id": "1721", "category": "Inspirational", "body": "Never esteem men on account of their riches or their station. Respect goodness; find it where you may.", "by":" William Cobbett"
   },
   {
        "id": "1722", "category": "Inspirational", "body": "All growth is a leap in the dark, a spontaneous, unpremeditated act without benefit of experience.", "by":" Henry Miller"
   },
   {
        "id": "1723", "category": "Inspirational", "body": "Luck is predictable; the harder you work, the luckier you get.", "by":" Brian Tracy"
   },
   {
        "id": "1724", "category": "Inspirational", "body": "To travel hopefully is a better thing than to arrive, and the true success is to labor.", "by":" Robert Louis Stevenson"
   },
   {
        "id": "1725", "category": "Inspirational", "body": "A positive attitude won't let you do anything. But it will let you do everything better than a negative attitude will.", "by":" Zig Ziglar"
   },
   {
        "id": "1726", "category": "Inspirational", "body": "Always be happy, never be satisfied.", "by":" Mark McKeon"
   },
   {
        "id": "1727", "category": "Inspirational", "body": "A positive attitude can really make dreams come true-it did for me.", "by":" Zina Garrison"
   },
   {
        "id": "1728", "category": "Inspirational", "body": "The keys to great victories are usually speed, surprise, and concentration."
   },
   {
        "id": "1729", "category": "Inspirational", "body": "They work in business too.", "by":" Brian Tracy"
   },
   {
        "id": "1730", "category": "Inspirational", "body": "For a company's advertising strategy to work, it has to be handled not only corporately, but also individually.", "by":" Patricia Fripp"
   },
   {
        "id": "1731", "category": "Inspirational", "body": "Target the Heart of Your Customer, not his Wallet.", "by":" Rick Beneteau"
   },
   {
        "id": "1732", "category": "Inspirational", "body": "He who labors diligently need never despair; for all things are accomplished by diligence and labor.", "by":" Menander"
   },
   {
        "id": "1733", "category": "Inspirational", "body": "The past cannot be changed. The future is yet in your power.", "by":"Mary Pickford"
   },
   {
        "id": "1734", "category": "Inspirational", "body": "We don't receive wisdom; we must discover it for ourselves after a journey that no one can take for us or spare us..", "by":"Marcel Proust"
   },
   {
        "id": "1735", "category": "Inspirational", "body": "The true measure of a man is how he treats someone who does him absolutely no good..", "by":"Ann Landers"
   },
   {
        "id": "1736", "category": "Inspirational", "body": "Don't carry a grudge. While you're carrying the grudge, the other guy's out dancing..", "by":"Buddy Hackett"
   },
   {
        "id": "1737", "category": "Inspirational", "body": "Leadership is practiced not so much in words as in attitude and in actions.", "by":" Harold S. Geneen"
   },
   {
        "id": "1738", "category": "Inspirational", "body": "You gain strength, courage and confidence by every experience in which you really stop to look fear in the face..", "by":"Eleanor Roosevelt"
   },
   {
        "id": "1739", "category": "Inspirational", "body": "When I've heard all I need to make a decision, I don't take a vote. I make a decision..", "by":"Ronald Reagan"
   },
   {
        "id": "1740", "category": "Inspirational", "body": "Doing what you love is the cornerstone of having abundance in your life..", "by":"Napoleon Hill"
   },
   {
        "id": "1741", "category": "Inspirational", "body": "One player practicing sportsmanship is far better than 50 preaching it..", "by":"Knute Rockne"
   },
   {
        "id": "1742", "category": "Inspirational", "body": "I do not believe in a fate that falls on men however they act, but I do believe in a fate that falls on men unless they act.", "by":" G.K. Chesterton"
   },
   {
        "id": "1743", "category": "Inspirational", "body": "No one is useless in the world that lightens the burden of it for anyone else."
   },
   {
        "id": "1744", "category": "Inspirational", "body": "Leadership is a potent combination of strategy and character. But if you must be without one, be without strategy..", "by":"Norman Schwarzkopf"
   },
   {
        "id": "1745", "category": "Inspirational", "body": "The greatest thing in this world is not so much where we are, but in which direction we are moving.", "by":" Oliver Wendell Holmes"
   },
   {
        "id": "1746", "category": "Inspirational", "body": "We must walk consciously only part way toward our goal and then leap in the dark to our success. — Henry David Thoreau"
   },
   {
        "id": "1747", "category": "Inspirational", "body": "I want this team to win; I'm obsessed with winning, with discipline, with achieving. That's what this country's all about..", "by":"George Steinbrenner"
   },
   {
        "id": "1748", "category": "Inspirational", "body": "The price of excellence is discipline; the cost of mediocrity is disappointment.", "by":"William A. Ward"
   },
   {
        "id": "1749", "category": "Inspirational", "body": "The greatest good you can do for another is not just to share your riches, but to reveal to him his own..", "by":"Benjamin Disraeli"
   },
   {
        "id": "1750", "category": "Inspirational", "body": "The universe is completely balanced and in perfect order. You will always be compensated for everything that you do.", "by":" Brian Tracy"
   },
   {
        "id": "1751", "category": "Inspirational", "body": "New knowledge is of little value if it doesn't change us, make us better individuals, and help us to be more productive, happy, and useful..", "by":"Hyrum Smith"
   },
   {
        "id": "1752", "category": "Inspirational", "body": "The greatest good you can do for another is not just to share your riches, but to reveal to him his own.", "by":" Benjamin Disraeli"
   },
   {
        "id": "1753", "category": "Inspirational", "body": "Don't try to be great at all things. Pick a few things to be good at and be the best you can.", "by":" Liz Ashe"
   },
   {
        "id": "1754", "category": "Inspirational", "body": "My father taught me to do more than you get paid for as an investment in your future..", "by":"Jim Rohn"
   },
   {
        "id": "1755", "category": "Inspirational", "body": "The state of your life is nothing more than a reflection of your state of mind..", "by":"Dr. Wayne W. Dyer"
   },
   {
        "id": "1756", "category": "Inspirational", "body": "Nearly all men can stand adversity, but if you want to test a man's character, give him power.", "by":" Abraham Lincoln"
   },
   {
        "id": "1757", "category": "Inspirational", "body": "Discipline isn't on your back needling you with imperatives. It is at your side encouraging you with incentives.", "by":" Cybil Stanton"
   },
   {
        "id": "1758", "category": "Inspirational", "body": "A man is a success if he gets up in the morning and gets to bed at night, and in between he does what he wants to do..", "by":"Bob Dylan"
   },
   {
        "id": "1759", "category": "Inspirational", "body": "Achievement - seems to be connected with action. Successful men and women keep moving. They make mistakes, but they don't quit..", "by":"Conrad Hilton"
   },
   {
        "id": "1760", "category": "Inspirational", "body": "Victory belongs to the most persevering..", "by":"Napoleon Bonaparte"
   },
   {
        "id": "1761", "category": "Inspirational", "body": "The definition of insanity is doing the same thing over and over again and expecting a different result.", "by":" Albert Einstein"
   },
   {
        "id": "1762", "category": "Inspirational", "body": "Concentration is the secret of strength in politics, in war, in trade, in short in all management of human affairs..", "by":"Ralph Waldo Emerson"
   },
   {
        "id": "1763", "category": "Inspirational", "body": "Since most of us spend our lives doing ordinary tasks, the most important thing is to carry them out extraordinarily well.", "by":" Henry David Thoreau"
   },
   {
        "id": "1764", "category": "Inspirational", "body": "The will to win is important, but the will to prepare is vital..", "by":"Joe Paterno"
   },
   {
        "id": "1765", "category": "Inspirational", "body": "The most important thing to do is set goals. Training is a waste of time if you don't have goals.", "by":" Samantha Riley"
   },
   {
        "id": "1766", "category": "Inspirational", "body": "By working faithfully eight hours a day, you may eventually get to be boss and work 12 hours a day.", "by":" Unknown"
   },
   {
        "id": "1767", "category": "Inspirational", "body": "Formal education will make you a living; self education will make you a fortune.", "by":" Jim Rohn"
   },
   
   {
        "id": "1768", "category": "Inspirational", "body": "You gain strength, courage and confidence by every experience in which you really stop to look fear in the face..", "by":"Eleanor Roosevelt"
   },
   {
        "id": "1769", "category": "Inspirational", "body": "Your own mind is a sacred enclosure into which nothing harmful can enter except by your promotion..", "by":"Ralph Waldo Emerson"
   },
   {
        "id": "1770", "category": "Inspirational", "body": "I believe that every right implies a responsibility; every opportunity, an obligation; every possession, a duty..", "by":"John D. Rockefeller"
   },
   {
        "id": "1771", "category": "Inspirational", "body": "Some people have learned to earn well, but they haven't learned to live well.", "by":" Unknown"
   },
   {
        "id": "1772", "category": "Inspirational", "body": "Truth is a hard master and costly to serve, but it simplifies all problems..", "by":"Ellis Peters"
   },
   {
        "id": "1773", "category": "Inspirational", "body": "When you feel passion, work and play are the same. When you love what you do, you work harder and produce more results than ever before..", "by":"Brian Tracy"
   },
   {
        "id": "1774", "category": "Inspirational", "body": "The successful person makes a habit of doing what the failing person doesn't like to do.", "by":" Thomas Edison"
   },
   {
        "id": "1775", "category": "Inspirational", "body": "When I have finally decided that a result is worth getting, I go ahead on it and make trial after trial until it comes..", "by":"Thomas Edison"
   },
   {
        "id": "1776", "category": "Inspirational", "body": "You can have brilliant ideas, but if you can't get them across, your ideas won't get you anywhere..", "by":"Lee Iacocca"
   },
   {
        "id": "1777", "category": "Inspirational", "body": "If you want a kinder world, then behave with kindness; if you want a peaceful world, make peace within.", "by":"Dan Millman"
   },
   {
        "id": "1778", "category": "Inspirational", "body": "Cherish your visions and your dreams, as they are the children of your soul, the blueprints of your ultimate achievements.", "by":" Napoleon Hill"
   },
   {
        "id": "1779", "category": "Inspirational", "body": "The most important persuasion tool you have in your entire arsenal is integrity.", "by":" Zig Ziglar"
   },
   {
        "id": "1780", "category": "Inspirational", "body": "Labor to keep alive in your breast that little spark of celestial fire called conscience.", "by":" George Washington"
   },
   {
        "id": "1781", "category": "Inspirational", "body": "When wealth is lost, nothing is lost; when health is lost, something is lost; when character is lost, all is lost.", "by":" Billy Graham"
   },
   {
        "id": "1782", "category": "Inspirational", "body": "I am careful not to confuse excellence with perfection. Excellence, I can reach for; perfection is God's business.", "by":" Michael J. Fox"
   },
   {
        "id": "1783", "category": "Inspirational", "body": "Everyone has the capacity to be excellent at something.", "by":"Brian Tracy"
   },
   {
        "id": "1784", "category": "Inspirational", "body": "It has been said that success only shows up when determination does... but it must be powered by a non-negotiable decision.", "by":" Doug Firebaugh"
   },
   {
        "id": "1785", "category": "Inspirational", "body": "For every result there is a cost.", "by":"Brian Tracy"
   },
   {
        "id": "1786", "category": "Inspirational", "body": "Look for the good in every person and every situation. You'll almost always find it.", "by":" Brian Tracy"
   },
   {
        "id": "1787", "category": "Inspirational", "body": "A man is a success if he gets up in the morning and gets to bed at night, and in between he does what he wants to do.", "by":" Bob Dylan"
   },
   {
        "id": "1788", "category": "Inspirational", "body": "If you do the things you fear, the fear will die..", "by":"Brian Tracy"
   },
   {
        "id": "1789", "category": "Inspirational", "body": "If your work is your Hobby, you never have to work a day in your life..", "by":"Brian Tracy"
   },
   {
        "id": "1790", "category": "Inspirational", "body": "Indecision is the thief of opportunity.", "by":" Jim Rohn"
   },
   {
        "id": "1791", "category": "Inspirational", "body": "The will to believe is perhaps the most powerful, but certainly the most dangerous, human attribute..", "by":"Dero Ames Saunders"
   },
   {
        "id": "1792", "category": "Inspirational", "body": "Would that I could stand on a busy corner, hat in hand, and beg people to throw me all their wasted hours.", "by":" Bernard Berenson"
   },
   {
        "id": "1793", "category": "Inspirational", "body": "Happiness is not something you postpone for the future; it is something you design for the present.", "by":" Jim Rohn"
   },
   {
        "id": "1794", "category": "Inspirational", "body": "The right to be heard does not automatically include the right to be taken seriously..", "by":"Brian Tracy"
   },
   {
        "id": "1795", "category": "Inspirational", "body": "We grow neither better nor worse as we get old, but more like ourselves.", "by":" May Lamberton Becker."
   },
   {
        "id": "1796", "category": "Inspirational", "body": "The young feel tired at the end of an action, the old at the beginning.", "by":" T.S. Eliot."
   },
   {
        "id": "1797", "category": "Inspirational", "body": "Old age is when you know all the answers, but nobody asks you the questions.", "by":" Unknown"
   },
   {
        "id": "1798", "category": "Inspirational", "body": "Reading is to the mind what exercise is to the body.", "by":" Sir Richard Steele"
   },
   {
        "id": "1799", "category": "Inspirational", "body": "It is easier to make money than to save it. One is exertion; the other, self- denial..", "by":"Thomas Haliburton"
   },
   {
        "id": "1800", "category": "Inspirational", "body": "Whoever undertakes to set himself up as a judge of truth and knowledge is shipwrecked by the laughter of the gods.", "by":" Albert Einstein"
   },
   
   {
        "id": "1801", "category": "Inspirational", "body": "One head cannot hold all wisdom", "by":" Unknown"
   },
   
    {id:"1802", category:"واصف علی واصف", body : "بڑی منزل کے مسافر کبھی چھوٹے جھگڑوں میں نہیں پڑتے۔", by : "واصف علی واصف" },
    {id:"1803", category:"واصف علی واصف", body : "ہمیں بہت زیادہ علم کے مقابلے تھوڑے ادب کی زیادہ ضرورت ہے۔", by : "واصف علی واصف" },
    {id:"1804", category:"واصف علی واصف", body : "کائنات کے بڑے بڑے مضامین میں نہ پڑو بلکہ چھوٹی چھوٹی باتوں پر توجہ دو۔اُس کو راضی رکھو جو ہمسفر ہے چاہے وہ ہم خیال نہ بھی ہو۔", by : "واصف علی واصف" },
    {id:"1805", category:"واصف علی واصف", body : "مرنے کے بعد زندہ ہونے کی خوشی صرف اس شخص کو ہو سکتی ہے۔ جواس زندگی میں کوئی کام کر رہا ہو۔ جو اس زندگی میں کوئی کام کر رہا ہو تو اسے مارنے کا کوئی خوف نہیں ہوتا۔", by : "واصف علی واصف" },
    {id:"1806", category:"واصف علی واصف", body : "جوانی سولہ سال کی عمر کا نام نہیں۔ ایک انداز فکر کانام ہے، ایک انداز زندگی کانام ہے، ایک کیفیت کا نام ہے۔ یہ ہوسکتا ہے کہ ایک شخص سولہ سال میں بوڑھا ہو، اور ایک شخص ساٹھ سال میں جوان ہو۔ ", by : "واصف علی واصف" },
    {id:"1807", category:"واصف علی واصف", body : "سانس کی موت سے پہلے بہت سی موتیں ہو چکی ہوتی ہیں، ہم سانس کو موت مجھے ہیں۔ حالانکہ سانس تو اعلان ہے ان تمام موتوں کا جو آپ مررہے ہیں ۔", by : "واصف علی واصف" },
    {id:"1808", category:"واصف علی واصف", body : "جس انسان کی آنکھ میں آنسو ہیں وہ اللہ سے نہیں بچ سکتا، انسان کا اللہ سے قریب ترین رشتہ آنسوﺅں کا ہے۔ ", by : "واصف علی واصف" },
    {id:"1809", category:"واصف علی واصف", body : "دنیا کے اندر سب سے بڑ ا انصاف یہ ہے کہ یہ دنیا گناہ کے متلاشی کے لئے گناہ دیتی ہے۔ اور فضل کے متلاشی فضل دیتی ہے۔ ", by : "واصف علی واصف" },
    {id:"1810", category:"واصف علی واصف", body : "جس کو صداقت اور نیکی کا سفر کرنے کی خواہش ہے۔ وہ جان لے کہ یہ منظوری کا اعلان ہے، جس کو منظور نہیں کیا جاتا۔اس کویہ شوق ہی نہیں ملتا۔ ", by : "واصف علی واصف" },
    {id:"1811", category:"واصف علی واصف", body : "جو بات آپ کے دل میں اتر گئی وہ ہی آپ کا انجام ہے، اگر آپ کو موت آجائے تو جس خیال میں آپ مریں وہی آپ کی عاقبت ہے۔ ", by : "واصف علی واصف" },
    {id:"1812", category:"واصف علی واصف", body : "جوآدمی موت سے نہیں نکل سکتا، وہ خدا سے کیسے نکل سکتا ہے۔ ", by : "واصف علی واصف" },
    {id:"1813", category:"واصف علی واصف", body : "جو کسی مقصد کے لئے مرتے ہیں۔ وہ مرتے نہیں ہیں، اور جو بے مقصد جیتے ہیں۔ وہ جیتے نہیں ہیں۔ ", by : "واصف علی واصف" },
    {id:"1814", category:"واصف علی واصف", body : "دور کا کوئی مقام ایسانہیں ہے جو قریب نہ آ سکے۔ ", by : "واصف علی واصف" },
    {id:"1815", category:"واصف علی واصف", body : "استعداد سے زیادہ کی تمنا، ہلاکت ہے، اور استعداد سے کم کی خوائش آسودگی ہے ۔", by : "واصف علی واصف" },
    {id:"1816", category:"واصف علی واصف", body : "حق کیا ہے، استعداد کے مطابق حاصل، احسان کیا ہے وقت سے زیادہ حاصل، محرومی کیا ہے حق سے کم حاصل۔", by : "واصف علی واصف" },
    {id:"1817", category:"واصف علی واصف", body : "آنسو قرب کا ثبوت ہیں، جب روح کا روح سے وصال ہوتا ہے تو آپ کو آنسو آجاتے ہیں۔ ", by : "واصف علی واصف" },
    {id:"1818", category:"واصف علی واصف", body : "منافق وہ ہے جو اسلام سے محبت کرے اورمسلمانوں سے نفرت۔ ", by : "واصف علی واصف" },
    {id:"1819", category:"واصف علی واصف", body : "جس چیز کو ہم باعث عزت سمجھ رہے ہیں۔ اس کی موجودگی میں لوگ ذلیل ہیں۔", by : "واصف علی واصف" },
    {id:"1820", category:"واصف علی واصف", body : "آپ کے سانس گنتی کے مقرر ہو چکے ہیں، کوئی حادثہ آپ کو پہلے مارسکتا ہے۔ نہ کوئی حفاظت آپ کو دیر تک زندہ رکھتی ہے۔ ", by : "واصف علی واصف" },
    {id:"1821", category:"واصف علی واصف", body : "جھوٹے معاشرے میں عزت کے نام سے مشہور ہونے والا آدمی در اصل ذلت میں ہے۔ ", by : "واصف علی واصف" },
    {id:"1822", category:"واصف علی واصف", body : "دعایہ کرو کہ اے اللہ جو تو نے دینا ہے،وہ بغیر مانگے دے۔ اور جو کچھ نہیں دینااس کے مانگنے کی توفیق ہی نہ دے۔ ", by : "واصف علی واصف" },
    {id:"1823", category:"واصف علی واصف", body : "فانی کی محبت فنا پیدا کر دے گی، باقی کی محبت بقا پیدا کرے گی۔ ", by : "واصف علی واصف" },
    {id:"1824", category:"واصف علی واصف", body : "معاشرے انسان کو جنم دیتے ہیں۔ اور انسان معاشرے کو جنم دیتا ہے", by : "واصف علی واصف" },
    {id:"1825", category:"واصف علی واصف", body : "وہ شخص مر گیا جو کسی کے دل میں نہ رہا۔ آ دمی کب مرتا ہے۔ جب دل سے اتر تا ہے۔ زندہ کب ہوتا ہے جب دل میں اترتا ہے۔ ", by : "واصف علی واصف" },
    {id:"1826", category:"واصف علی واصف", body : "ایسا کوئی نہیں ملے گا۔ جو اسلام کی ایسی تعریف پیش کرے۔ جس سے سارے پاکستانی مسلمان ثابت ہو جائیں۔ ناممکن ہے آدھے لوگ تو ضرور کافر ثابت ہوتے ہیں۔ ", by : "واصف علی واصف" },
    {id:"1827", category:"واصف علی واصف", body : "مسلمان وہ ہے جو ہندو کی نگاہ میں مسلمان ہو۔ ", by : "واصف علی واصف" },
    {id:"1828", category:"واصف علی واصف", body : "ادب ہی قرآن کا حافظ ہوتا ہے۔ جس نے قرآن کا ادب کیا۔ وہی اس کا حافظ ہے۔ اگر ادب نہ ہو تو قرآن سینے سے صاف ہو جائے گا۔", by : "واصف علی واصف" },
    {id:"1829", category:"واصف علی واصف", body : "پسندیدہ چیز سے جدائی موت ہے۔ جن کی پسند یدہ چیزیں موت سے پرے ہیں۔ ان کو مرنا آسان ہے۔ جن کی پسندیدہ چیز ہیں یہاں رہ جائیں گی۔ ان کے لئے موت مشکل ہے۔ ", by : "واصف علی واصف" },
    {id:"1830", category:"واصف علی واصف", body : "غصہ ایساشیر ہے جو تمہارے مستقبل کو بکرا بنا کر کھا جاتا ہے۔ ", by : "واصف علی واصف" },
    {id:"1831", category:"واصف علی واصف", body : "اگر تیری نسبت باقی کے ساتھ ہوئی تو بات باقی ہو جائے گا۔ اب تیری نسبت قانی کے ساتھ ہے۔ اس لئے تو فانی ہے۔ فنا سے نسبت اٹھا کے بقا میں لگا دے تو سب آسان ہو جائے گا۔ ", by : "واصف علی واصف" },
    {id:"1832", category:"واصف علی واصف", body : "اگر تذبذب کوتسلیم میں داخل کروتو موت سے پہلے مرنے کی بات سمجھ آجائے گی۔ ", by : "واصف علی واصف" },
    {id:"1833", category:"واصف علی واصف", body : "چورضرورت کا نام ہے، بندہ اندر سے برا نہیں ہوتا۔ ضرورت ہی برا کرتی ہے۔ اور ضرورت ہی نیک کرتی ہے۔ ضرورت نکال دو بندہ ٹھیک۔ ", by : "واصف علی واصف" },
    {id:"1834", category:"واصف علی واصف", body : "ہمارے ہاں دقت یہ ہے کہ جو علماءصاحبان ہیں، وقت کے تقاضوں سے بے خبر ہیں۔ اور جولوگ عظیم ہیں۔ وہ احکام شریعت سے غافل نظر آتے ہیں۔ ", by : "واصف علی واصف" },
    {id:"1835", category:"واصف علی واصف", body : "دنیا دار کے لئے جہاں صبر کا حکم ہے، وہاں اللہ کے بندوں کو شکر کر نے کا حکم ہے۔ ", by : "واصف علی واصف" },
    {id:"1836", category:"واصف علی واصف", body : "کسی پسند یدہ چیز کے چھن جانے یا کسی نا پسند یدہ چیز کے آجانے کو خوف کہتے ہیں۔ ", by : "واصف علی واصف" },
    {id:"1837", category:"واصف علی واصف", body : "جو شخص ہر وقت ایک ہی خیال میں رہے۔ اسے نہ آنے والے واقعات کا ڈر ہے، اور نہ ماضی میں ہو نے والے عمل کا۔ ", by : "واصف علی واصف" },
    {id:"1838", category:"واصف علی واصف", body : "اولاد کو زمانہ جد ید کے مطابق تعلیم دو تا کہ رزق کما سکیں۔ اور دین کا علم دوتا کہ وہ بر با دنہ ہوجا ہیں۔ ", by : "واصف علی واصف" },
    {id:"1839", category:"واصف علی واصف", body : "قبر اس وقفے کا نام ہے۔ جومرنے اور اٹھانے کے درمیان ہے۔ یہ وقفہ ہے مقام نہیں۔ ", by : "واصف علی واصف" },
    {id:"1840", category:"واصف علی واصف", body : "کوئی مسلمان ایسا نہیں۔ جو خوشی کے ساتھ گناہ کرے۔ گناہ بیماری کی طرح اسے کہیں سے لاحق ہو جاتا ہے۔ ", by : "واصف علی واصف" },
    {id:"1841", category:"واصف علی واصف", body : "گناہ ہروہ عمل ہے۔ جو ہمارے لئے نقصان دہ ہے۔ ", by : "واصف علی واصف" },
    {id:"1842", category:"واصف علی واصف", body : "سب سے بھاری دن وہ ہے جب اعمال کے مطابق انصاف مل جائے گا۔ اور سب سے آسان دن دہ ہے۔ جب ہمیں ایسا انعام ملے۔ جو تمہارا حق نہیں تھا۔ ", by : "واصف علی واصف" },
    {id:"1843", category:"واصف علی واصف", body : "جس دین کی رات آگئی وہ دن اچھاتھا۔ اور جس رات پر دن طلوع ہوا وہ رات اچھی تھی۔ اس دنیا میں کوئی رات ایسی نہیں۔ جس پر دون طلوع نہ ہواہو۔ ", by : "واصف علی واصف" },
    {id:"1844", category:"واصف علی واصف", body : "وجود گھوڑا ہے۔ اور روح اس کی سوار گھوڑا لاغر نہیں ہونا چاہیے کہ روح بیچاری پریشان ہو جائے۔ اور گھوڑاخودسر نہ ہو کہ روح کو گرا کر چلا جائے۔ ", by : "واصف علی واصف" },
    {id:"1845", category:"واصف علی واصف", body : "تنکے کو بھی حقیر نہ سجھو ورنہ تمہاری آنکھ میں پڑ جائے گا۔ ", by : "واصف علی واصف" },
    {id:"1846", category:"واصف علی واصف", body : "سکون آپ کے علاوہ جگہ کا نام نہیں ہے، اسی جگہ کے اندر خوش ہونے کانام ہے۔ ", by : "واصف علی واصف" },
    {id:"1847", category:"واصف علی واصف", body : "وہ شخص جو اپنے آپ کو ماحول سے بلند سمجھتا ہے سکون نہیں پائے گا۔ اور وہ شحص بھی جو اپنے آپ کو اپنے ماحول سے نیچا سمجھتا ہے۔ وہ بھی سکون نہیں پائے گا۔ ", by : "واصف علی واصف" },
    {id:"1848", category:"واصف علی واصف", body : "ایسا رزق جس میں زیادہ محنت بھی نہ کرنا پڑے اور جو حرام بھی نہ ہو رزق کریم کہلاتا ہے۔ ", by : "واصف علی واصف" },
    {id:"1849", category:"واصف علی واصف", body : "اگر تمہیں پتا چل جائے کہ تمہارا رزق اللہ کے پاس ہے تو پھر رزق کی تلاش نہ کرو۔ بلکہ اللہ کی تلاش کرو۔ جس کے پاس تمہارا رزق ہے۔ ", by : "واصف علی واصف" },
    {id:"1850", category:"واصف علی واصف", body : "جہاں دو راستے ہوتے ہیں۔ وہاں سوچ آتی ہے۔ جس آدمی کے پاس راستہ ہی ایک ہو، اسے سوچنے کی ضرورت ہی کوئی نہیں۔ ", by : "واصف علی واصف" },
    {id:"1851", category:"واصف علی واصف", body : "جب آپ کی زندگی سکون بخش ہو جائے گی تو آپکو خودبخو دسکون ملنا شروع ہو جائے گا۔", by : "واصف علی واصف" },
    {id:"1852", category:"واصف علی واصف", body : "بے سکونی تمنا کا نام ہے، جب تمنا تابع فرمان الہٰی ہو جائے تو سکون شروع ہو جاتا ہے۔ ", by : "واصف علی واصف" },
    {id:"1853", category:"واصف علی واصف", body : "مرنے کے دو ہی طر یقے ہیں غم مل جائے یا خوشیاں چلی جائیں۔ ", by : "واصف علی واصف" },
    {id:"1854", category:"واصف علی واصف", body : "دشمن گھر میں آ جائے یا دوست گھر سے چلا جائے، دونوں حالتوں میں مصیبت ہے۔ ", by : "واصف علی واصف" },
    {id:"1855", category:"واصف علی واصف", body : "مغربی تہذیب اپ منطقی انجام کوپہنچ گئی ہے۔ ان کی کوئی لذت ایسی نہیں رہ گئی جو گناہ نہ ہو۔ ", by : "واصف علی واصف" },
    {id:"1856", category:"واصف علی واصف", body : " جب تک آپ کو اپنی تمنا کے منظور ہونے کی وجہ سے حاصل ہونے والی چیز کی ماہیت کا پتا نہ ہو، اس وقت تک دعانہ کرو۔ ", by : "واصف علی واصف" },
    {id:"1857", category:"واصف علی واصف", body : "بزرگوں نے اللہ کے فضل وکرم کو مانگنے کا طریقہ بتایا ہے۔ کہ اللہ کے فضل و کرم نہ مانگو، جو کر رہا ہے و فضل و کرم ہے۔ ", by : "واصف علی واصف" },
    {id:"1858", category:"واصف علی واصف", body : "آج کل مفاد پرست کے پاس اپنے مفادکا تحفظ سیاست کے علاوہ اور کوئی نہیں۔ ", by : "واصف علی واصف" },
    {id:"1859", category:"واصف علی واصف", body : "اپنی ہستی سے زیادہ کام کرتا ہلاکت ہے، اور اپنی ہستی سے کام کرتا بد دیانتی ہے۔ ", by : "واصف علی واصف" },
    {id:"1860", category:"واصف علی واصف", body : "کبھی بادشاہ بننے کی دعا نہ کرو، ورنہ دعا کے ذریعے حاصل ہو جانے والی بادشاہی کے اند را گرکوئی ظلم اورتلخی ہوئی تواس کے ذمہ دارتم ہوگے۔ ", by : "واصف علی واصف" },
    {id:"1861", category:"واصف علی واصف", body : "ایک آدی دلیری سے سچ بات کرنے لگ جائے تو باقیوں کا چھپاہواسچ ظاہر ہو جائے گا۔", by : "واصف علی واصف" },
    {id:"1862", category:"واصف علی واصف", body : "دین سے اس طرح محبت کرو۔ جس طرح دنیا دار، دنیا سے محبت کرتا ہے۔ ", by : "واصف علی واصف" },
    {id:"1863", category:"واصف علی واصف", body : "اگر زندگی کا کیا ہوا حاصل، آخرت میں کام نہیں آتا تواس حاصل کومحرومی کہو۔ ", by : "واصف علی واصف" },
    {id:"1864", category:"واصف علی واصف", body : "ہر آدمی اپنے سے زیادہ دانا کے سامنے بے وقوف ہے، اور آپ کو آپ سے بڑا دانا ہمیشہ ملے گا۔ ", by : "واصف علی واصف" },
    {id:"1865", category:"واصف علی واصف", body : "بہت سارے سوالات سے نکل کر انسان جب ایک سوال میں داخل ہو جاتا ہے تو اس کا سفر واضح ہو جاتا ہے۔ ", by : "واصف علی واصف" },
    {id:"1866", category:"واصف علی واصف", body : "جو اقتدار میں ہیں وہ جاننے والے نہیں ہیں۔ اور جو جاننے والے ہیں وہ اقتدار سے باہر ہیں۔ ", by : "واصف علی واصف" },
    {id:"1867", category:"واصف علی واصف", body : "جب تک کوئی آپ سے نہ پو چھے مبلغ نہ بنو۔ ", by : "واصف علی واصف" },
    {id:"1868", category:"واصف علی واصف", body : "ہم ہر دن کا ماتم کرتے ہیں۔ اور ہر کو خوش آمدید کہتے ہیں۔ ", by : "واصف علی واصف" },
    {id:"1869", category:"واصف علی واصف", body : "جن لوگوں نے اللہ کو یاد رکھا، لوگوں نے ان کی زندگی کے بعد بھی ان کو یا درکھا ۔", by : "واصف علی واصف" },
    {id:"1870", category:"واصف علی واصف", body : "خودی کسی شے کا وہ جو ہر خاص ہے جس کے نہ ہونے سے وہ یہ نہیں ہوتی۔ ", by : "واصف علی واصف" },
    {id:"1871", category:"واصف علی واصف", body : "غرور صفت کو کہتے ہیں۔ جو مٹ جائے یا مٹ سکے۔ ", by : "واصف علی واصف" },
    {id:"1872", category:"واصف علی واصف", body : "اللہ کا جلوہ اگر طور کے درخت سے بول سکتا ہے تو کیسے ممکن ہے کہ انسان سے نہ بول سکے ۔", by : "واصف علی واصف" },
    {id:"1873", category:"واصف علی واصف", body : "گدا گر وہ ہوتا ہے، جو ہر روز ایک مقام پر ایک جیسی صدا لگاتا ہے۔ ", by : "واصف علی واصف" },
    {id:"1874", category:"واصف علی واصف", body : "سورج کو نمایاں ہونے کے لئے تاریکی درکار ہے۔ ", by : "واصف علی واصف" },
    {id:"1875", category:"واصف علی واصف", body : "علم و عمل کے درمیان فاصلہ کم کرنا شریعت بھی ہے اور ولایت بھی۔ ", by : "واصف علی واصف" },
    {id:"1876", category:"واصف علی واصف", body : "اگر مرتبہ مل جائے اور استعداد نہ ہو تو اس سے بڑی آزمائش کوئی نہیں۔", by : "واصف علی واصف" },
    {id:"1877", category:"واصف علی واصف", body : "خوراک تھوڑی کھائیں تو طاقت ملے گی، وہی خوراک اگر زیادہ کھائیں تو طاقت چھن جائے گی۔ ", by : "واصف علی واصف" },
    {id:"1878", category:"واصف علی واصف", body : "اگر علم کا شاہد نہ ہوتو علم حجاب اکبر ہے۔ ", by : "واصف علی واصف" },
    {id:"1879", category:"واصف علی واصف", body : "اللہ کا بڑا کرم ہے کہ اس نے ہمیں بھولنے کی صفت دی۔ ورنہ ایک غم ہمیشہ کے لئے غم بن جا تا۔ ", by : "واصف علی واصف" },
    {id:"1880", category:"واصف علی واصف", body : "نا اہل کو اہلیت کا مقام مل جائے تو اس کی جان بھی خطرے میں ہوگی۔ او را یمان بھی۔ ", by : "واصف علی واصف" },
    {id:"1881", category:"واصف علی واصف", body : "مفید چیز مقدار میں بڑھ جائے تو غیر مفید ہو جاتی ہے۔ ", by : "واصف علی واصف" },
    {id:"1882", category:"واصف علی واصف", body : "گناہ گار کا گناہ عاجز ی پیدا کررہا ہو تو وہ بچ سکتا ہے۔ ", by : "واصف علی واصف" },
    {id:"1883", category:"واصف علی واصف", body : "آج اتنا مشکل دور ہے کہ اس میں نیکی نہیں ہوسکتی، پھر بھی مساجد بھری پڑی ہیں۔ ", by : "واصف علی واصف" },
    {id:"1884", category:"واصف علی واصف", body : "بدی کا موقع ہو اور بدی نہ کروتو یہ بہت بڑی نیکی ہے۔ ", by : "واصف علی واصف" },
    {id:"1885", category:"واصف علی واصف", body : "اللہ کے خوف سے اپنی زندگی سے وہ کام نکال دو، جو اللہ کے خوف کا باعث ہوسکتا ہے۔ ", by : "واصف علی واصف" },
    {id:"1886", category:"واصف علی واصف", body : "دوراستوں میں سے ایک چننا پڑتا ہے۔ دعا کرو کہ ایک ہی راستے کا سفر ملے۔ ", by : "واصف علی واصف" },
    {id:"1887", category:"واصف علی واصف", body : "دعا کرو تم اس عبادت سے یبچ جاﺅ۔ جس میں اللہ کا قرب نہ ملے۔ ", by : "واصف علی واصف" },
    {id:"1888", category:"واصف علی واصف", body : "شیطان اس لئے شیطان بنا، کہ نے عبادت کو تو مانا لیکن معبوچ کو نہیں مانا۔ ", by : "واصف علی واصف" },
    {id:"1889", category:"واصف علی واصف", body : "ہم خیال لوگ ہم سفر ہو جائیں تو منزل آسان ہو جاتی ہے۔ ", by : "واصف علی واصف" },
    {id:"1890", category:"واصف علی واصف", body : "لوگوں سے الگ رہ کے سوچو گے تو لوگوں سے الگ سو چ مل جائے گی۔ ", by : "واصف علی واصف" },
    {id:"1891", category:"واصف علی واصف", body : "انسان کے پاس جتنے امکانات ہیں۔ وہ سب کے سب اس لئے بھی پورے نہیں ہو سکتے، کہ زندگی کے اپنے ٹھہر نے کے امکانات کم ہیں۔ ", by : "واصف علی واصف" },
    {id:"1892", category:"واصف علی واصف", body : "دو منصوبوں پر کام یکسوئی سے محروم کر دیتا ہے۔ اور یکسوئی کے بغیر عروج حاصل نہیں ہوتا۔ ", by : "واصف علی واصف" },
    {id:"1893", category:"واصف علی واصف", body : "ہمارا ہونا کس کام کا، اگر ہمارے نہ ہونے کا کسی کو کچھ فرق نہ پڑے۔ ", by : "واصف علی واصف" },
    {id:"1894", category:"واصف علی واصف", body : "بولنے والی زبان، سننے والے کان کی محتاج ہے۔ ", by : "واصف علی واصف" },
    {id:"1895", category:"واصف علی واصف", body : "جوشخص دعا کا طالب ہے، وہ خدا کا طالب ہے۔ ", by : "واصف علی واصف" },
    {id:"1896", category:"واصف علی واصف", body : "ضمیر کی آوازنہ تو ظاہر ی زبان سے دی جاتی ہے۔ اور نہ ہی ان کا نوں سے سنائی دے سکتی ہے۔ ", by : "واصف علی واصف" },
    {id:"1897", category:"واصف علی واصف", body : " انسان اپنا بہت کچھ بدل سکتا ہے حتی کہ شکل بھی بدل سکتا ہے لیکن وہ فطرت نہیں بدل سکتا۔ ", by : "واصف علی واصف" },
    {id:"1898", category:"واصف علی واصف", body : " حق والے کو اس کا صحیح حق مل جانا ہی عدل ہے۔ ", by : "واصف علی واصف" },
    {id:"1899", category:"واصف علی واصف", body : "دنیا میں سب سے آسان کام نصیحت کرتا ہے اور سب سے مشکل کام نصیحت پر عمل کرنا ہے۔", by : "واصف علی واصف" },
    {id:"1900", category:"واصف علی واصف", body : "جن لوگوں کو اللہ کی معرفت ہوئی، انہوں نے یہی اعلان فرمایا کہ حق معرفت ادا کرنا انسان کے بس کی بات نہیں۔ ", by : "واصف علی واصف" },
    {id:"1901", category:"واصف علی واصف", body : "جس کا آغازنہیں،اس کا انجام نہیں ہوسکتا، اللہ ہر آغاز سے پہلے اور ہر انجام کے بعدہے۔", by : "واصف علی واصف" },
    {id:"1902", category:"واصف علی واصف", body : "دراصل خود پسندی اور خود پرستی کا منطقی نتیجہ اپنے آپ سے اور دوسروں سے بیزاری ہے۔ ", by : "واصف علی واصف" },
    {id:"1903", category:"واصف علی واصف", body : "جب انسان کے دوست اوراس کے دوستوں میں فرق باقی نہ رہے تو اسے جینے اور مرنے کے درمیان کیا فرق معلوم ہو گا۔", by : "واصف علی واصف" },
    {id:"1904", category:"واصف علی واصف", body : "قانون تو یہ ہے کہ محنت کرنے سے رزق ملے گا لیکن جب دینے والا چاہے تو بے حساب دے دیتا ہے۔ ", by : "واصف علی واصف" },
    {id:"1905", category:"واصف علی واصف", body : "ہم خوش فہمیوں اور خوش گپیوں میں اتنے مصروف ہو جاتے ہیں۔ کہانجام نظروں اوجھل ہو جاتا ہے ضمیر کی آواز اس خواب گراں سے بیدار کرتی ہے۔ ", by : "واصف علی واصف" },
    {id:"1906", category:"واصف علی واصف", body : "چھن جانے کے بعد جس مقام کی دوبارہ تلاش شروع ہو جائے وہی مقام انسان کا بہشت ہے۔ ", by : "واصف علی واصف" },
    {id:"1907", category:"واصف علی واصف", body : "کل کی سوچ کو غلط سمجھ کر انسان آج کی سوچ پر ناز کرتا ہے۔ آنے والے کل میں یہ سوچ بھی غلط ہوسکتی ہے۔ ", by : "واصف علی واصف" },
    {id:"1908", category:"واصف علی واصف", body : "کوئی بھی عظیم انسان اگر چہ عام انسانوں کی طرح پیدا کیا گیا ہے لیکن اس میں کوئی ایک صلاحیت میں رکھ دی گئی ہے جس نے ہر صورت کچھ نہ کچھ کرنا ہوتا ہے۔ ", by : "واصف علی واصف" },
    {id:"1909", category:"واصف علی واصف", body : " اللہ ہی آخر کا اول اور ہراول کا آخر ہے۔ ", by : "واصف علی واصف" },
    {id:"1910", category:"واصف علی واصف", body : "حال کی غلطی جو مستقبل میں اپنے لئے سزا مرتب کر چکی ہے، اس سے بچانے والی شے رحمت کہلائے گی۔ ", by : "واصف علی واصف" },
    {id:"1911", category:"واصف علی واصف", body : "جس آدمی کوقلم کی طاقت عطا کی گئی، اس سے یہ پوچھا جائے گا کہ اس نے اپنی تحریر کس سمت میں استعمال کی۔ ", by : "واصف علی واصف" },
    {id:"1912", category:"واصف علی واصف", body : " اللہ انسان پیدا کرتا ہے، انسانوں سے پیار کرتا ہے اور لوگ عبادت کے بہانے انسانوں سے بیزاری کا اظہار کر تے ہیں۔ ", by : "واصف علی واصف" },
    {id:"1913", category:"واصف علی واصف", body : "اس زندگی کو ضابطہ اخلاق دینا انسان کے بس میں نہیں کیونکہ انسان ایک محدودسوچ رکھتا ہے۔ ", by : "واصف علی واصف" },
    {id:"1914", category:"واصف علی واصف", body : "مغرب کے پاس پیسہ ہے اور دین نہیں، ہمارے پاس کچھ بھی نہیں۔ ", by : "واصف علی واصف" },
    {id:"1915", category:"واصف علی واصف", body : "کائنات کا کوئی اصول ایسا نہیں، جس میں استشنا نہ ہو۔ ", by : "واصف علی واصف" },
    {id:"1916", category:"واصف علی واصف", body : "جہاں ایک دور ختم ہوتا ہے، وہیں سے دوسرے دور کا آغاز ہوتا ہے۔ ", by : "واصف علی واصف" },
    {id:"1917", category:"واصف علی واصف", body : "ضمیر کی آواز پر کان نہ دھرنے والے بڑے بڑے محلات میں رہنے کے باوجود اپنے پچھے ویرانیاں چھوڑ گئے۔ ", by : "واصف علی واصف" },
    {id:"1918", category:"واصف علی واصف", body : "جب ذہن پختہ ہو جائے تو اصلاح کا امکان کم ہو جاتا ہے۔ ", by : "واصف علی واصف" },
    {id:"1919", category:"واصف علی واصف", body : "بدنصیب ہیں وہ مسافر جو آدھے سفر کے بعد ذوق سفر سے محروم ہوجاتے ہیں۔ ", by : "واصف علی واصف" },
    {id:"1920", category:"واصف علی واصف", body : "ہم سفرآ دمی اگر ہم فطرت نہ ہو تو ساتھ کبھی منزل تک نہیں پہنچتا۔", by : "واصف علی واصف" },
    {id:"1921", category:"واصف علی واصف", body : "عدل کرتاصرف خوف خدا اور فضل خدا سے ممکن ہے۔ ", by : "واصف علی واصف" },
    {id:"1922", category:"واصف علی واصف", body : "رات کو سونے کے بعد کی بیداری اللہ کی رحمت کے سہارے ہوتی ہے۔ ", by : "واصف علی واصف" },
    {id:"1923", category:"واصف علی واصف", body : "دراصل خود پسندی اور خود پرستی کا منطقی نتیجہ اپنے آپ سے اور دوسروں سے بیزاری ہے۔ ", by : "واصف علی واصف" },
    {id:"1924", category:"واصف علی واصف", body : "جب انسان کے دوست اوراس کے دوستوں میں فرق باقی نہ رہے تو اسے جینے اور مرنے کے درمیان کیا فرق معلوم ہو گا۔", by : "واصف علی واصف" },
    {id:"1925", category:"واصف علی واصف", body : "قانون تو یہ ہے کہ محنت کرنے سے رزق ملے گا لیکن جب دینے والا چاہے تو بے حساب دے دیتا ہے۔ ", by : "واصف علی واصف" },
    {id:"1926", category:"واصف علی واصف", body : "ہم خوش فہمیوں اور خوش گپیوں میں اتنے مصروف ہو جاتے ہیں۔ کہانجام نظروں اوجھل ہو جاتا ہے ضمیر کی آواز اس خواب گراں سے بیدار کرتی ہے۔ ", by : "واصف علی واصف" },
    {id:"1927", category:"واصف علی واصف", body : "چھن جانے کے بعد جس مقام کی دوبارہ تلاش شروع ہو جائے وہی مقام انسان کا بہشت ہے۔ ", by : "واصف علی واصف" },
    {id:"1928", category:"واصف علی واصف", body : "کل کی سوچ کو غلط سمجھ کر انسان آج کی سوچ پر ناز کرتا ہے۔ آنے والے کل میں یہ سوچ بھی غلط ہوسکتی ہے۔ ", by : "واصف علی واصف" },
    {id:"1929", category:"واصف علی واصف", body : "کوئی بھی عظیم انسان اگر چہ عام انسانوں کی طرح پیدا کیا گیا ہے لیکن اس میں کوئی ایک صلاحیت میں رکھ دی گئی ہے جس نے ہر صورت کچھ نہ کچھ کرنا ہوتا ہے۔ ", by : "واصف علی واصف" },
    {id:"1930", category:"واصف علی واصف", body : " اللہ ہی آخر کا اول اور ہراول کا آخر ہے۔ ", by : "واصف علی واصف" },
    {id:"1931", category:"واصف علی واصف", body : "حال کی غلطی جو مستقبل میں اپنے لئے سزا مرتب کر چکی ہے، اس سے بچانے والی شے رحمت کہلائے گی۔ ", by : "واصف علی واصف" },
    {id:"1932", category:"واصف علی واصف", body : "جس آدمی کوقلم کی طاقت عطا کی گئی، اس سے یہ پوچھا جائے گا کہ اس نے اپنی تحریر کس سمت میں استعمال کی۔ ", by : "واصف علی واصف" },
    {id:"1933", category:"واصف علی واصف", body : "اللہ انسان پیدا کرتا ہے، انسانوں سے پیار کرتا ہے اور لوگ عبادت کے بہانے انسانوں سے بیزاری کا اظہار کر تے ہیں۔ ", by : "واصف علی واصف" },
    {id:"1934", category:"واصف علی واصف", body : "اس زندگی کو ضابطہ اخلاق دینا انسان کے بس میں نہیں کیونکہ انسان ایک محدودسوچ رکھتا ہے۔ ", by : "واصف علی واصف" },
    {id:"1935", category:"واصف علی واصف", body : "مغرب کے پاس پیسہ ہے اور دین نہیں، ہمارے پاس کچھ بھی نہیں۔ ", by : "واصف علی واصف" },
    {id:"1936", category:"واصف علی واصف", body : "کائنات کا کوئی اصول ایسا نہیں، جس میں استشنا نہ ہو۔ ", by : "واصف علی واصف" },
    {id:"1937", category:"واصف علی واصف", body : "جہاں ایک دور ختم ہوتا ہے، وہیں سے دوسرے دور کا آغاز ہوتا ہے۔ ", by : "واصف علی واصف" },
    {id:"1938", category:"واصف علی واصف", body : "ضمیر کی آواز پر کان نہ دھرنے والے بڑے بڑے محلات میں رہنے کے باوجود اپنے پچھے ویرانیاں چھوڑ گئے۔ ", by : "واصف علی واصف" },
    {id:"1939", category:"واصف علی واصف", body : "جب ذہن پختہ ہو جائے تو اصلاح کا امکان کم ہو جاتا ہے۔ ", by : "واصف علی واصف" },
    {id:"1940", category:"واصف علی واصف", body : "بدنصیب ہیں وہ مسافر جو آدھے سفر کے بعد ذوق سفر سے محروم ہوجاتے ہیں۔ ", by : "واصف علی واصف" },
    {id:"1941", category:"واصف علی واصف", body : " ہم سفرآ دمی اگر ہم فطرت نہ ہو تو ساتھ کبھی منزل تک نہیں پہنچتا۔", by : "واصف علی واصف" },
    {id:"1942", category:"واصف علی واصف", body : "عدل کرتاصرف خوف خدا اور فضل خدا سے ممکن ہے۔ ", by : "واصف علی واصف" },
    {id:"1943", category:"واصف علی واصف", body : "رات کو سونے کے بعد کی بیداری اللہ کی رحمت کے سہارے ہوتی ہے۔ ", by : "واصف علی واصف" },
    {id:"1944", category:"واصف علی واصف", body : "خطرہ اندر ہوتو باہر دوڑا کس کام کا؟ اپنے اندر کے خطرے سے اندر کی دوڑ پچاسکتی ہے۔", by : "واصف علی واصف" },
    {id:"1945", category:"واصف علی واصف", body : "ایک گھر میں پانے والے جڑواں بھائی بھی ایک جیسی نہیں ہوتے۔ ", by : "واصف علی واصف" },
    {id:"1946", category:"واصف علی واصف", body : "انسان اپنے آپ کو خواہشات کے پتھرمیں چنواتا رہتا ہے۔ اور جب آخری پتھراس کی سانس روکنے لگاتا ہے تو پھر وہ شور مچاتا ہے۔ ", by : "واصف علی واصف" },
    {id:"1947", category:"واصف علی واصف", body : "کسی معاشرے میں استعمال ہونے والے الفاظ کا بغور مطالعہ کرنے سے معاشرے کا اخلاقی معیارواضح ہو جاتا ہے۔ ", by : "واصف علی واصف" },
    {id:"1948", category:"واصف علی واصف", body : "پیغمبر کے بعد سب سے بڑا مرتبہ ماں باپ اور اساتذہ کا ہے۔ ", by : "واصف علی واصف" },
    {id:"1949", category:"واصف علی واصف", body : "کامیاب ریاست تو وہی ہے کہ ایک خوبصورت عورت، زیورات سے لدی ہوئی تن تنہا ملک کے ایک کونے سے دوسرے کونے تک سفر کر جائے اور اسے کوئی خطرہ نہ ہو۔ ", by : "واصف علی واصف" },
    {id:"1950", category:"واصف علی واصف", body : "ایک مسجد میں مل کر با جماعت نمازیں ادا کرنے والے کئی سالوں کی رفاقت کے بعد بھی مختلف المزاج نظر آتے ہیں۔ ", by : "واصف علی واصف" },
    {id:"1951", category:"واصف علی واصف", body : "مخلص کی تعریف ہی یہ ہے کہ آپ کے ساتھ آپ سے زیادہ مہربان ہو۔ ", by : "واصف علی واصف" },
    {id:"1952", category:"واصف علی واصف", body : "خدا سے آشنا ممکن ہی نہیں جب تک و خودآشنائے راز نہ کر دے۔ ", by : "واصف علی واصف" },
    {id:"1953", category:"واصف علی واصف", body : "وہ جنت جس میں اپنے علاوہ کوئی نہ ہو، دوزخ سے بدتر ہے۔ ", by : "واصف علی واصف" },
    {id:"1954", category:"واصف علی واصف", body : "طاقتور انسان کمزور انسانوں کی عنایت کا نام ہے۔ ", by : "واصف علی واصف" },
    {id:"1955", category:"واصف علی واصف", body : "خالق کا ہرمل خالق کی طرح محترم اورمعززہے۔ ", by : "واصف علی واصف" },
    {id:"1956", category:"واصف علی واصف", body : "یقین کے ساتھ اٹھایا ہوا پہلا قدم جو جانب منزل ہو، وہی منزل ہے۔ ", by : "واصف علی واصف" },
    {id:"1957", category:"واصف علی واصف", body : "جو ڈرا رہا ہوتا ہے، درحقیقت وہ ڈر رہا ہوتا ہے۔ ", by : "واصف علی واصف" },
    {id:"1958", category:"واصف علی واصف", body : "بے شمار لوگ محنت کی چکی میں پستے جارہے ہیں اور کوئی چکی ان کے لئے آنا نہیں پستی۔ ", by : "واصف علی واصف" },
    {id:"1959", category:"واصف علی واصف", body : "مصنفین اپنی کتابوں کی شکل میں اپنے مرنے کے بعد بھی اپنے چاہنے والوں کی لائبریری میں محفوظ رہتے ہیں۔ ", by : "واصف علی واصف" },
    {id:"1960", category:"واصف علی واصف", body : "جب تک کوشش کی محرومیاں سمجھ میں نہ آئیں نصیب کو نہیں سمجھا جا سکتا کوشش کامیاب ہو جائے تب بھی بد نصیب انسان نا کام ہو جاتا ہے۔ ", by : "واصف علی واصف" },
    {id:"1961", category:"واصف علی واصف", body : "اے مالک تو ہمیں وہ زندگی دے کہ ہم بھی خوش رہ سکیں اور بھی ہم پر راضی رہے۔ ", by : "واصف علی واصف" },
    {id:"1962", category:"واصف علی واصف", body : "آج کا انسان صرف مکان میں رہتا ہے۔ اس کا گھر ختم ہو گیا ہے۔ ", by : "واصف علی واصف" },
    {id:"1963", category:"واصف علی واصف", body : "فرشتوں اور جنوں کے پاس عبادت تو ہے لیکن محبت و عشق کی مستی انسان کا نصیب ہے۔", by : "واصف علی واصف" },
    {id:"1964", category:"واصف علی واصف", body : " خودشناسی نہ ہو تو خدا شناسی کا عمل ممکن ہی نہیں۔ ", by : "واصف علی واصف" },
    {id:"1965", category:"واصف علی واصف", body : "نصیحت کرنے والامخلص نہ ہو تو نصیحت بھی ایک پیشہ ہے۔ ", by : "واصف علی واصف" },
    {id:"1966", category:"واصف علی واصف", body : "توبہ کرلی جائے تو ایک اچھے وقت کا آغاز ہوتا ہے۔ ", by : "واصف علی واصف" },
    {id:"1967", category:"واصف علی واصف", body : "میری میز پر ایک رنگ برنگے سجے سجائے اخبار کی خاطر دنیا کتنے حادثات سے گزر جاتی ہے۔ ", by : "واصف علی واصف" },
    {id:"1968", category:"واصف علی واصف", body : "عجیب بات ہے کہ جسے ایک انسان تلاش کرتا۔ دوسرا اسی سے نجات چاہتا ہے۔ ", by : "واصف علی واصف" },
    {id:"1969", category:"واصف علی واصف", body : "اب بھی دنیا کی امید اور انسان کے مستقبل کا امکان تہذیب مشرق میں ہے۔ ", by : "واصف علی واصف" },
    {id:"1970", category:"واصف علی واصف", body : "زندگی کے جواز تلاش نہیں کیے جاتے صرف زندہ رہا جاتا ہے۔ زندگی گزارتے چلے جا جو زمل جائے گا۔ ", by : "واصف علی واصف" },
    {id:"1971", category:"واصف علی واصف", body : "ہم زندگی کے طویل سفر کی صعوبتیں اٹھاتے رہتے ہیں۔ اور انجام کار میں معلوم ہوتا ہے کہ ہم نے کا سفر گھر سے قبرستان تک ہی کیا ہے۔ ", by : "واصف علی واصف" },
    {id:"1972", category:"واصف علی واصف", body : "مذہب دراصل اخلاقیات میں الہیات کا شامل ہونا ہے۔ ", by : "واصف علی واصف" },
    {id:"1973", category:"واصف علی واصف", body : " اگر ملک کو ایک درخت سمجھایا جائے تو ایسا لگتا ہے۔ کہ ہر با مقصد انسان اپنی سہولت کے لئے اس کی ایک آدھ شاخ کاٹ لیتا ہے۔ ", by : "واصف علی واصف" },
    {id:"1974", category:"واصف علی واصف", body : "الفاظ کا نوں کے راستے دل پر اثر کرتے ہیں۔ اور دل پر اثر کے بعد اعضا و جوارح پر عمل کا حکم نازل ہوتا ہے۔ اور یوں انسان کا کردار بنتا رہتا ہے۔ ", by : "واصف علی واصف" },
    {id:"1975", category:"واصف علی واصف", body : "کوشش کو اگر ہاتھی کہ لیا جائے تو نصیب ابابیل کی نگری ہے۔ ", by : "واصف علی واصف" },
    {id:"1976", category:"واصف علی واصف", body : "اگر دل میں محبت آجائے تو زبان میں شائستگی آنا شروع ہو جاتی ہے۔ ", by : "واصف علی واصف" },
    {id:"1977", category:"واصف علی واصف", body : "باطن مصروف عبادت ہوتو ظاہر معصومیت کا پیکر بن جاتا ہے۔ ", by : "واصف علی واصف" },
    {id:"1978", category:"واصف علی واصف", body : "اگر مخلص دوست میسر نہ ہوتو ضمیر کی آواز حاصل کرنے کا ذریعہ آئینہ ہے۔ ", by : "واصف علی واصف" },
    {id:"1979", category:"واصف علی واصف", body : "جہاں اکثریت کاذب ہوو ہاں صداقت کا سفر کیسے ہوتا ہے۔ ", by : "واصف علی واصف" },
    {id:"1980", category:"واصف علی واصف", body : "والدین کی آواز میں ضمیر کی آواز کا ہونا لازمی ہے۔ ", by : "واصف علی واصف" },
    {id:"1981", category:"واصف علی واصف", body : "ہم نے ان لوگوں کو اپنی موت کا غم دے کر جانا ہے کیوں نہ ان کو زندگی ہی میں کوئی خوشی دی جائے۔ ", by : "واصف علی واصف" },
    {id:"1982", category:"واصف علی واصف", body : "ایک آدمی نے ایک کتاب پڑھ لی ، وہ ایک فرقہ بن گیا۔ دوسرے نے دوسری کہانی پڑھ لی وہ دوسرا فرقہ بن گیا۔ ", by : "واصف علی واصف" },
    {id:"1983", category:"واصف علی واصف", body : "سچی اقلیت کاذب اکثریت سے بہتر ہے۔ ", by : "واصف علی واصف" },
    {id:"1984", category:"واصف علی واصف", body : "ابتدائی زمانوں میں پیشیے مزاج کے مطابق بنائے گئے تھے مثلاََمعلم فطرتا معلم ہوتے تھے۔ ", by : "واصف علی واصف" },
    {id:"1985", category:"واصف علی واصف", body : "ہم اپنے مفاد کوقوم کے مفاد پر قربان کرنا سیکھ لیں تو قوم ترقی کرنا شروع کر دے گی۔ ", by : "واصف علی واصف" },
    {id:"1986", category:"واصف علی واصف", body : "عظیم لوگوں کے ساتھ وابستگی اس وقت خطرناک ہوسکتی ہے۔ جب تک وہ عظیم لوگ ایک مذہبی زندگی نہ گزار رہے ہوں۔ ", by : "واصف علی واصف" },
    {id:"1987", category:"واصف علی واصف", body : " لوگوں نے سامان کو پکڑ رکھا ہے اور سامان نے لوگوں کو۔ ", by : "واصف علی واصف" },
    {id:"1988", category:"واصف علی واصف", body : "کسی چیز کو روکنے کے لئے خود رکنا پڑتا ہے۔ ", by : "واصف علی واصف" },
    {id:"1989", category:"واصف علی واصف", body : "انسان کی ملکیت اس کی مالک ہوگئی ہے۔ ", by : "واصف علی واصف" },
    {id:"1990", category:"واصف علی واصف", body : "ایسی بھی راتیں آتی ہیں کہ رات کٹ جاتی ہے اور سورج نہیں نکلتا، ایسے بھی دن آئے کہ سورج ڈوب گیا۔ روشنی باقی رہی۔ ", by : "واصف علی واصف" },
    {id:"1991", category:"واصف علی واصف", body : "کوئی انسان اللہ کے بغیر نہیں اور اللہ ہر انسان کے علاوہ ہے۔ ", by : "واصف علی واصف" },
    {id:"1992", category:"واصف علی واصف", body : "خزانے لامحدود ہیں لیکن انسان کے پاس وقت محدود ہے ۔", by : "واصف علی واصف" },
    {id:"1993", category:"واصف علی واصف", body : "اگر آپ کی نگاہ بلند ہونے سے قاصر ہے تو اپنے پاو ¿ں کے پاس دیکھو کوئی نہ کوئی چیز آپ کی توجہ کی محتاج ہوگی۔ ", by : "واصف علی واصف" },
    {id:"1994", category:"واصف علی واصف", body : "کائنات سے توجہ طلب کرنا اتنا اہم نہیں، جتنا اس کو توجہ دینا۔ ", by : "واصف علی واصف" },
    {id:"1995", category:"واصف علی واصف", body : "لوگ دوست کو چھوڑ دیتے ہیں۔ بحث کو نہیں چھوڑتے۔ ", by : "واصف علی واصف" },
    {id:"1996", category:"واصف علی واصف", body : "جب ہم اللہ کا ذکر کرتے ہیں تو اس کے اپنے ارشاد کے مطابق وہ ہمارا ذکر کرتا ہے۔ ", by : "واصف علی واصف" },
    {id:"1997", category:"واصف علی واصف", body : "نیکی دراصل انسانوں کے ساتھ نیک سلوک کانا م ہے، خالی نیکی تو کوئی نیکی نہیں۔ ", by : "واصف علی واصف" },
    {id:"1998", category:"واصف علی واصف", body : "لوگ حکمران بنا چاہتے ہیں لیکن بنے ہوئے حکمرانوں کے خلاف نفرت رکھتے ہیں۔ ", by : "واصف علی واصف" },
    {id:"1999", category:"واصف علی واصف", body : "عید کی خوش کسی مال سے پیدا نہیں ہوتی۔ وہ تو روزہ رکھنے والوں کو نصیب ہوتی ہے۔ ", by : "واصف علی واصف" },
    {id:"2000", category:"واصف علی واصف", body : "زبان وہ بات کہہ ہی نہیں سکتی جو سکوت سے بیان ہوتا ہے۔ ", by : "واصف علی واصف" },
    {id:"2001", category:"واصف علی واصف", body : "اگرعشق زندہ ہوتو نفس کا اثر ختم ہو جاتا ہے۔ ", by : "واصف علی واصف" },
    {id:"2002", category:"واصف علی واصف", body : "موت یہ نہیں کہ سانس ختم ہو جائے۔ اصل موت تو یہ ہے کہ ہمیں یاد کرنے والا کوئی نہ ہو۔", by : "واصف علی واصف" },
    {id:"2003", category:"واصف علی واصف", body : "جب تک سچے لوگوں کی اکثریت نہیں ہوتی ، جمہوری فیصلہ غلط ہیں۔ ", by : "واصف علی واصف" },
    {id:"2004", category:"واصف علی واصف", body : "چھن جانے کے بعد بہشت کی قدر ہوتی ہے۔ ", by : "واصف علی واصف" },
    {id:"2005", category:"واصف علی واصف", body : "اللہ کا کلام کسی اور کے کلام کے مقابلہ میں اتنا ہی بڑا ہے جتنا اللہ خود، اسی طرح پیغمبر ﷺکی بات کو باتوں کا پیغمبر سمجھو۔ ", by : "واصف علی واصف" },
    {id:"2006", category:"واصف علی واصف", body : "سب سے موزوں نصیحت تو یہی ہے کے نصیحت سننے والے میں نصیحت کا شوق ہو۔ ", by : "واصف علی واصف" },
    {id:"2007", category:"واصف علی واصف", body : "اللہ کی تلاش میں پہلا قدم ہی آخری قدم ہے۔ ", by : "واصف علی واصف" },
    {id:"2008", category:"واصف علی واصف", body : "زندگی ایسا جلوہ ہے کہ جسے پوری طرح دیکھا بھی نہیں جانتا۔ اور پوری طرح چھوڑا بھی نہیں جاسکتا۔ ", by : "واصف علی واصف" },
    {id:"2009", category:"واصف علی واصف", body : "دنیا کے خلاف فریادنہ کر یں کوشش کریں کہ کوئی آپ کے خلاف فریاد نہ کرے۔ ", by : "واصف علی واصف" },
    {id:"2010", category:"واصف علی واصف", body : "ہم زندگی بھر زندہ رہنے کے فارمولے سیکھتے رہتے ہیں۔ اور جب زندگی اندر سے ختم ہو جاتی ہے ، ہم بے بس ہو جا تے ہیں۔ ", by : "واصف علی واصف" },
    {id:"2011", category:"واصف علی واصف", body : "امیر کی صداقت قوم میں صداقت فکر پیدا کر دیتی ہے۔ ", by : "واصف علی واصف" },
    {id:"2012", category:"واصف علی واصف", body : "بیج میں درخت کو دیکنا ہر آدمی کا کام نہیں ہے۔ یہ سعادت بھی عطائے رحمانی ہے۔ ", by : "واصف علی واصف" },
    {id:"2013", category:"واصف علی واصف", body : "جب عذاب آنے والا ہو توبہ چھن جاتی ہے۔ ", by : "واصف علی واصف" },
    {id:"2014", category:"واصف علی واصف", body : "ہم اپنے نظام عدل کو خدائی نظام عدل کے مطابق بنائیں۔ نہ کہ خدائی نظام عدل کو اپنے تقاضوں کے مطابق۔ ", by : "واصف علی واصف" },
    {id:"2015", category:"واصف علی واصف", body : "دولت عزت پیدا نہیں کرتی، دولت خوف پیدا کرتی ہے۔ ", by : "واصف علی واصف" },
    {id:"2016", category:"واصف علی واصف", body : "نفس کو اکسانے کا عمل آنکھوں سے شروع ہوتا ہے۔ اور پھر انسان ایک درندے کی طرح اپنے شکار کی تلاش میں سرگرداں ہو جاتا ہے۔ ", by : "واصف علی واصف" },
    {id:"2017", category:"واصف علی واصف", body : "اکثریت کو صداقت شناس کیا جائے۔ اس میں حق گوئی اور بے با کی پیدا کی جائے۔۔ یہ مرحلہ طے ہو جائے تو جمہوریت سے بہتر کیا ہوسکتا ہے۔ ", by : "واصف علی واصف" },
    {id:"2018", category:"واصف علی واصف", body : "ظاہر ضروری نہیں کہ باطن کاعکس ہو۔ ", by : "واصف علی واصف" },
    {id:"2010", category:"واصف علی واصف", body : "خالق کے خیال کو چھوڑ کرمخلوق کے خیال میں گم ہونے والا انسان دین و دنیا کے خسارے میں رہتا ہے۔ ", by : "واصف علی واصف" },
    {id:"2020", category:"واصف علی واصف", body : "رحمت حق اس شخص کی تلاش میں رہتی ہے۔ جس کی آنکھ پرنم رہتی ہے۔ ", by : "واصف علی واصف" },
    {id:"2021", category:"واصف علی واصف", body : "ہم پیا نے بناتے رہتے ہیں لیکن خو دکو ماپنے کا وقت نہیں رکھتے۔ ", by : "واصف علی واصف" },
    {id:"2022", category:"واصف علی واصف", body : "ایک سماج میں امیر اور غریب کے درمیان جتنا فاصلہ بڑھتا جائے گا۔ اتنی ہی اس سماج میں کرپشن بڑھتی جائے گی۔ ", by : "واصف علی واصف" },
    {id:"2023", category:"واصف علی واصف", body : "گناہ کی تلاش ہی تو گناہ ہے۔ ", by : "واصف علی واصف" },
    {id:"2024", category:"واصف علی واصف", body : "بلند فطرت انسان پست حالات سے گزریں ، تو بھی ان کا مزاج پست نہیں ہوتا۔ ", by : "واصف علی واصف" },
    {id:"2025", category:"واصف علی واصف", body : "ہم توقعات رکھتے ہیں کہ لوگ ہمارے توقعات پر پورا اتر یں۔ ہمارے تقاضوں کو پورا کریں لیکن ہم خود کسی کی خواہش پر پورے نہیں اترتے۔ ", by : "واصف علی واصف" },
    {id:"2026", category:"واصف علی واصف", body : "آج کے مسلمان، ان لوگوں کا نام ادب سے لیتے ہیں۔ ان کی زندگی کو نہیں اپناتے۔ ", by : "واصف علی واصف" },
    {id:"2027", category:"واصف علی واصف", body : "میری پیاس بجھانے والا پانی کتنے ہاتھوں کی محنت کا نتیجہ ہے۔ ", by : "واصف علی واصف" },
    {id:"2028", category:"واصف علی واصف", body : "عذاب کی انتہائی شکل یہ ہے کہ لوگوں کے دل سے دولت کی تسکین نکال لی جائے گی", by : "واصف علی واصف" },
    {id:"2029", category:"واصف علی واصف", body : "مقدس الفاظ کومنز م زبان میسر نہ ہوتو لفظ اپنی تاثیر کھو بیٹھتا ہے۔ ", by : "واصف علی واصف" },
    {id:"2030", category:"واصف علی واصف", body : "اگر اولاد نے مفت حاصل ہونے والا مال گناہ میں لگایا تو اس گناہ کی سزا پےسہ مہیا کرنے والوں کو بھی ملے گی۔ ", by : "واصف علی واصف" },
    {id:"2031", category:"واصف علی واصف", body : "وہ ملک ترقی کرتے ہیں جہاں اداروں کے سر براہ نیک فطرت لوگ ہوں۔ ", by : "واصف علی واصف" },
    {id:"2032", category:"واصف علی واصف", body : "کسی شخص سے اس کی فطرت کے خلاف کام لینا ظلم کہلاتا ہے۔ ", by : "واصف علی واصف" },
    {id:"2033", category:"واصف علی واصف", body : "اپنی نیک اعمالیوں پر ناز نہیں کرنا چاہیے۔ اوراللہ سے عدل کی بجائے فضل مانگتے رہنا چاہےے۔ ", by : "واصف علی واصف" },
    {id:"2034", category:"واصف علی واصف", body : "موت سے پہلے انسان مر نہیں سکتا۔ اور وقت مقررہ کے بعد زندہ نہیں رہ سکتا۔ ", by : "واصف علی واصف" },
    {id:"2035", category:"واصف علی واصف", body : "جس انسان نے ماں باپ کو پرورش کرتے ہوئے دیکھا۔ اور انہیں نہ مانا، اس نے خدا کو دیکھے بغیر کیا ماننا ہے۔ ", by : "واصف علی واصف" },
    {id:"2036", category:"واصف علی واصف", body : "غریب کے پاس تو اچھے زمانے کے آنے کی امید ہوسکتی ہے لیکن امیر کے لئے برے زمانے کے آجانے کا خوف ہمیشہ سر پر تلوار بن کر لٹکتا رہتا ہے۔ ", by : "واصف علی واصف" },
    {id:"2037", category:"واصف علی واصف", body : "انسان کی اصل فطرت کو بیدار ہونے کے لئے صحبت صالح درکار ہوتی ہے۔ ", by : "واصف علی واصف" },
    {id:"2038", category:"واصف علی واصف", body : " ہر چیز کو عزت کے ساتھ رہنے دیا جائے تو اپنی عزت بھی قائم رہتی ہے۔ ", by : "واصف علی واصف" },
    {id:"2039", category:"واصف علی واصف", body : "بد مزاج ہونا اتنا خطرناک نہیں جتنا بدتمیز ہو جانا، کیونکہ بد تمیز آدمی الفاظ کے غلط استعمال کا مجرم بھی ہے۔ ", by : "واصف علی واصف" },
    {id:"2040", category:"واصف علی واصف", body : "صالح فطرت لوگوں کو اہم مقامات پر فائز کرنے سے اہم نتائج حاصل کئے جا سکتے ہےں۔ ", by : "واصف علی واصف" },
    {id:"2041", category:"واصف علی واصف", body : "اللہ کی محبت کی انتہائی عملی شکل اللہ کے محبوب ﷺ کی اطاعت اور محبت میں ہے۔ ", by : "واصف علی واصف" },
    {id:"2042", category:"واصف علی واصف", body : "فطرت اس لئے نہیں بدلتی کہ اسے فاطر حقیقی نے نہ بدلنے کے لئے پید افرمایا ہے۔ ", by : "واصف علی واصف" },
    {id:"2043", category:"واصف علی واصف", body : "وقت کو وقت سے پہلے سمجھنے کے لئے وقت سے نکلنا پڑتا ہے۔ ", by : "واصف علی واصف" },
    {id:"2044", category:"واصف علی واصف", body : "دور سے نظر آنے والے مناظر قریب سے ویسے دکھائی نہیں دیتے۔ ", by : "واصف علی واصف" },
    {id:"2045", category:"واصف علی واصف", body : "ہمارا حاصل محدود ہے اور ہماری تمنائیں لامحدود ہیں۔ ", by : "واصف علی واصف" },
    {id:"2046", category:"واصف علی واصف", body : "مجبور ہوا کوئی بری بات نہیں، اور یہ پوچھو مجبور ہونا کوئی اچھی بات بھی نہیں۔ ", by : "واصف علی واصف" },
    {id:"2047", category:"واصف علی واصف", body : "ایک گھر میں پید اہونے والے اور ایک دستر خوان پر پلنے والے، ایک جیسا واقعہ اور ایک جیسی فطرت نہیں رکھتے۔ ", by : "واصف علی واصف" },
    {id:"2048", category:"واصف علی واصف", body : "ہماری بینائی کمزور ہو جائے تو چہروں کے چراغ بجھ جا تے ہیں۔ ", by : "واصف علی واصف" },
    {id:"2049", category:"واصف علی واصف", body : "ایک انسان نے کہا جب مر ہی جاتا ہے تو عمل کیا ہے؟ دوسرے نے کہا چونکہ مر ہی جانا ہے اسی لئے تو عمل ضروری ہے۔ ", by : "واصف علی واصف" },
    {id:"2050", category:"واصف علی واصف", body : "محبت مجبور کومختار بنادیتی ہے۔ ", by : "واصف علی واصف" },
    {id:"2051", category:"واصف علی واصف", body : "جب تک عوام میں حق پسند بن طلب ، اورحق آ گاہ لوگوں کی کثرت نہ ہو۔ جمہوریت ایک خطرناک کھیل ہے۔ ", by : "واصف علی واصف" },
    {id:"2052", category:"واصف علی واصف", body : "ترقی یافتہ ما لک وہ ہیں۔ جو خوف پیدا کرتے ہیں ترقی پذیر ممالک وہ ہیں۔ جو خوف زدہ رہنے پر مجبور ہیں۔ اور پسماندہ ممالک وہ ہیں، جنہیں خطرے کے احساس سے بھی آشنائی نہیں۔ ", by : "واصف علی واصف" },
    {id:"2053", category:"واصف علی واصف", body : "جب قائدین کی بہتات ہو جائے تو سمجھ لیجیے کہ قیادت کا فقدان پیدا ہو گیا۔ ", by : "واصف علی واصف" },
    {id:"2054", category:"واصف علی واصف", body : "موت سے زیادہ خوفناک موت کا ڈر ہے۔ ", by : "واصف علی واصف" },
    {id:"2055", category:"واصف علی واصف", body : "انسان پریشانی سے دو چارنہ بھی ہو تو بھی پریشانی سے آشنا ضرور ہوتا ہے۔ ", by : "واصف علی واصف" },
    {id:"2056", category:"واصف علی واصف", body : "پریشانی حالات سے نہیں خیالات سے پیدا ہوتی ہے۔ ", by : "واصف علی واصف" },
    {id:"2057", category:"واصف علی واصف", body : "وطن سے باہر رہنے والو کو وطن کی یا د پریشان کرتی ہے، وطن میں رہنے والوکو باہر جانے کی تمناپریشان رکھتی ہے۔ ", by : "واصف علی واصف" },
    {id:"2058", category:"واصف علی واصف", body : "اگر انسان تسلیم کرلے کہ اس کی زندگی کے ساتھ ہونے والے واقعات اور زندگی کا انجام خالق کے حکم سے ہے تو یہ پریشانی ختم ہوسکتی ہے۔ ", by : "واصف علی واصف" },
    {id:"2059", category:"واصف علی واصف", body : "آواز انسان کو دوسروں سے متعلق کرتی ہے ، اور خاموشی انسان کو اپنے آپ سے متعارف کرواتی ہے۔ ", by : "واصف علی واصف" },
    {id:"2060", category:"واصف علی واصف", body : "جتایا ہوا احسان ضائع ہو جاتا ہے۔ ", by : "واصف علی واصف" },
    {id:"2061", category:"واصف علی واصف", body : "عذاب اور عبرت کے الفاظ سنے میں بھی سخت ہیں، اور سمجھنے میں بھی۔ ", by : "واصف علی واصف" },
    {id:"2062", category:"واصف علی واصف", body : " جو کرتا ہے اللہ کرتا ہے اور اللہ جو کرتا ہے صحیح کرتا ہے۔ ", by : "واصف علی واصف" },
    {id:"2063", category:"واصف علی واصف", body : "عبادت وہاں نہیں پہنچاتی جہاں غم پہنچا دیتا ہے۔ ", by : "واصف علی واصف" },
    {id:"2064", category:"واصف علی واصف", body : "غم چھوٹے آدمی کوتوڑ دیتا ہے اور بڑے آدمی کو اور بڑا بنادیتا ہے۔ ", by : "واصف علی واصف" },
    {id:"2065", category:"واصف علی واصف", body : "ہمارے پاس بڑے اخبار ہیں، اور وہ خب کسی اخبار میں نہیں ہوتی۔ جس خبر کی ضرورت ہے۔", by : "واصف علی واصف" },
    {id:"2066", category:"قائداعظم محمد علی جناح", body : "دنیا میںدو قوتیں ہیں ،ایک تلوار اور دوسری قلم۔", by : "قائداعظم محمد علی جناح" },
    {id:"2067", category:"قائداعظم محمد علی جناح", body : "یقین، نظم و ضبط، اور بے لوث لگن کے ساتھ، دنیا کی ایسی کوئی چیز نہیں جو حاصل نہیں کی جا سکتی۔", by : "قائداعظم محمد علی جناح" },
    {id:"2068", category:"قائداعظم محمد علی جناح", body : "ناکامی میرے لئے ایک نامعلوم لفظ ہے۔", by : "قائداعظم محمد علی جناح" },
    {id:"2069", category:"قائداعظم محمد علی جناح", body : "کوئی بھی فیصلہ لینے سے پہلے سوبار سوچ لو، لیکن جب فیصلہ لے لو ، اس پے ڈٹ جاو۔", by : "قائداعظم محمد علی جناح" },
    {id:"2070", category:"قائداعظم محمد علی جناح", body : "میں درست فیصلہ لینے پر یقین نہیں رکھتا بلکہ فیصلہ لے کر اسے ایک بہترین فیصلہ ثابت کرتا ہوں۔ ", by : "قائداعظم محمد علی جناح" },
    {id:"2071", category:"قائداعظم محمد علی جناح", body : "امید اچھی رکھو ، لیکن تےاری برے حالات کے حساب سے کرو۔ ", by : "قائداعظم محمد علی جناح" },
    {id:"2072", category:"قائداعظم محمد علی جناح", body : "ہمیں ایک اےسی ریاست چاہیے جہاں ہم آزادی سے رہ سکےں، اور جہاں ہم اپنی مرضی سے اسلامی تہذیب اور اصولوں کے مطابق جی سکیں۔", by : "قائداعظم محمد علی جناح" },
    {id:"2073", category:"قائداعظم محمد علی جناح", body : "امید ، حوصلہ اور جرت....ےہی آپ سب کے لئے میرا پیغام ہے۔ ہم پر عزم ہو کر اپنے وسائل دانستہ اور منظم طریقے سے عمل میں لاتے ہوئے سنگین مسائل کو حل کر سکتے ہیں۔ ", by : "قائداعظم محمد علی جناح" },
    {id:"2074", category:"قائداعظم محمد علی جناح", body : "دنیا میں ایسی کوئی طاقت نہےںجو پاکستان کا وجود ختم کر سکے ۔", by : "قائداعظم محمد علی جناح" },
    {id:"2075", category:"قائداعظم محمد علی جناح", body : "کوئی قوم جدوجہد اور قربانیوں کے بغیر آزادی حاصل نہیں کرسکتی۔ ", by : "قائداعظم محمد علی جناح" },
    {id:"2076", category:"قاسم علی شاہ", body : "کسی کو جان سے مارنے کی ضرورت نہیں صرف اس کی امید کو ختم کر دیں وہ روز ہی مرتا رہے گا۔ ", by : "قاسم علی شاہ" },
    {id:"2077", category:"قاسم علی شاہ", body : "بڑے لوگ رات کو جاگتے ہیں، محنت کرتے ہیں اور عام آدمی اسی وقت میں نیند کے مزے لے رہا ہو تا ہے۔ ", by : "قاسم علی شاہ" },
    {id:"2078", category:"قاسم علی شاہ", body : "وعدہ کریں کہ نہ کبھی محنت کرنا چھوڑیں گے اور نہ ہی خواب دیکھنا ترک کریں گے خواب دیکھنے والا محنتی انسان ترقی ضرور کرتا ہے۔ ", by : "قاسم علی شاہ" },
    {id:"2079", category:"قاسم علی شاہ", body : "ایک اچھا مصنف بھی تحریر کو صفحات پر نہیں اپنے پڑھنے والے کے دلوں پر لکھ رہا ہوتا ہے۔ ", by : "قاسم علی شاہ" },
    {id:"2080", category:"قاسم علی شاہ", body : "اچھا کرنا، اچھا کہنے سے بہتر ہے۔ ", by : "قاسم علی شاہ" },
    {id:"2081", category:"قاسم علی شاہ", body : "دانا شخص چھوٹا کام کرتے ہوئے بھی خوشی محسوس کرتا ہے کیونکہ وہ جانتاہے ایک طویل سفر کی ابتدا ہی پہلا قدم اٹھانے سے ہوتی ہے۔ ", by : "قاسم علی شاہ" },
    {id:"2082", category:"قاسم علی شاہ", body : "کل جو پھول کھلیں گے ان کے بیج آج آپ کے ہاتھ میں ہیں اس لیے آج ہی ان کو بو دیں آپ کو \"کل\" شاندار ملے گا۔ ", by : "قاسم علی شاہ" },
    {id:"2083", category:"قاسم علی شاہ", body : "راستے پر کنکر ہوں تو اچھا جوتا پہن کے چلا جا سکتا ہے جوتے میں ایک بھی کنکر ہو تو اچھی سڑک پر بھی چلتا مشکل ہوتا ہے۔ہم باہر کی مشکلات سے نہیں اندر کیا کمزوریوں سے ہارتے ہیں۔ ", by : "قاسم علی شاہ" },
    {id:"2084", category:"قاسم علی شاہ", body : "آسانیوں کی تلاش ضرور کریں ان آسانیوں میں دوسروں کو بھی شریک کریں۔ اس طرح اللہ تعالی آپ کو ہمیشہ آسانیوں میں ہی رکھے گا۔ ", by : "قاسم علی شاہ" },
    {id:"2085", category:"قاسم علی شاہ", body : "زندگی بدلنی ہو تو ایک جملے، ایک واقعہ اور ایک استادسے بدل جاتی ہے۔ نہ بدلنی ہو تو ہزار کتابیں، کئی دانشور اور واقعات مل کر بھی آپ کا بال بیکا نہیں کر سکتے۔ ", by : "قاسم علی شاہ" },
    {id:"2086", category:"قاسم علی شاہ", body : "کامیابی کا سفر ہوتا ہی مشکل ہے چڑھائی کہاں آسان ہوتی ہے بلندی پانے کیلئے چڑھائی کو طے کرنا پڑتا ہے۔ ", by : "قاسم علی شاہ" },
    {id:"2087", category:"قاسم علی شاہ", body : "بد نصیبی بڑی خوبصورت شکل میں آتی ہے اور ہم اسے نہیں پہچان پاتے۔۔۔۔!! اسی طرح خوش نصیبی بظاہر خوبصورت شکل میں نہیںہوتی اور ہم اسے بھی پانے سے انکار کر دیتے ہیں۔ ", by : "قاسم علی شاہ" },
    {id:"2088", category:"قاسم علی شاہ", body : "لوگ مقصد کا انتخاب کرتے ہوئے ڈرتے ہیں انہیں صرف رکاوٹیں نظر آتی ہیں۔ یاد رکھے رکاوٹیں تب نظر آتی ہیں جب آپ اپنے مقصد سے نظریں ہٹا لیتے ہیں۔ ", by : "قاسم علی شاہ" },
    {id:"2089", category:"قاسم علی شاہ", body : "کائنات کے سب سے بڑے سخی پر یقین آپ کو سختی بنا دیتا ہے۔ ", by : "قاسم علی شاہ" },
    {id:"2090", category:"قاسم علی شاہ", body : "آپ کے افکار اور نظریات کا اندازہ آپ کی گفتگوسے لگایا جا سکتا ہے۔ ", by : "قاسم علی شاہ" },
    {id:"2091", category:"قاسم علی شاہ", body : "بندہ، بندے کے ساتھ نہیں بندے کی عادتوں کے ساتھ رہتا ہے۔ ", by : "قاسم علی شاہ" },
    {id:"2092", category:"قاسم علی شاہ", body : "ناکامی تکرار کرنے سے بڑھتی ہے خاموشی اختیار کرنے سے کم ہوتی ہے صبر کرنے سے ختم ہوتی ہے شکر کرنے سے کامیابی میں بدل جاتی ہے۔ ", by : "قاسم علی شاہ" },
    {id:"2093", category:"قاسم علی شاہ", body : "امن و سکون آسان سے نہیں اترتا یہ پیدا کرنا پڑتا ہے۔ ", by : "قاسم علی شاہ" },
    {id:"2094", category:"قاسم علی شاہ", body : "تمنا اور شوق کے بغیر سبق کا یاد ہونا دراصل لا علمی ہے یہ وہ کھانا ہے جسے آپ نے بغیر بھوک کے کھا لیا ہے۔یقینا نہ تو اس سے آپ لطف اندوز ہوں گے اور نہ ہی آپ اس سے فائدہ اٹھا سکیں گے۔ ", by : "قاسم علی شاہ" },
    {id:"2095", category:"قاسم علی شاہ", body : "بعض اوقات فیصلہ چھوٹا لگتا ہے جیسے جیسے وقت گزرتا ہے تو پتا چلتا ہے کہ وہ فیصلہ چھوٹا نہیں تھا بلکہ بہت بڑا فیصلہ تھا۔ ", by : "قاسم علی شاہ" },
    {id:"2096", category:"قاسم علی شاہ", body : "بچے پالنا کوئی بڑا کام نہیں، جانور اور پرندے بڑے بہتر انداز میں یہ کام صدیوں سے کرتے آرہے ہیں بڑا کام بچوں کی تربیت ہے ", by : "قاسم علی شاہ" },
    {id:"2097", category:"قاسم علی شاہ", body : "تربیت توجہ اور وقت مانگتی ہے۔ ", by : "قاسم علی شاہ" },
    {id:"2098", category:"قاسم علی شاہ", body : "تعلیمی ادارہ ایک ٹول ہوتا ہے جس کے ذریعے آپ کو کچھ کام کر کے دکھانا ہوتے ہیں۔ آپ اس ٹول کو میں استعال نہیں کر رہے تو پھر وہ چاہے یونیورسٹی بھی بن جائے، اس کا کوئی فائدہ نہیں ہے۔ ", by : "قاسم علی شاہ" },
    {id:"2099", category:"قاسم علی شاہ", body : "گرو حال میں ملے تو ماضی بھلا دیتا ہے اور مستقبل سنوار دیتا ہے۔ ", by : "قاسم علی شاہ" },
    {id:"2100", category:"قاسم علی شاہ", body : "ایک راستے کا انتخاب کا مطلب یہ ہے کہ آپ نے کئی راستے چھوڑ دیئے ہیں۔ کامیابی کی اصل قیمت کئی راستے چھوڑ دینا ہے اور اسی کا دوسرا نام کشتیاں جلا دینا ہے۔ ", by : "قاسم علی شاہ" },
    {id:"2101", category:"قاسم علی شاہ", body : "اگر استاد بظاہر نالائق پے میں فقط یہ یقین پیدا کر دے وہ لائق ہو سکتا ہے تو بچے کی تقدیر بدل سکتی ہے۔ ", by : "قاسم علی شاہ" },
    {id:"2102", category:"قاسم علی شاہ", body : "کمزور انسان گلہ کرتا ہے کہ حالات ہی ایسے تھے میرے خواب چھن گئے۔ بہادر انسان کہتا ہے انہی حالات نے مجھے خواب دیکھنے پر مجبور کیا تھا۔ ", by : "قاسم علی شاہ" },
    {id:"2103", category:"قاسم علی شاہ", body : "آپ کی زندگی میں آنے والے اساتذہ کرام میں بہترین استاد وہ ہے جو آپ کے سوچنے کا انداز بدل دے۔ ", by : "قاسم علی شاہ" },
    {id:"2104", category:"قاسم علی شاہ", body : "کتاب سے انقلاب ممکن ہے صرف کتابیں اکٹھی کرنے سے کوئی انقلاب نہیں آنے والا، نہ آپ کی ذات میں اور نہ ملک میں۔ ", by : "قاسم علی شاہ" },
    {id:"2105", category:"قاسم علی شاہ", body : "ہمارے نوجوانوں کو کیریر پلانگ با مقصد زندگی کی اہمیت نہیں بتائی جاتی۔ اس لیے وہ ڈگریوں کے انبار لگا لیتے ہیں عملی زندگی میں ناکام رہتے ہیں۔ ", by : "قاسم علی شاہ" },
    {id:"2106", category:"قاسم علی شاہ", body : "جن واقعات کو، جن لوگوں کو، جن نتائج کو اور جن حالات کو آپ مخلص ہو کر واقعی بدلنا چاہتے ہیں ان کے لئے دل سے دعا کریں۔ اپنا زاویہءنظر بدلے، زندگی شکوے کرنے سے نہیں بدلے گی۔ ", by : "قاسم علی شاہ" },
    {id:"2107", category:"قاسم علی شاہ", body : "ہم خامیاں تلاش کرنے کے عادی ہو چکے ہیں مکھی کی طرح ہمیں صرف گند ہی تلاش کرنے کی عادت ہو گئی ہے۔ ایک جانور بنے اور پھول کی تلاش کریئے۔ ", by : "قاسم علی شاہ" },
    {id:"2108", category:"قاسم علی شاہ", body : "آپ کی دولت اور کامیابی کسی کام کی نہیںاگر یہ دوسروں کی مدد اور آسانی کیلئے استعمال نہیں ہورہی۔ ", by : "قاسم علی شاہ" },
    {id:"2109", category:"قاسم علی شاہ", body : "اگر کچھ بننا چاہتے ہو تو یاد رکھیںفیلڈ کا سکوپ نہیں ہو تا ٹیلنٹ کا سکوپ ہوتا ہے۔ ", by : "قاسم علی شاہ" },
    {id:"2110", category:"قاسم علی شاہ", body : "دوستوں کی طرح کتابوں کا انتخاب بھی پوری احتیاط اور توجہ سے کرنا چاہئے کیونکہ ایک اچھی کتاب آپ کی تقدیر بدل سکتی ہے۔ ", by : "قاسم علی شاہ" },
    {id:"2111", category:"قاسم علی شاہ", body : "آپ کی محنت سے اگر کسی کو فائدہ ہو رہا ہے پھر بہت اچھی بات ہے لیکن اگر کسی کو کوئی فائدہ نہیں ہو رہا پھر اس محنت سے پیچھے ہٹ جایئے۔ ", by : "قاسم علی شاہ" },
    {id:"2112", category:"قاسم علی شاہ", body : "ہر انسان میں ایک تڑپ اور لگن موجود ہوتی ہے یہی تڑپ اور لگن اس کو عظمت تک لے جا سکتی ہے بس چھوٹا سا کام یہ کر لیں کہ اس تڑپ اور لگن کو کوئی سمت دے دیں۔ ", by : "قاسم علی شاہ" },
    {id:"2113", category:"قاسم علی شاہ", body : "اگر ہمیں لوگوں کے ساتھ ڈیل کرنا آجائے تو ہماری زندگی کے پچاس فیصد مسائل حل ہو جائیں اور ہماری کارکردگی ننانوے فیصد بہتر ہو جائے۔ ", by : "قاسم علی شاہ" },
    {id:"2114", category:"قاسم علی شاہ", body : "جس طرح رات کے بعد دن نے خود بخود آجانا ہے۔ اسی طرح آپ کی بے لوث خدمت کے بعد مالک نے آپ کو اپنی رحمت سے ضرور نوازتا ہے۔ دوسروں کو بے لوث دینا اللہ تعالی سے شکر گزاری کی علامت بھی ہے۔ ", by : "قاسم علی شاہ" },
    {id:"2115", category:"قاسم علی شاہ", body : "آپ کا سفر بھی ذاتی ہے اور منزل بھی۔ اس ذاتی سفر اور اپنی منزل کے لئے آپ کو کئی لوگوں کا ساتھ چاہیے۔ ", by : "قاسم علی شاہ" },
    {id:"2116", category:"قاسم علی شاہ", body : "الفاظ اتنی طاقت کے حامل ہوتے ہیں مقررین اور لیڈران لفظوں کے استعمال سے لوگوں کو تحریک دیتے ہیں۔ ", by : "قاسم علی شاہ" },
    {id:"2117", category:"قاسم علی شاہ", body : "جاہل ہونے کی سب سے بڑی علامت ہے آپ کو وہم ہو جائے کہ مجھے پتا ہے۔ ", by : "قاسم علی شاہ" },
    {id:"2118", category:"اشفاق احمد", body : "جب کھونے کی نوبت آتی ہے پانے کی قیمت سمجھ آتی ہے۔ ", by : "اشفاق احمد" },
    {id:"2119", category:"اشفاق احمد", body : "ہماری نظر دوسروں کے چھوٹے چھوٹے عیوب پر ہوتی ہے۔ اپنے بڑے بڑے عیب دکھائی نہیں دیتے، اپنے بدن پر سانپ بچھو لٹک رہے ہیں ان کی پرواہ نہیں اور ہم دوسروں کی مکھیاں ا ڑانے کی فکر میں ہیں۔ ", by : "اشفاق احمد" },
    {id:"2120", category:"اشفاق احمد", body : "اپنی آنا کو کسی کے سامنے پامال کر دینا مجازی عشق ہے اور اپنی انا کو بہت سوں کے آگے پامال کر دینا عشق حقیقی ہے۔ ", by : "اشفاق احمد" },
    {id:"2121", category:"اشفاق احمد", body : "جب آپ ناخوش ہوتے ہیں، ناراض اور ناساز ہوتے ہیں تو ہر شئے دھندلی پڑ جاتی ہے نہ باہر کا حسن نظر آتا ہے نہ اندر کا۔۔!!۔ آوازیں مدھم پڑ جاتی ہیں خوشبو میں ماند ہو جاتی ہیں۔ ", by : "اشفاق احمد" },
    {id:"2122", category:"اشفاق احمد", body : "انسان پر کئی طرح کا بوجھ ہوتا ہے، ہمارے اوپر سب سے بڑا بوجھ تکبر کا ہوتا ہے اور ہم یہ جانے بغیر کے اللہ کے نزدیک کون بڑا ہے اور کون گھٹیا، فیصلے خود ہی کرتے رہتے ہیں۔ ", by : "اشفاق احمد" },
    {id:"2123", category:"اشفاق احمد", body : "جب سورج غروب ہونے لگتا ہے تو چھوٹے ا آدمیوں کے سائے بھی بڑے ہو جاتے ہیں۔ ", by : "اشفاق احمد" },
    {id:"2124", category:"اشفاق احمد", body : "زمانے نے عجب پلٹا کھایا ہے، پہلے لوگ عبادت چھپا کر اس لئے کرتے تھے کہ ہمیں شہرت نہ ہو جائے اور اب اس لئے چپ کرکرتے ہیں ہمیں لوگ مذاق نہ اڑائیں۔ ", by : "اشفاق احمد" },
    {id:"2125", category:"اشفاق احمد", body : "جب انسان کا عشق لا حاصل رہتا ہے تو وہ دریا کو ا چھوڑ کر سمندر کا پیاسا بن جاتا ہے۔ چھوٹے راستے سے ہٹ کر بڑے مدار کا مسافر بن جاتا ہے۔ تب اس کی طلب، اس کی ترجیحات بدل جاتیں ہیں۔ ", by : "اشفاق احمد" },
    {id:"2126", category:"اشفاق احمد", body : "انسان ایک ایسا غافل منصوبہ ساز ہے وہ اپنی ساری پلاننگ میں بھی اپنی موت کو شامل ہی نہیں کرتا۔ ", by : "اشفاق احمد" },
    {id:"2127", category:"اشفاق احمد", body : "ہر ایک چیز اپنے وقت پر ہی اچھی لگتی ہے نیکی کمانے کا وقت جوانی ہے افسوس ناک بات ہے کہ ہم نیکی اس وقت کرتے ہیں جب برائی کے قابل نہیں رہتے۔ ", by : "اشفاق احمد" },
    {id:"2128", category:"اشفاق احمد", body : "جب تم کسی میں کوئی عیب دیکھو تو اسے اپنے اندر تلاش کرو اوراگر اسے اپنے اندر پاو تو اسے نکال دو، یہ حقیقی تبلیغ ہے۔ ", by : "اشفاق احمد" },
    {id:"2129", category:"اشفاق احمد", body : "درد وہ ہوتا ہے جو ہمیں دوسروں کو تکلیف میں دیکھ کر ہو تا ہو، ورنہ اپنا درد تو جانوروں کو بھی محسوس ہوتا ہے۔ ", by : "اشفاق احمد" },
    {id:"2130", category:"اشفاق احمد", body : "زندگی میں کبھی ہمدردی کے طلبگار نہ ہونا۔ خوش رہنا ، کلیلیں بھرنا اور تم کو محبت ملے گی۔ ہمدردی کے طالب کو کبھی بھی ہمدردی نہیں ملتی، ہمدردی تمہارے خزانے کو کبھی بھی نہیں بھر سکتی۔ ", by : "اشفاق احمد" },
    {id:"2131", category:"اشفاق احمد", body : "ایک گھمنڈ اور تکبر سے لبریز علم اس بات کی نشاندہی کرتا ہے کہ علم چوری کا ہے اور دوسروں سے لوٹا گیا ہے ۔", by : "اشفاق احمد" },
    {id:"2132", category:"اشفاق احمد", body : "میں جانتا ہوں کہ میں کچھ تو ہوں کیونکہ میرا رب کوئی بھی چیز بے کار نہیں بناتا۔ ", by : "اشفاق احمد" },
    {id:"2133", category:"اشفاق احمد", body : "اگر اللہ نے وہ لے لیا جسے کھونے کا تم تصور بھی نہیں کر سکتے تھے تو یقینا وہ کچھ ایسا بھی دے گا جسے پانے کا تم نے سوچا بھی نہ ہو گا۔ ", by : "اشفاق احمد" },
    {id:"2134", category:"اشفاق احمد", body : "وہ دین کسی کو کیا نقصان پہنچائے گا، جس میں راستے سے پتھر ہٹانے پر بھی ثواب ملتا ہو۔ ", by : "اشفاق احمد" },
    {id:"2135", category:"اشفاق احمد", body : "کتنا ہی خوبصورت احساس ہے نا کہ جب ہم اللہ سے اپنے دل کی بات کہتے ہیں تو وہ سب کچھ پہلے سے جانتے ہوئے بھی ہماری بات سننا چاہتا ہے۔ ", by : "اشفاق احمد" },
    {id:"2136", category:"اشفاق احمد", body : "یہ جو مایوسی کا بھنور ہوتا ہے یہ بڑا ظالم گرداب ہوتا ہے اس کے کنارے کنارے پر آدمی گھومتا رہتا ہے تو بچنے کی کچھ امید ہو جاتی ہے لیکن جب بہت گہرا اتر جائے تو پھر بیچنے کی کوئی اس امید باقی نہیں رہتی۔ ", by : "اشفاق احمد" },
    {id:"2137", category:"اشفاق احمد", body : "اچھی بات تو سب کو اچھی لگتی ہے لیکن جب ہمیں کسی کی بری بات بھی بری نا لگے تو سمجھ لینا کہ ہمیں اس سے محبت ہے۔ ", by : "اشفاق احمد" },
    {id:"2138", category:"اشفاق احمد", body : "لذتیں وقتی اور ہنگائی ہوتی ہیں لیکن مسرتیں اور شادمانیاں مستقل ہوتی ہیں جبکہ لذتوں کا جسم سے تعلق ہوتا ہے اور خوشیوں کا روح سے۔ ", by : "اشفاق احمد" },
    {id:"2139", category:"اشفاق احمد", body : "ہم خود کو ہی سنوار لیں، سدھار لیں، معاشرے پر ہمارا ےہی احسان کافی ہو گا۔ ", by : "اشفاق احمد" },
    {id:"2140", category:"اشفاق احمد", body : "فاتحہ لوگوں کے مرنے پر نہیں بلکہ احساس کے مرنے پہ پڑھنی چاہئے کیونکہ لوگ مر جائیں تو صبر آجاتا ہے۔ مگر احساس مر جائے تو معاشرہ مر جاتا ہے۔ ", by : "اشفاق احمد" },
    {id:"2141", category:"اشفاق احمد", body : "تکبر کبھی علم کو پھلنے پھولنے کا موقع نہیں دیتا جو علم عاجز نہیں، منکسر نہیں، وہ محض ایک دھوکہ ہے۔ ", by : "اشفاق احمد" },
    {id:"2142", category:"اشفاق احمد", body : "مجھے ان لوگوں کی پرواہ نہیں جو میرے دشمن ہیں ، محتاط ان لوگوں سے رہتا ہوں، جو میرے ساتھ ہوتے ہوئے ذہن میں بغض اور نفرت رکھتے ہیں۔ ", by : "اشفاق احمد" },
    {id:"2143", category:"اشفاق احمد", body : "جس قدر کوئی شخص اپنے اندر تبدیلی پیدا کرنے سے محروم ہو گا اور خود کو بدلنے سے قاصر ہو گا۔ اس قدر وہ دوسروں کو بدلنے پر زور دے گا۔ ", by : "اشفاق احمد" },
    {id:"2144", category:"اشفاق احمد", body : "اکثر لوگوں میں تکبر ہوتا ہے ان کا نفس ان کو پتا نہیں چلنے دیتا۔ ", by : "اشفاق احمد" },
    {id:"2145", category:"اشفاق احمد", body : "جب اندر سے مر جاتا ہے تو وہ حد سے زیادہ خوش اخلاق ہو جاتا ہے۔ ", by : "اشفاق احمد" },
    {id:"2146", category:"اشفاق احمد", body : "ہر چیز کا صدقہ ہوتا ہے اور عقل کا صدقہ یہ ہے جاہل کی بات کو برداشت کرو۔ ", by : "اشفاق احمد" },
    {id:"2147", category:"اشفاق احمد", body : "انسان کے دل میں اللہ کی مہربانی سے ایک ایسا تار ضرور موجود ہے کہ وہ لوٹ کر اللہ کی طرف ضرور آتا ہے چاہے وہ کسی بھی روپ میں آئے۔ ", by : "اشفاق احمد" },
    {id:"2148", category:"اشفاق احمد", body : "تم یہ کیسے کہ سکتے ہو کہ فلاں گھٹیا ہے اور فلاں بڑھیا، اس کا درجہ بلند ہے اور اس کا کمتر۔۔!! یہ بات انسان کے طے کرنے کی نہیں ہے۔ ", by : "اشفاق احمد" },
    {id:"2149", category:"اشفاق احمد", body : "بارش ہوتی ہے تو خالی گڑھے باران رحمت سے خود بخود بھر جاتے ہیں اور موٹے موٹے اونچے ٹیلے ویسے کے ویسے سوکھے ہی رہ جاتے ہیں، اپنے آپ کو خالی رکھو خالی جھولی ہی بھری جاتی ہے۔ ", by : "اشفاق احمد" },
    {id:"2150", category:"اشفاق احمد", body : "خاموشی ایک دنیا ہے، اس میں اگر آپ داخل ہو سکتے ہیں تو پھر ہی آپ اس کا مزہ لے سکتے ہیں۔ ", by : "اشفاق احمد" },
    {id:"2151", category:"اشفاق احمد", body : "جب تک ہم اللہ کی ذات سے رابطہ اور تعلق استوار نہیں کریں گے زندگی کی سلوٹیں بھی دور نہیں ہوں گی۔ ", by : "اشفاق احمد" },
    {id:"2152", category:"اشفاق احمد", body : "اللہ تعالی کے کاموں میں آپ دخل نہیں دے سکتے کیونکہ کہ اللہ عظیم تر ہے۔ وہ جو کرتا ہے اور فرماتا ہے وہی ٹھیک اور بہتر ہوتا ہے اگر آپ اس کی تحقیقات اپنی انسانی عقل سے کریں گے تو وہ آپ کے بس کا روگ نہیں۔ ", by : "اشفاق احمد" },
    {id:"2153", category:"اشفاق احمد", body : "فقط ایک عورت کو دیکھ کر اپنا ایمان کھو دینے والی قوم کے نوجوان۔۔۔ !! اپنے بنیادی حقوق کے حصول کے لیے ایمانی طاقت کہاں سے لائیں گے۔ ", by : "اشفاق احمد" },
    {id:"2154", category:"اشفاق احمد", body : "ڈگریاں در حقیقت تعلیمی اخراجات کی رسیدیں ہیں علم تو وہی ہے جو عمل سے ظاہر ہوں۔ ", by : "اشفاق احمد" },
    {id:"2155", category:"اشفاق احمد", body : "جسمانی امراض پر ہیز سے جاتے ہیں اور روحانی امراض پر ہیز گاری سے جاتے ہیں۔ ", by : "اشفاق احمد" },
    {id:"2156", category:"اشفاق احمد", body : "ایک دن ہم سب یہ سوچ کر ایک دوسرے سے جدا ہو جائیں گے کہ جب وہ یاد نہیں کرتا تو میں اسے کیوں یاد کروں؟ ", by : "اشفاق احمد" },
    {id:"2157", category:"اشفاق احمد", body : "جب سورج غروب ہونے لگتا ہے تو چھوٹے آدمیوں کے سائے بھی بڑے ہو جاتے ہیں۔ ", by : "اشفاق احمد" },
    {id:"2158", category:"اشفاق احمد", body : "کھانے میں کوئی زہر گھول دے تو اس کا علاج ہے مگر کان میں کوئی زہر گھول دے تو اس کا علاج نہیں۔ ", by : "اشفاق احمد" },
    {id:"2159", category:"اشفاق احمد", body : "زندگی آخر رلا ہی دیتی ہے پھر چاہے ہم اپنے ماں باپ کے کتنے ہی لاڈلے کیوں نہ ہوں۔ ", by : "اشفاق احمد" },
    {id:"2160", category:"بانو قدسیہ", body : "لوگوں سے ڈرنا چھوڑ دو۔۔!! کیونکہ عزت ا اللہ دیتا ہے لوگ نہیں۔۔!! ", by : "بانو قدسیہ" },
    {id:"2161", category:"بانو قدسیہ", body : "مرد اگر روکتا ہے ٹوکتا ہے تو اس کا یہ مطلب نہیں کہ وہ شک کرتا ہے یا اس پر اعتبار نہیں کرتا بلکہ وہ اسے اپنی عزت سمجھتا ہے اور اس کا خیال خود سے بھی زیادہ رکھتا ہے ایسی عورت دنیا کی سب سے خوش نصیب عورت ہے ۔", by : "بانو قدسیہ" },
    {id:"2162", category:"بانو قدسیہ", body : "عادت محبت سے زیادہ جان لیوا ہوتی ہے میں نے کئی محبتوں کو فناء ہوتے دیکھا ہے مگر عادت محبت سے بھی بڑھ کر ہوتی ہے۔ محبت، محبت نہیں ہوتی اصل محبت عادت کا نام ہے۔ ", by : "بانو قدسیہ" },
    {id:"2163", category:"بانو قدسیہ", body : "عورت محبت کرے اور اسے چھوڑنے کا سوچے۔۔!!! یہ ناممکنات میں سب سے اعلی درجہ کی بات ہے ۔", by : "بانو قدسیہ" },
    {id:"2164", category:"بانو قدسیہ", body : "ہر انسان کے اندر دو بھیڑیے ہوتے ہیں ایک اچھائی کا دوسرا برائی کا غالب وہی جسے ہم کھلاتے پلاتے ہیں رہتے ہےں۔ ", by : "بانو قدسیہ" },
    {id:"2165", category:"بانو قدسیہ", body : "لوگ اندھیرے کے ڈر سے آپ کا ہاتھ ضرور پکڑےںگے۔ مگر پھر روشنی دیکھتے ہی چھوڑ دیں گے۔ ", by : "بانو قدسیہ" },
    {id:"2166", category:"بانو قدسیہ", body : "رشتے احساس سے بنتے ہیں رنگ، نسل، اور چال دیکھ کر تو جانورخریدے جاتے ہیں۔ ", by : "بانو قدسیہ" },
    {id:"2167", category:"بانو قدسیہ", body : "پاکیزہ ترین محبت یہ ہے کہ تم کسی شخص سے محبت کرو یہ جانتے ہوئے کہ وہ تمہارا نہیں ہو سکتا اور اسے خوش دیکھنے کی تمنا کرو۔ ", by : "بانو قدسیہ" },
    {id:"2168", category:"بانو قدسیہ", body : "احساس کمتری میں مبتلا انسان ناکارہ ہو جاتا ہے ۔", by : "بانو قدسیہ" },
    {id:"2169", category:"بانو قدسیہ", body : "جب اچانک دل اداس ہو جائے تو وہ روح مرمت کرنے کا لمحہ ہوتاہے سنا ہے توبہ کرنے سے رو حم مرمت ہو جاتی ہے ۔", by : "بانو قدسیہ" },
    {id:"2170", category:"بانو قدسیہ", body : "ہم ننگے سر گھومنے والی لڑکی کو شرمندگی کا باعث سمجھتے ہیں پر اس بیٹی کو دیکھنے والے لڑکے کو کچھ نہیں کہتے۔ ", by : "بانو قدسیہ" },
    {id:"2171", category:"بانو قدسیہ", body : "جب کوئی عورت آپ کو نظر انداز کر رہی ہو تو اس کا مطلب یہ نہیں کہ وہ آپ سے نفرت کرتی ہے۔ اس کا مطلب ہے اس کا دل دکھا ہے۔ ", by : "بانو قدسیہ" },
    {id:"2172", category:"بانو قدسیہ", body : "جب تک انسان دوسرے کی جگہ پر کھڑا نہ ہوا تب تک اسے پوری بات سمجھ نہیں آتی۔۔ !! ", by : "بانو قدسیہ" },
    {id:"2173", category:"بانو قدسیہ", body : "ایک زخم بھرنے کے لئے ضروری ہے اس کو کُریدا نہ جائے۔۔۔!! ", by : "بانو قدسیہ" },
    {id:"2174", category:"بانو قدسیہ", body : "افسوس! یہ وہ معاشرہ ہے جہاں لوگ گند اٹھانے والوں کو گندا سمجھتے ہیں ۔", by : "بانو قدسیہ" },
    {id:"2175", category:"بانو قدسیہ", body : "انسان غم کی گرفت سے کبھی نہیں نکل سکتا خوشی محض تھکان اتارنے کا وقفہ ہے۔ ", by : "بانو قدسیہ" },
    {id:"2176", category:"بانو قدسیہ", body : "چیخ و پکار انسان کے وقار میں کمی کا باعث بنتی ہے، لوگوں کو اپنی خاموشی سے خوفزدہ کرنا سیکھو۔ ", by : "بانو قدسیہ" },
    {id:"2177", category:"بانو قدسیہ", body : "کبھی بھی شادی کے کھانے کی برائی نہ کرو بیٹی کے باپ کو پوری عمر لگی ہوتی ہے صرف اس ایک وقت کے کھانے کے لئے۔ ", by : "بانو قدسیہ" },
    {id:"2178", category:"بانو قدسیہ", body : "اس دنیا میں سکون سے جینے کی ایک ہی تدبیر ہے کہ ہر انسان کے پاس ایک وسیع و عریض قبرستان ہو جہاں وہ دوسروں کی غلطیوں اور خامیوں کو دفنا آیا کرے ۔ ", by : "بانو قدسیہ" },
    {id:"2179", category:"بانو قدسیہ", body : "ہمیشہ برائی سے نفرت کرنا برائی کرنے والے سے نفرت مت کرنا ورنہ آپ میں وہ برائی پیدا ہو جائے گی اور آپ پر توجہ کا دروازہ بند ہو جائے گا ۔", by : "بانو قدسیہ" },
    {id:"2180", category:"بانو قدسیہ", body : "اس مرد کی مخلصی کی گواہی میں خود دے سکتی ہوں جس کا دل ہر بار دکھا ہو اور غلطی نہ ہونے پر بھی وہ اپنی عورت سے معافی مانگ لے۔ ایسا مرد لاکھوں میں ایک ہوتا ہے جو رشتہ بھی ختم نہ کرے اور اس عورت سے بد نصیب کوئی نہےں جو ایسے مرد کو کھو دے۔ ", by : "بانو قدسیہ" },
    {id:"2181", category:"شیخ سعدی", body : "اگر توکل سیکھنا ہو تو پرندوں سے سیکھو کہ وہ جب شام میں اپنے گھروں کو جاتے ہیں۔ ان کی چونچ میں کل کے لئے ایک دانہ بھی نہیں ہوتا۔ ", by : "شیخ سعدی" },
    {id:"2182", category:"شیخ سعدی", body : "آدمی کے جھوٹا ہونے کے لئے اتنا ہی کافی ہے وہ ہر سنی سنائی بات پر یقین کر لے۔ ", by : "شیخ سعدی" },
    {id:"2183", category:"شیخ سعدی", body : "تو نیک ہو اور لوگ تجھے برا کہیں، اس سے اچھا ہے تو برا ہو اور لوگ تمہیں اچھا کہیں۔", by : "شیخ سعدی" },
    {id:"2184", category:"شیخ سعدی", body : "زندگی کی درازی کا راز صبرمیں پوشیدہ ہے۔ ", by : "شیخ سعدی" },
    {id:"2185", category:"شیخ سعدی", body : "میرے پاس وقت نہیں ہے ان لوگوں سے نفرت کرنے کا جو مجھ سے نفرت کرتے ہیں کیونکہ میں مصروف رہتا ہوں ان لوگوں میں جو مجھ سے محبت کرتے ہیں۔ ", by : "شیخ سعدی" },
    {id:"2186", category:"شیخ سعدی", body : "نادان ڈھول کی مانند ہوتا ہے بلند آواز ہوتا ہے اندر سے خالی ہوتا ہے", by : "شیخ سعدی" },
    {id:"2187", category:"شیخ سعدی", body : "کبھی بھی بیوقوف کو اپنا رہنما نہ مانو خواہ دنیا میں عقل مند نہ رہیں کیونکہ خوبیاں کبھی خامیاں نہیں بن سکتیں اور نہ اچھی چیزکی عدم موجودگی میں کوئی بری چیز بہتر اور اچھی ہو سکتی ہے ۔", by : "شیخ سعدی" },
    {id:"2188", category:"شیخ سعدی", body : "آدمی کے علم کا اندازہ تو ایک دن ہو ہی جاتا ہے لیکننفس کی خباثت کا پتا برسوں بعد بھی نہیں لگتا۔ ", by : "شیخ سعدی" },
    {id:"2189", category:"شیخ سعدی", body : "جو تجھ سے وابستہ نہیں تواس سے وابستہ نہ ہو۔ ", by : "شیخ سعدی" },
    {id:"2190", category:"شیخ سعدی", body : "جو انسان دوسروں کے غم سے بے نیاز ہے۔ انسان کہلانے کا مستحق نہیں۔ ", by : "شیخ سعدی" },
    {id:"2191", category:"شیخ سعدی", body : "کسی کو اتنا پیار دو کہ گنجائش نہ چھوڑو، اگر وہ پھر کبھی تمہارا نہ بن سکے تو اسے چھوڑ دو کیونکہ وہ محبت کا طلبگار ہی نہیں بلکہ وہ ضرورت کا پجاری ہے۔ ", by : "شیخ سعدی" },
    {id:"2192", category:"شیخ سعدی", body : "میں پوری زندگی دو بندوں کو تلاش کرنے پر بھی تلاش نہ کر سکا ایک وہ جس نے اللہ کے نام پر دیا ہو اورغریب ہو گیا ہو اور دوسرا وہ جس نے ظلم کیا ہو اور اللہ کیا پکڑ سے بچ گیا ہو۔ ", by : "شیخ سعدی" },
    {id:"2193", category:"شیخ سعدی", body : "موتی اگر کیچڑ میں بھی گر جائے تو بھی موتی ہے گرد اگر آسمان پر بھی چڑھ جائے تو بھی بے قیمت ہے۔ ", by : "شیخ سعدی" },
    {id:"2194", category:"شیخ سعدی", body : "اپنے حصے کا کام کیے بغیر دعا پر بھروسہ کرنا حماقت ہے اوراپنی محنت پر بھروسہ کر کے دعا سے گریز کرنا تکبر ہے۔ ", by : "شیخ سعدی" },
    {id:"2195", category:"شیخ سعدی", body : "عقلند اور بیوقوفوں میں کچھ عیب ضرور ہوتا ہے مگر عقلمند اپنے عیب خود دیکھتا ہے اور بیوقوفوں عیب دنیا دیکھتی ہے۔ ", by : "شیخ سعدی" },
    {id:"2196", category:"شیخ سعدی", body : "دشمن سے ہمیشہ بچو، اور دوست سے اس وقت جب وہ تمہاری تعریف کرنے لگے۔ ", by : "شیخ سعدی" },
    {id:"2197", category:"شیخ سعدی", body : "اگر چڑیوں میں اتحاد ہو جائے وہ شیر کی کھال اتار سکتی ہیں۔ ", by : "شیخ سعدی" },
    {id:"2198", category:"شیخ سعدی", body : "اللہ کی نعمتیں کھا کھا کر دانت ٹوٹ گئے ہیں مگرزبان ہے کہ نا شکری سے باز نہیں آتی۔ ", by : "شیخ سعدی" },
    {id:"2199", category:"شیخ سعدی", body : "انسان کو جتنا لگاﺅرزق سے ہے اتنا رزق دینے والے سے ہوتا تو اس کا مقام فرشتوں سے بڑھ کر ہوتا۔ ", by : "شیخ سعدی" },
    {id:"2200", category:"شیخ سعدی", body : "آپ کے اخلاق کی قدر بھی لوگ اس وقت کرتے ہیں جب آپ کے پاس دولت اور طاقت ہو۔ غریب کتنا ہی خوش اخلاق کیوں نہ ہو لوگ اس کے اخلاق کو اس کی مجبوری سمجھتے ہیں۔ ", by : "شیخ سعدی" },
    {id:"2201", category:"شیخ سعدی", body : "اس سے تو خاموشی بہتر ہے کہ کسی کو دل کی بات کہہ کر پھر سے کہا جائے کہ کسی سے نہ کہنا۔۔!! ", by : "شیخ سعدی" },
    {id:"2202", category:"بل گیٹس", body : "صرف ایک شخص ہی تمہےں کامیاب کر سکتا ہے اور وہ ہو تم خودہو۔ ", by : "بل گیٹس" },
    {id:"2203", category:"بل گیٹس", body : "کچھ بڑا حاصل کرنے کے لئے کبھی کبھار آپکو بڑے خطرات مول لینا پڑتے ہیں۔ ", by : "بل گیٹس" },
    {id:"2204", category:"بل گیٹس", body : "اگر تم کسی چیز کو اچھا نہیں کر سکتے توکم از کم اتنا تو کرو کہ وہ دیکھنے میںاچھی لگے۔", by : "بل گیٹس" },
    {id:"2205", category:"بل گیٹس", body : "آپ کا سب سے بڑا سیکھنے کا ذریہ اپنا سب سے بڑا ناخوش گاہک ہے۔ ", by : "بل گیٹس" },
    {id:"2206", category:"بل گیٹس", body : "غلطیاں اس بات کا ثبوت ہیں کہ تم کوشش کر رہے ہو۔ ", by : "بل گیٹس" },
    {id:"2207", category:"بل گیٹس", body : "صبر ایک اہم جزو ہے کامیابی کے لئے۔ ", by : "بل گیٹس" },
    {id:"2208", category:"بل گیٹس", body : "مت کرو اپنا موازنہ اس دنیا میں کسی سے اگر آپ کرتے ہیں تو آپ اپنی بے عزتی کر رہے ہو ۔ ", by : "بل گیٹس" },
    {id:"2209", category:"بل گیٹس", body : "اگر آپ غریب پیدا ہوئے ہیں تو اس میں آپ کا کوئی قصور نہیں اگر آپ غربت کے عالم میں ہی مر گئے تو قصور وار صرف اور صرف آپ ہیں ۔", by : "بل گیٹس" },
    {id:"2210", category:"بل گیٹس", body : "ان لوگوں کیلئے کامیاب بنو جو تمیں ناکام دیکھنا چاہتے ہیں۔", by : "بل گیٹس" },
    {id:"2211", category:"جلال الدین رومی", body : "اگر میرا علم مجھے انسان سے محبت کرنا نہیں سکھاتا ایک جاہل مجھ سے ہزار درجہ بہتر ہے ۔", by : "جلال الدین رومی" },
    {id:"2212", category:"جلال الدین رومی", body : "خاموشی سمندر ہے اور گفتگو نہر کی طرح ہے تجھے سمندر تلاش کر رہا ہے تو نہر کی تلاش نہ کر۔ ", by : "جلال الدین رومی" },
    {id:"2213", category:"جلال الدین رومی", body : "جاﺅ پہلے خود کو ڈھونڈو تا کہ تم مجھے بھی پاسکو۔", by : "جلال الدین رومی" },
    {id:"2214", category:"جلال الدین رومی", body : "عقل کو خواہش پر فضیلت حاصل ہے کیونکہ عقل زمانے کو تمہارے ہاتھوں میں دے دیتی ہے جبکہ خواہشےںتمھےں زمانے کا غلام بنا دیتی ہےں۔ ", by : "جلال الدین رومی" },
    {id:"2215", category:"جلال الدین رومی", body : "انسان اپنے اندر چھپی ہوئی نفسانی خواہش کی وجہ سے برے لوگوں سے مغلوب ہو جاتا ہے۔ ", by : "جلال الدین رومی" },
    {id:"2216", category:"جلال الدین رومی", body : "زخم وہ جگہ ہے جہاں سے روشنی آپ کے اندر داخل ہوتی ہے ۔", by : "جلال الدین رومی" },
    {id:"2217", category:"جلال الدین رومی", body : "قناعت سے کوئی شخص بھوکا نہیں مر جاتا۔اور حرص سے کوئی بادشاہ نہیں بن جاتا۔۔! ", by : "جلال الدین رومی" },
    {id:"2218", category:"جلال الدین رومی", body : "جب انسان کی آنکھوں سے آنسو بہتے ہیںتو اس پر اللہ کی رحمت برستی ہے۔۔! ", by : "جلال الدین رومی" },
    {id:"2219", category:"جلال الدین رومی", body : "سچائی کے بے شمار راستے ہیں مگر جو میں نے چنا وہ محبت ہے ۔", by : "جلال الدین رومی" },
    {id:"2220", category:"جلال الدین رومی", body : " صرف پیسہ ہی رزق نہیں بلکہ عقل ادب، چہرہ، اولاد اور علم بھی رزق ہیں۔ اور اس سے بڑی بات کہ بہترین دوست بھی رزق میں شامل ہے۔ ", by : "جلال الدین رومی" },
    {id:"2221", category:"جلال الدین رومی", body : "جب میں اپنے اللہ کے ساتھ ہوںتو ہر چیز عبادت کرتی دکھائی دیتی ہے ۔", by : "جلال الدین رومی" },
    {id:"2222", category:"جلال الدین رومی", body : "اگر تیرے پاس یار نہیں ہے تو طلب کیوں نہیں کرتے؟اور اگر یار تک پہنچ چکے ہو تو خوشی و شادمانی کیوں نہیں کرتے؟ ", by : "جلال الدین رومی" },
    {id:"2223", category:"جلال الدین رومی", body : "یادرکھیں مقدس اور پاک مقام میں داخل ہونے کا راستہ آپ کے اندر ہے۔", by : "جلال الدین رومی" },
    {id:"2224", category:"جلال الدین رومی", body : "اگر آپ نے عشق نہیں کیا ہے تو خود کو زندہ مت سمجھئے اور روز آخرت اس زندگی کو شمار نہیں کیا جائے گا۔ ", by : "جلال الدین رومی" },
    {id:"2225", category:"جلال الدین رومی", body : "اس دنیا میں کوئی خزانہ سانپ کے بغیر ،کوئی پھول کانٹے کے بغیر اور کوئی خوشی غم کے بغیر نہیں ہے ۔", by : "جلال الدین رومی" },
    {id:"2226", category:"جلال الدین رومی", body : "اپنی آواز کے بجائے اپنے دلائل کو بُلند کریں پھول بادل کے گرجنے سے نہیں برسنے سے اُگتے ہیں۔ ", by : "جلال الدین رومی" },
    {id:"2227", category:"جلال الدین رومی", body : "اگر تم عظمت کی بلندیوں کو چھونا چاہتے ہو تو اپنے دل میں انسانیت کے لئے نفرت کے بجائے محبت پیدا کرو۔ ", by : "جلال الدین رومی" },
    {id:"2228", category:"جلال الدین رومی", body : "جو درد محسوس کرتے ہو وہ پیغامات ہیں انہیں غور سے سنو ۔", by : "جلال الدین رومی" },
   
]

export default Data;












