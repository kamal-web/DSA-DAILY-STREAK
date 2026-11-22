Sliding Window generally applies when you are working with contiguous elements (subarrays or substrings).
2. Two common types of Sliding Window
Type 1
Fixed-size Sliding Window
Window size is predetermined and never changes.

Example: Maximum sum of a subarray of size 3.
input=[2,1,5,1,3,2]
Window moves one position at a time, always retaining 3 elements.

Type 2
Variable-size Sliding Window
Window size expands or shrinks depending on a condition.
Example: Longest substring without repeating characters.
input = "abcdef"
Window grows while valid; shrinks when a constraint is violated.

A. Fixed-size Sliding Window
When should you identify it?

Look for questions containing:
- Subarray of size K.
- Every consecutive K elements.
- Maximum/minimum sum of K consecutive elements.
- Average of every window of size K.
- First or maximum element in every window of size K.

The key is that the window size is explicitly provided.