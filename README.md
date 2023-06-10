## TextSimScore
# Text Similarity Analyzer

This repository contains an algorithm for comparing and measuring the similarity between strings. Given a set of strings representing email body texts, the algorithm calculates a list of similarity scores for each text in the set, indicating their resemblance to the rest of the texts.

## Assumption and Layout

- **Input:**
  - Set of strings
  - Length N
  - Each string represents an email body text

- **Output:**
  - List of floats
  - Length N
  - Floats between 0 and 1, representing the corresponding text's similarity to the rest of the texts in the set

## Outlay

1. Go over the Set of texts - one by one
2. Compare each text with each of the other texts
3. Create a **Matrix of resemblance** (symmetric)
4. Calculate the **strength** of each vector in the matrix
5. Return a list of **strengths**

## Implementation

1. **For** loop
2. To be determined:
    - **Levenshtein distance** rather than Cosine similarity
    - **Letters** rather than words
    - Ignore punctuation
3. Array of arrays
4. To be determined:
    - Average
    - Maximum
    - Weighted mean
