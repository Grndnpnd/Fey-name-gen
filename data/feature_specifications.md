# D&D 5e 2024 Feywild Website Feature Specifications

## Document Information
- **Creation Date**: September 16, 2025
- **Based on Research**: Verified data from ./research/ directory
- **Target Compliance**: D&D 5e 2024 rules

## Overall Website Specifications

### Design Requirements
Based on verified analysis from `./research/reference_site/design_analysis.md`:

- **Color Scheme**: 
  - Primary: `fey-purple` (#8B5CF6), `fey-green` (#10B981), `fey-gold` (#F59E0B)
  - Supporting: `fey-dark` (#1F2937), `fey-light` (#F3F4F6)
- **Visual Style**: Glass-morphism with backdrop blur effects
- **Layout**: Single-page application with section switching
- **Framework**: Tailwind CSS with custom styles
- **Responsive Design**: Mobile-first approach with adaptive layouts

### Technical Architecture
- **Structure**: Modular JavaScript with separate files for each feature
- **Files Required**:
  - `index.html` - Main application structure
  - `css/styles.css` - Custom styling beyond Tailwind
  - `js/nameGenerator.js` - Name generation functionality
  - `js/dialogueTranslator.js` - Dialogue transformation functionality
  - `js/feyEffects.js` - Effect table functionality
  - `js/main.js` - Application coordination and navigation

## Feature 1: Fey Name Generator

### Functional Requirements
- **Species Support**: Pixie, Dryad, Satyr, Firbolg (based on verified species research)
- **Court Selection**: Seelie (Summer) and Unseelie (Winter) courts
- **Name Structure**: First name + species-specific last name + optional court title
- **Data Source**: `./data/names/seelie_names.js` and `./data/names/unseelie_names.js`

### User Interface Specifications
- **Color Theme**: Gold-focused (#F59E0B) as per reference analysis
- **Controls**:
  - Radio buttons for court selection (Seelie/Unseelie)
  - Dropdown for species selection
  - Generate button with hover effects and scale transforms
- **Output**: Large, prominent display with gradient text effects
- **Layout**: Responsive grid layout adapting to screen size

### Technical Implementation Requirements
- Generate names by combining prefixes, suffixes, and species-specific elements
- Randomization algorithm for varied output
- Court-specific naming patterns based on research data
- Integration with main application navigation system

## Feature 2: Dialogue Translator

### Functional Requirements
- **Translation Styles**: Rhyming and Riddle transformations
- **Court Styles**: Seelie (light, positive) and Unseelie (dark, mysterious)
- **Input**: Multi-sentence text processing capability
- **Output**: Transformed text maintaining original meaning
- **Data Source**: `./data/dialogue/transformation_rules.js`

### User Interface Specifications
- **Color Theme**: Green-focused (#10B981) as per reference analysis
- **Controls**:
  - Radio buttons for translation style (Rhyming/Riddle)
  - Radio buttons for court style (Seelie/Unseelie)
  - Text area for input with placeholder text
  - Translation button with consistent styling
- **Output**: Results display area with appropriate formatting
- **Layout**: Consistent with overall application design patterns

### Technical Implementation Requirements
- Text parsing and sentence separation
- Pattern-based transformation algorithms
- Vocabulary replacement system
- Court-specific thematic elements based on verified research
- Error handling for empty or invalid input

## Feature 3: Fey Effect Table

### Functional Requirements
- **Effect Categories**: Beneficial, Neutral, Challenging, Archfey (based on verified research)
- **Effect Count**: 1-3 effects per roll
- **Total Effects**: Approximately 200 effects across all categories
- **Data Source**: `./data/effects/fey_effects.js`
- **Compliance**: All effects must be D&D 5e 2024 compliant

### User Interface Specifications
- **Color Theme**: Purple-focused (#8B5CF6) as per reference analysis
- **Controls**:
  - Dropdown for effect type selection (All, Beneficial, Neutral, Challenging, Archfey)
  - Number selector for effect count (1-3)
  - Roll button with consistent hover effects
- **Output**: Results display with clear effect descriptions
- **Layout**: Maintains design consistency with other features

### Technical Implementation Requirements
- Random selection algorithm with category filtering
- Multiple effect generation without duplication
- Clear effect categorization and labeling
- Integration with verified effect data structure

## Navigation and User Experience

### Navigation Requirements
- **Pattern**: Single-page application with JavaScript-based section switching
- **Style**: Sticky navigation with backdrop blur effect
- **Buttons**: Three main sections with color-coded themes
- **Responsive**: Adaptive spacing and text sizing for mobile devices

### Accessibility Requirements
- **Semantic HTML**: Proper HTML5 element usage
- **Form Labels**: Clear labeling for all interactive elements
- **Focus States**: Keyboard navigation support with ring effects
- **Responsive Text**: Scalable typography for various screen sizes

### Visual Effects Requirements
- **Backdrop Blur**: Glass-morphism effect throughout interface
- **Gradient Backgrounds**: Multiple gradient combinations as per reference
- **Border Effects**: Colored borders with opacity
- **Shadow Effects**: Box shadows on interactive elements
- **Transform Effects**: Scale animations on hover for buttons
- **Transitions**: Smooth animations with 300ms duration

## Content Organization

### Header Section
- **Background**: Black with 30% opacity and backdrop blur
- **Border**: Gold border with 30% opacity
- **Title**: "Feywild Campaign Tools" with gradient text effect
- **Subtitle**: "Magical tools for your D&D 5E Feywild adventures"

### Main Content Structure
- **Section Switching**: JavaScript-controlled visibility
- **Color Coding**: Each feature has distinct color theme
- **Consistent Spacing**: Uniform padding and margins
- **Clear Hierarchy**: Logical information flow

### Footer Section
- **Style**: Consistent with header design
- **Content**: D&D 5E attribution and project information

## Data Integration Requirements

### Name Generation Data
- **File Structure**: Separate files for Seelie and Unseelie courts
- **Format**: JavaScript objects with arrays of name components
- **Categories**: First name components, species-specific surnames, court titles
- **Extensibility**: Structure allows for easy addition of new species or courts

### Effect Table Data
- **File Structure**: Single file with categorized effects
- **Format**: JavaScript object with arrays per category
- **Utility Functions**: Built-in random selection and filtering methods
- **Compliance**: All effects verified for D&D 5e 2024 compatibility

### Dialogue Transformation Data
- **File Structure**: Single file with transformation rules
- **Format**: JavaScript object with pattern-based transformations
- **Flexibility**: Supports multiple transformation styles and court themes
- **Extensibility**: Pattern system allows for additional transformation types

## Quality Assurance Requirements

### Verification Standards
- All content must be based on verified research data
- No placeholder or example content in final implementation
- All links and references must be functional
- Cross-browser compatibility testing required

### Performance Requirements
- Fast loading times with optimized asset delivery
- Responsive design testing across device types
- Smooth animations and transitions
- Efficient JavaScript execution

### Content Standards
- D&D 5e 2024 rule compliance for all game mechanics
- Thematic consistency with Feywild lore
- Professional presentation quality
- Clear, readable typography and layout

## Implementation Priority

1. **Phase 1**: Core HTML structure and CSS styling
2. **Phase 2**: Name generator implementation and testing
3. **Phase 3**: Dialogue translator implementation and testing
4. **Phase 4**: Fey effects table implementation and testing
5. **Phase 5**: Integration testing and final polish

This specification provides a complete blueprint for implementing the D&D 5e 2024 Feywild-themed website based on verified research data and established design patterns.