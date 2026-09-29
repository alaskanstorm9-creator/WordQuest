# WordQuest Lexicon Attribution

WordQuest's development build loads the open-source Wordnik Wordlist as its primary English game lexicon.

- Project: Wordnik Wordlist
- Source: https://github.com/wordnik/wordlist
- License: MIT
- Upstream description: an open-source wordlist for game developers and others who need English words commonly used in word games.

WordQuest filters loaded entries to alphabetic words between 2 and 15 letters and normalizes them to uppercase for gameplay.

The local `data/words.txt` file is retained as a small fallback for offline/development failure cases.

## Content moderation

An open lexicon is not automatically a child-safe vocabulary. Before a public release aimed at children/families, WordQuest should add a separately maintained blocked-word/moderation layer or use a lexicon with explicit offensive/derogatory labeling. This is intentionally separate from whether a word is linguistically valid.
