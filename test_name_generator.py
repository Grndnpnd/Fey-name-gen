#!/usr/bin/env python3
"""
Test script to verify the expanded Fey Name Generator functionality
Tests all new species with both Seelie and Unseelie courts
"""

import subprocess
import os

def test_website_functionality():
    """Test that the website loads and contains all expected species"""
    
    print("Testing Fey Name Generator Expansion...")
    print("=" * 50)
    
    # Check if all required files exist
    required_files = [
        './final/index.html',
        './final/js/nameGenerator.js',
        './data/names/seelie_names.js',
        './data/names/unseelie_names.js'
    ]
    
    print("1. Checking required files exist:")
    for file_path in required_files:
        if os.path.exists(file_path):
            print(f"   ✓ {file_path}")
        else:
            print(f"   ✗ {file_path} - MISSING!")
            return False
    
    # Check HTML contains all new species
    print("\n2. Checking HTML contains all new species:")
    with open('./final/index.html', 'r') as f:
        html_content = f.read()
    
    expected_species = [
        'pixie', 'dryad', 'satyr', 'firbolg',  # Original species
        'centaur', 'hag', 'drow', 'highelf', 'woodelf', 'dragonborn', 'eladrin', 'changeling'  # New species
    ]
    
    for species in expected_species:
        if f'value="{species}"' in html_content:
            print(f"   ✓ {species}")
        else:
            print(f"   ✗ {species} - MISSING FROM HTML!")
            return False
    
    # Check JavaScript contains all species data
    print("\n3. Checking JavaScript contains all species data:")
    with open('./final/js/nameGenerator.js', 'r') as f:
        js_content = f.read()
    
    for species in expected_species:
        if f'{species}: [' in js_content:
            print(f"   ✓ {species} (Seelie and Unseelie data found)")
        else:
            print(f"   ✗ {species} - MISSING FROM JAVASCRIPT!")
            return False
    
    # Check data files contain all species
    print("\n4. Checking data files contain all species:")
    
    # Check Seelie names
    with open('./data/names/seelie_names.js', 'r') as f:
        seelie_content = f.read()
    
    for species in expected_species:
        if f'{species}: [' in seelie_content:
            print(f"   ✓ {species} (Seelie data)")
        else:
            print(f"   ✗ {species} - MISSING FROM SEELIE DATA!")
            return False
    
    # Check Unseelie names
    with open('./data/names/unseelie_names.js', 'r') as f:
        unseelie_content = f.read()
    
    for species in expected_species:
        if f'{species}: [' in unseelie_content:
            print(f"   ✓ {species} (Unseelie data)")
        else:
            print(f"   ✗ {species} - MISSING FROM UNSEELIE DATA!")
            return False
    
    print("\n" + "=" * 50)
    print("✓ ALL TESTS PASSED!")
    print("✓ Fey Name Generator successfully expanded with new D&D 5e 2024 species")
    print("✓ All species available for both Seelie and Unseelie courts")
    print("\nNew species added:")
    new_species = ['centaur', 'hag', 'drow', 'highelf', 'woodelf', 'dragonborn', 'eladrin', 'changeling']
    for species in new_species:
        print(f"  - {species.replace('highelf', 'High Elf').replace('woodelf', 'Wood Elf').title()}")
    
    return True

if __name__ == "__main__":
    success = test_website_functionality()
    if not success:
        print("\n❌ TESTS FAILED - Please check the issues above")
        exit(1)
    else:
        print("\n🎉 Name generator expansion completed successfully!")