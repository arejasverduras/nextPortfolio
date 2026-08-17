---
title: 'MyPower'
picture: '/images/projects/mypower-card.png'
description: 'Build your program, follow every set, and track your progress—without letting your phone get in the way of your workout.'
shortText: 'MyPower makes structured training easy to follow and rewarding to track, with reusable workouts, guided sessions, automatic timers, circuits, and progress data you can share with a coach or use for AI-powered feedback.'
link: 'mypower'
type: 'Full-stack'
tech: ['Next.js', 'React', 'TypeScript', 'Prisma', 'PostgreSQL', 'Supabase', 'Tailwind CSS', 'Cypress']
images: ['01-workout-detail-builder.png', '02-quick-add-exercise.png', '03-circuit-expanded.png', '04-workout-player-circuit.png', '05-exercise-detail-media.png', '06-mobile-player.png']
links: {}
themeColor: '#22c55e'
themeTextColor: '#ffffff'
themeBgColor: '#0c0e12'
---

## Overview

MyPower is a full-stack fitness app for building, sharing, and following calisthenics and strength programs. Instead of bringing a handwritten plan to the gym, users can open a workout, follow it set by set, and record what they actually did.

The long-term vision is a library where people can follow programs created by friends, coaches, athletes, or AI. Because useful feedback depends on accurate training data, logging needs to feel smooth, quick, and rewarding—not like administration between sets.

## The challenge

The greatest challenge is not fitting every possible training variable into a database. It is making the product reliable and effortless enough that people actually want to use it during a workout.

I experienced that tension while testing MyPower in training. When bugs interrupted the session, putting the phone away and continuing without the app was immediately easier. In this context, even small amounts of friction can break the habit completely. The player must therefore be fast, predictable, and unobtrusive while still capturing enough information to show progress and enable meaningful feedback from a personal trainer or AI.

Underneath that simple experience is a complex training model. The app needs to handle reps, timed holds, progressions, tempo, rest periods, circuits, and set results without asking the user to manage that complexity during the workout.

## My role

This is my personal project, so I own the product decisions, interface design, database model, API routes, state management, and implementation. I also test the app during my own training. That makes failures unusually tangible and gives me a direct feedback loop for deciding what to simplify next.

The repository shows work across the stack: Prisma models and migrations, Next.js app routes, authenticated API handlers, reusable UI components, workout/player state logic, Cypress smoke tests, and a Vercel-oriented build setup.

## The solution

I designed MyPower around two connected workflows: preparing a workout without repetitive setup and following it without having to think about the app. The workout detail page acts as the main builder, with quick exercise creation, reusable exercise data, circuit assignment, and inline editing. During training, the player turns that structure into a guided sequence of exercises, sets, and rest periods.

![Workout detail builder with exercise metadata controls](/images/projectImages/mypower/01-workout-detail-builder.png)
_The workout detail view combines browsing, editing, and workout composition instead of separating those actions into disconnected screens._

Automatic timers, circuit progression, large training-focused controls, and voice cues reduce the number of interactions required between sets. Logging captures the result of the workout, but the interface is designed to keep that task secondary to the training itself.

## Highlights

- **Guided training:** The player moves through exercises, circuits, sets, and rest periods so the athlete can focus on performing the workout.
- **Fast logging:** Training targets and results stay close to the active exercise, with optimistic updates and reusable controls keeping interactions responsive.
- **Programs worth sharing:** Workouts use reusable exercises but retain their own targets, progressions, tempo, and rest settings, making it possible to follow a program as its creator intended.
- **Useful feedback data:** Session logs create the foundation for progress insights and future feedback from coaches or AI.
- **Mobile-first interaction:** Large timers, compact layouts, voice cues, and collapsed advanced controls are designed for use during a real training session.

![Quick-add composer with target and circuit options](/images/projectImages/mypower/02-quick-add-exercise.png)
_The quick-add flow lets a user choose or create an exercise, set the target, add notes, and optionally assign it to a circuit before adding it to the workout._

## Technical approach

The core data model uses Prisma with PostgreSQL and separates reusable exercise knowledge from planned workouts and completed sessions. A canonical exercise can therefore appear in many programs, while each workout retains its own progression, target, tempo, and rest settings. Session records capture what happened without rewriting the original program.

This separation also supports cases such as adding “Planche” more than once with different progression steps or targets, without creating duplicate exercise definitions. Circuit members remain structurally grouped in the workout and are expanded into the correct round-by-round order when a session begins.

On the interface side, shared numeric and duration controls keep the same interaction model across workout defaults, quick-add fields, circuits, and the player. Optimistic updates make common edits feel immediate, while the session layer preserves progress as the user moves through the workout.

![Expanded circuit in the workout builder](/images/projectImages/mypower/03-circuit-expanded.png)
_Circuits display their own metadata and member exercises together, so users can understand the structure without entering a separate edit mode._

## Outcome

The main training loop is now present: create or choose exercises, organize them into a workout or circuit, configure targets and rest timing, start the player, follow the timers, and log results. The app also supports authenticated workout libraries, saving workouts, media-rich exercise pages, voice cues, and active session tracking.

My first real training test validated the idea but also exposed the current gap: once bugs interrupted the flow, continuing without the app was easier. That is now the standard I am designing against. The next milestone is not simply adding more features; it is making the existing loop dependable and satisfying enough that I—and then my friends—choose it over paper notes or memory for every workout.

![Circuit-aware workout player](/images/projectImages/mypower/04-workout-player-circuit.png)
_The player separates circuit controls from exercise targets so round timing can be changed without breaking exercise progression._

## What I learned

The biggest lesson has been that fitness software needs a careful boundary between reusable knowledge and personal execution. “Planche” can be a reusable exercise entity, but the workout needs to know which progression, target, tempo, and rest timing applies today.

I also learned that small interaction details have an outsized impact in training contexts. A modal that takes too long, a timer that needs another tap, or a bug that breaks concentration can be enough to abandon tracking. Making logging feel rewarding—not merely possible—is as important as the underlying data model.
