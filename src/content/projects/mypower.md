---
title: 'MyPower'
picture: '/images/projects/mypower-card.png'
description: 'Social training platform for calisthenics and strength training. Users can create, follow and share workouts and complete training programs—similar to building and sharing playlists on Spotify. Athletes press play to follow workouts, use automatic timers, log their results, compare progress, and train together in synchronized group sessions'
shortText: 'MyPower makes structured training easy to follow and rewarding to track, with reusable workouts, guided sessions, automatic timers, circuits, and progress data you can share with a coach or use for AI-powered feedback.'
link: 'mypower'
type: 'Full-stack'
tech: ['Next.js', 'React', 'TypeScript', 'Prisma', 'PostgreSQL', 'Supabase', 'Tailwind CSS', 'Cypress']
images:
  - src: '01-workout-overview.png'
    alt: 'MyPower workout overview with a circuit and individual exercises'
    caption: 'A complete training plan remains easy to scan: workout context, circuit structure, timing, and individual exercises all stay connected.'
  - src: '02-circuit-expanded.png'
    alt: 'Expanded warm-up circuit containing three exercises'
    caption: 'Circuits keep their timing, order, and member exercises together while ordinary exercises continue naturally below them.'
  - src: '04-guided-workout-flow.png'
    alt: 'Three-step MyPower workout flow showing an exercise, result logging, and an automatic rest timer'
    caption: 'Follow the exercise, log the result, and rest while MyPower manages the rest-timer and next set or exercise.'
  - src: '07-hold-to-auto-rest.png'
    alt: 'Three-step mobile MyPower flow showing the get-ready countdown, timed hold, and automatically started set pause'
    caption: 'Voice cues guide the hold; completing it logs the result, advances the set, and starts the configured recovery timer automatically.'
  - src: '05-quick-add-exercise.png'
    alt: 'Creating a new exercise directly inside the MyPower workout builder'
    caption: 'Search the shared library or create a missing exercise instantly, configure its targets and notes, and add it without leaving the builder.'
  - src: '03-exercise-detail-media.png'
    alt: 'Expanded exercise with demonstration media and workout-specific controls'
    caption: 'Each exercise combines demonstration media with workout-specific targets, tempo, circuit assignment, progression, and coaching notes.'


links: {
    demoLink: 'https://mypower.vercel.app'
}
themeColor: '#22c55e'
themeTextColor: '#ffffff'
themeBgColor: '#0c0e12'
launchDate: '2026-08-16' # Approximate: first real workout test of the live app.
---

## Overview

MyPower started with a simple question: what if creating a workout felt like making a Spotify playlist?

I wanted to make it easier to help friends get started with calisthenics or strength training. Instead of hand-writing a program and then finding a YouTube video for every unfamiliar movement, I could select exercises from a shared database, arrange them into a workout, and send it. Each exercise could carry its own demonstration, execution cues, and progression information. A friend could save the workout, press play, and follow it like a playlist.

Following a program is only half of the idea. By logging each session, athletes can compare their results over time and eventually ask a coach or AI for feedback based on what they actually did. That only works if tracking feels smooth, quick, and rewarding enough to use between sets.

## The challenge

The app does not primarily compete with other workout software. It competes with a piece of paper.

My old system was difficult to beat because it was so compact. I wrote the complete prescription once:

> **4 × incline push-ups** · 15–25 reps · 2 seconds up, 2 seconds down · 2-minute set pause · 3 minutes before the next exercise · effort 8/10

Beside it, I added one short line after each workout:

> - **12 May:** 10, 9, 11, 8
> - **19 May:** 12, 11, 12, 10

That took seconds and made week-to-week comparison immediate. A digital replacement may offer guidance, timers, sharing, and richer progress data, but it still loses if starting or logging a set requires too many taps.

Earlier versions of MyPower did lose that comparison. Creating a workout was slow, especially when an exercise did not exist in the database or when a program contained circuits. During my first real training test, bugs interrupted the session and continuing without the app became easier. In a workout context, a small amount of friction is enough to abandon the tool completely.

Calisthenics adds another challenge: an exercise such as the planche has progressions that can change quickly as someone improves. A workout creator can prescribe a specific progression, but a reusable “Planche skill day” should also let each athlete choose the variation that matches the intended rep range, hold time, and intensity. The program needs to preserve its training goal without assuming that every person has the same level.

## My role

This is my personal project, so I own the product decisions, interface design, database model, API routes, state management, and implementation. I also test the app during my own training. That makes failures unusually tangible and gives me a direct feedback loop for deciding what to simplify next.

The repository shows work across the stack: Prisma models and migrations, Next.js app routes, authenticated API handlers, reusable UI components, workout/player state logic, Cypress smoke tests, and a Vercel-oriented build setup.

## The solution

I designed MyPower around three connected layers: a reusable exercise library, shareable workouts, and personal training sessions. Exercises hold demonstrations and general execution guidance. Workouts arrange those exercises like tracks in a playlist and add the intended sets, reps or hold times, tempo, rest, effort, and circuit structure. Sessions record what an individual athlete performed without changing the shared workout.

The latest builder focuses on removing setup friction. Quick-add lets a creator search for an exercise or create a lightweight entry without leaving the workout. Default set pauses and exercise breaks remove repeated input, while tap-based steppers make common metadata changes faster than opening a form and typing values. Circuit assignment is part of the same flow instead of a separate configuration task.

![MyPower workout overview with an expanded circuit and exercises](/images/projectImages/mypower/01-workout-overview.png)
_The workout overview brings the training goal, circuit structure, timing, and individual exercises together in one scannable plan._

When the workout starts, the player turns the plan into a guided sequence. Automatic timers, circuit progression, large controls, and voice cues reduce the need to operate the phone. Logging remains close to the active set so recording a result can approach the speed of adding four numbers to paper.

## Highlights

- **Playlist-like workout creation:** Select reusable exercises, arrange them into a workout or circuit, and share the finished program instead of explaining every movement separately.
- **Quick-add without database administration:** Add a new exercise from inside the builder and enrich its library entry later rather than interrupting the creative flow.
- **Fast defaults and adjustments:** Apply standard pauses and breaks, then adapt sets, targets, tempo, or effort with tap controls instead of repetitive typing.
- **Guided training:** The player handles exercise order, circuits, timers, and voice cues so the athlete can focus on the workout.
- **Personal progress on shared programs:** Session logs belong to the athlete, creating a history that can support comparison and future feedback from coaches or AI.

![Quick-add composer with target and circuit options](/images/projectImages/mypower/05-quick-add-exercise.png)
_The quick-add flow lets a user choose or create an exercise, set the target, add notes, and optionally assign it to a circuit before adding it to the workout._

## Technical approach

The core data model uses Prisma with PostgreSQL and separates reusable exercise knowledge, workout prescriptions, and completed sessions. A canonical exercise can appear in many programs, each workout can define how it should be performed, and each athlete can record a result without rewriting either source.

That distinction is especially important for progressions. “Planche” is reusable knowledge, while tuck planche, advanced tuck, or straddle planche may be the athlete’s execution choice for a particular session. I am still refining where that selection belongs so a workout creator can prescribe the required intensity while followers choose a suitable level without creating a new database entity for every variation.

Circuits introduce a similar boundary between the shared plan and its execution. Members remain grouped in the workout model, then expand into the correct round-by-round order when a session begins. The player can change circuit timing without accidentally turning shared circuit settings into unrelated per-exercise values.

On the interface side, shared numeric and duration controls keep the same interaction model across defaults, quick-add fields, circuits, and the player. Optimistic updates make common edits feel immediate. These are small technical choices, but together they determine whether the product can compete with writing a result down in a few seconds.

![Expanded circuit in the workout builder](/images/projectImages/mypower/02-circuit-expanded.png)
_Circuits display their own metadata and member exercises together, so users can understand the structure without entering a separate edit mode._

## Outcome

The main training loop is now present: create or choose exercises, organize them into a workout or circuit, configure the prescription, start the player, follow the timers, and log results. Quick-add, workout defaults, and tap-based metadata controls have made creating realistic programs substantially faster than in earlier versions.

My first real training test validated the idea but also exposed the current gap: once bugs interrupted the flow, continuing without the app was easier. That is now the standard I am designing against. The next milestone is not simply adding more features; it is making creation and tracking dependable and satisfying enough that I—and then my friends—choose MyPower over a compact paper log every time.

![Circuit-aware workout player](/images/projectImages/mypower/04-guided-workout-flow.png)
_The player separates circuit controls from exercise targets so round timing can be changed without breaking exercise progression._

## What I learned

The biggest lesson has been that a workout is both shareable instruction and personal execution. The exercise database should prevent every creator from having to explain an incline push-up again. The workout should preserve the creator’s training intent. The session should let each athlete choose an appropriate progression and own their results.

I also learned that more capability does not automatically make a better training tool. Paper has no automatic timers, demonstrations, sharing, or feedback, but it is instant and reliable. Every digital feature has to justify the interaction cost it introduces. Making logging rewarding—not merely possible—is as important as the underlying data model.
