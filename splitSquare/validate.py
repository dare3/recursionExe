def validate(s):
    """Validate that a given square is valid."""
    # Base case: if s is a simple square (0 or 1)
    if isinstance(s, int):
        return s in {0, 1}
    
    # If s is a list, check that it has exactly four elements
    if isinstance(s, list) and len(s) == 4:
        # Recursively validate each element in the list
        return all(validate(sub) for sub in s)
    
    # If it's neither a valid simple square nor a valid split square
    return False

# Test cases
if __name__ == "__main__":
    import doctest
    if doctest.testmod().failed == 0:
        print("\n*** ALL TESTS PASS; THAT'S SUPER-VALID WORK!\n")
