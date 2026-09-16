---
title: 'Daily Recovery Coach'
picture: '/images/projects/drc-logo-crystal-v1.png'
shortText: 'A personal recovery system that turns symptoms, activity history and long-term goals into practical daily guidance for rebuilding capacity after brain injury.'
description: 'Daily Recovery Coach is a personal recovery system for people rebuilding capacity after a traumatic brain injury. Shaped by my own recovery experience, it maps progress across five recovery pathways, identifies what is holding each person back and turns those bottlenecks into practical missions, while using symptoms and recent activity to provide daily advice on when to push, stabilise or recover.'
link: 'daily-recovery-coach'
type: 'Full-stack'
tech: ['Next.js', 'React', 'TypeScript', 'Prisma', 'PostgreSQL', 'Supabase Auth', 'OpenAI API', 'Tailwind CSS']
images:
  - src: '01-recovery-areas.png'
    alt: 'Daily Recovery Coach My Healing page showing five recovery areas and phase four of Moving and Light'
    caption: 'Five recovery areas create a complete view of progress. Each area places the user within a phased pathway and shows what has already been rebuilt and what comes next.'
mobileImages:
  - src: '01-recovery-areas-mobile.png'
    alt: 'Mobile Daily Recovery Coach My Healing page showing the Social Connection recovery area at phase two'
    caption: 'On mobile, recovery areas remain easy to explore while the selected pathway keeps its current phase and next step in focus.'
links: {} # TODO: Add a public or access-request URL if appropriate. Source remains private.
startDate: '2025-01-01' # Approximate; confirm the project start date.
launchDate: '2026-09-15' # Current portfolio release of the working pre-release MVP.
themeColor: '#C6B39C'
themeTextColor: '#5A564F'
themeBgColor: '#F9F7F3'
---

## The Real-life challenge of TBI-recovery

Daily Recovery Coach helped turn an uncertain recovery process into a visible path forward.

After my brain injury, getting a clear picture of what I needed to do each day to recover proved surprisingly difficult. General guidelines and best practices existed, but applying them to daily structure, brain-training activities, rest, fatigue and symptoms was largely left to me. I had to determine what I could handle and how those decisions might affect my recovery over time. This uncertainty caused frustration and prolonged setbacks. Generic advice could not tell me whether to rest, repeat something familiar or carefully attempt the next challenge.

All that time, i felt i could use some daily guidance, feedback, assistence on what to do. Somebody that knew what symptoms meant, that could tweak the approach daily based on data and knowledge, not guessing. And then, someone who would know what the next step forward would be when things went well.

This is why I built Daily Recovery Coach: to provide daily structure, a long-term plan, a way out of setbacks and a clear, motivating path toward recovery.


## Building the coach I needed

I build Daily Recovery Coach around these principles:
- Useful feedback requires real recovery knowledge and sufficient personal data.
- Guidance should improve over time when historical data gets more richer and a user's recovery profile becomes clearer
- A clear end goal is needed to determine the next small step
- Goals and recovery paths should be highly personalized and adapted to the users life, aspirations and circumstances.
- Progress should remain balanced across different recovery areas, preventing large gaps or “sideways” recovery.
- It should be clear for the user what to focus on
- Every effort made by the user toward recovery should be rewarded
- The system should learn from personal insights and spontaneous experiments.

At some point, it all came together.
When the model 'placed' me into a 5-stage recovery plan for one of the healing tracks, based on a rich set of real recovery data, it pointed out exactly what was preventing my healing to go to the next level, and created simple missions for me to train those parts of my brain. After having done that for all 5 main aspects of recovery, I finally had a complete plan including concrete missions to move forward in all aspects. Then thinking when should I do those missions without overloading myself, I simply asked the 'Daily Advice' function 'What should I do today?' and it would include or not-include missions, based on my recent recovery data and current standings.

Daily Recovery Coach uses a combination of deterministic code, real recovery knowledge and LLM feedback that puts all the puzzle pieces together.
You cannot put all of the above in a system prompt, combine it with a bunch of symptom data, and hope to get a great daily advice or long term plan from the LLM.
The entire decision flow is split into multiple parts, starting with the 'Healed vision definition', the track placement of the user, and the mission creation, ultimately leading to the 'daily advice' created with the LLM. That means 80% of the decisions are already made before data is handed to the LLM and asked to give a response. You can see the LLM as the 'human' aspect of the coach who puts everything together, looks at how the person is doing now and the past days, then comes up with a new plan for the day.


## The challenge

Recovery did not behave like a normal productivity problem. The same activity could be manageable one day and costly the next. Duration alone did not explain why: sensory conditions, intensity, adaptations, recent effort, symptoms and the rest required afterwards all mattered. Early on, a difference of minutes or even seconds could separate useful training from prolonged symptoms.

Progress was also multidimensional. I could improve at quiet computer work or walking in nature while still being blocked by bright environments, music, crowds or social activity. A single recovery percentage could not represent abilities developing at different speeds. The interface also had to remain usable when concentration, energy and screen tolerance were limited, so I added multiple stimulus themes, responsive navigation, prefilling and shorter logging paths.

## My role

Daily Recovery Coach is an independent product rooted in my own recovery experience. I defined the product model, designed the interface and built the full-stack application, including authentication, relational data modelling, activity logging, progression logic, XP and SP systems, missions, responsive interaction and AI integration.

Being the first user gave me an unusually direct feedback loop. I used the application to plan daily load, recover from setbacks and structure graded exposure. That made subtle requirements—such as recovery time, partial attempts and low-stimulus interaction—first-class product concepts rather than secondary metadata.

It also creates an important limitation: a system shaped by one person's experience can overfit that experience. DRC is a personal recovery tool and working prototype, not a clinically validated treatment or a replacement for professional medical care.

## The solution

Five broader recovery scenarios are divided into phases and tracks, allowing progress to be represented independently across different abilities. Within each track, DRC identifies the current bottleneck and turns it into a concrete mission.

Instead of an abstract instruction such as “increase sensory exposure,” a mission might suggest progressing from a quiet nature walk to a shopping centre, introducing a soft soundscape during computer work, allowing more natural light or attempting a manageable social activity. This removed much of the guessing: I could see both the direction of recovery and the next realistic step.

<!-- TODO: Insert the strongest overview of the five recovery pathways and their phases. -->

## Coaching for the day I was actually having

The daily coach combines a short self-report with recent activity, symptoms, required recovery time, current goals, active missions and patterns from earlier logs. It turns that context into an itinerary with a rationale, warnings and encouragement. The result might support careful progression, stabilising at the current level or taking a deliberately lighter day after accumulated effort.

This became especially useful after setbacks. Rather than restarting blindly, I had a plan informed by what I had done, how I had responded and what I was trying to rebuild. The evidence supplied to the coach and its generated advice are both stored, so earlier decisions can be revisited and evaluated.

<!-- TODO: Insert a daily-advice screen with its recommendation, rationale and suggested mission visible. -->

## From bottlenecks to missions

The mission system connects long-term outcomes to actions that can be completed in the real world. Each mission can describe a target activity, duration or range, rest boundary, symptom threshold and required intensification. Completing a linked activity log evaluates those requirements automatically.

Progress is deliberately not binary. The evaluator distinguishes success, a useful training attempt, a warning and failure. That matters in recovery: an attempt can provide meaningful training even when it does not yet meet every requirement. Recognising partial progress made the feedback more honest and prevented a demanding target from turning useful effort into an apparent failure.

Missions, phases and XP made small wins visible. Completing an unfamiliar errand or tolerating a more demanding environment could feel insignificant from the outside, but within a long recovery those moments represented real movement.

<!-- TODO: Insert a mission card beside the activity-log result that evaluated it. -->

## Logging closes the feedback loop

Each activity log can record duration, symptoms, recovery time, environmental context, helpful adaptations and added intensity. One submission can update the user's activity history, learned load characteristics, streaks, XP, activity-plan progression, mission results and scenario progress.

The application gradually builds a personalised profile for recurring activities. Exponentially weighted averages capture typical duration and recovery time, while an interpretable load heuristic estimates the relative cost of the activity. These signals are not medical measurements; they are practical indicators that help the coach compare recent effort with the user's evolving baseline.

Logging produced a benefit I had not designed initially: a short moment of reflection. Recording what happened made it easier to notice what worked, what caused difficulty and which adaptations helped.

<!-- TODO: Insert the quick-log flow and its success/progression feedback. -->

## Technical approach

I built DRC with Next.js 15, React 19 and strict TypeScript. Next.js route handlers form the application layer, Prisma connects a PostgreSQL database, Supabase provides authentication and the OpenAI API supports structured coaching and plan generation.

The relational model separates shared activity definitions from each user's personal activity profile. Logs connect to symptoms, helpers, contexts, intensifications, skills, plans, goals, missions and scenario progress. Flexible JSON tracking specifications allow missions to express evolving recovery rules, while typed normalisation and deterministic evaluation keep completion decisions outside the language model.

A single activity can affect many systems. The logging workflow therefore coordinates related mutations, uses database transactions where appropriate and records progress events with uniqueness constraints to avoid awarding the same result twice. This central orchestration makes the full workflow visible, although it has also grown into one of the areas that most needs decomposition and automated regression coverage.

AI output is requested as structured JSON, parsed and sanitised before it reaches the interface. The system stores the source evidence alongside the result, making it possible to inspect whether advice followed the supplied history. This architecture keeps AI in the role of evidence-grounded synthesis rather than treating plausible language as a source of truth.

## Outcome

DRC became a tool I used during my recovery rather than only a software exercise. Its suggestions led me to change sensory conditions during computer work, enter more demanding environments and attempt activities I might otherwise have postponed. After overstimulation, it helped me decide when to reduce load and how to begin building up again.

The combination of guidance, history and visible progress made recovery feel less like an undefined waiting period and more like a process with direction and achievable wins.

Over time, I progressed from very short, carefully managed computer sessions back to sustained full-stack product development. DRC should not be presented as proof of medical efficacy, but it played a meaningful role in structuring that process and applying what I was learning about my own recovery.

## Current state

Daily Recovery Coach is a private working pre-release MVP deployed on Vercel. Authentication, activity logging, personalised activity memory, daily advice, goals, missions, scenario progression, activity plans, highlights and rhythm editors have working end-to-end code paths.

Before broader use, the application needs more automated testing, consistent resource-level authorisation across older API routes, consolidation of AI-response parsing and decomposition of several large workflows. Its recovery model and recommendations also need broader user research and clinical review. The current version is best understood as an ambitious personal production tool and evolving product prototype.

## What I learned

The most important lesson was that deeply personal software still benefits from explicit models and boundaries. Firsthand experience revealed signals that a generic activity tracker would miss, but deterministic rules, stored evidence and honest product limitations were necessary to keep AI-generated guidance inspectable.

I also learned that progress systems are not neutral. A binary pass-or-fail model would have misrepresented recovery and discouraged useful attempts. Designing “training” as its own outcome made the software more complex, but it made the product better reflect the human process it was built to support.

The next step is to test these assumptions beyond my own experience: simplify the densest screens, strengthen privacy and automated verification, and learn which parts of the model remain useful for other people and their clinicians.
