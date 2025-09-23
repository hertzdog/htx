# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Hugo static site using the Blowfish theme (v2). The site is configured for Italian content with multilingual support.

### Key Architecture

- **Static Site Generator**: Hugo
- **Theme**: Blowfish (installed as git submodule at `themes/blowfish/`)
- **Configuration**: Split config files in `config/_default/` directory
- **Content**: Markdown files in `content/` directory
- **Assets**: Images and static assets in `assets/` and `static/` directories
- **Internationalization**: Italian as primary language (`it`), with English support

### Directory Structure

```
├── config/_default/          # Hugo configuration files
│   ├── hugo.toml            # Main Hugo config
│   ├── languages.*.toml     # Language-specific settings
│   ├── params.toml          # Theme parameters
│   └── menus.*.toml         # Navigation menus
├── content/                 # Markdown content files
├── assets/img/             # Site images (logos)
├── themes/blowfish/        # Theme submodule
└── public/                 # Generated site output
```

## Development Commands

### Building and Serving
Hugo v0.148.2+extended is installed and available in this environment.

```bash
# Serve locally with live reload (recommended for development)
hugo server -D

# Serve without drafts
hugo server

# Build for production
hugo

# Build with specific environment
hugo --environment production

# Build drafts and future posts
hugo -D -F

# Serve with specific port
hugo server --port 8080

# Serve and bind to all interfaces
hugo server --bind 0.0.0.0
```

### Content Management
```bash
# Create new post
hugo new content/posts/YYYY/MM/post-title.it.md

# Create new post for current month
hugo new content/posts/$(date +%Y)/$(date +%m)/post-title.it.md
```

### Theme Management
```bash
# Update theme submodule
git submodule update --remote themes/blowfish

# Initialize submodules (after fresh clone)
git submodule update --init --recursive
```

## Configuration Details

### Theme Configuration (`config/_default/params.toml`)
- Color scheme: "noir"
- Default appearance: light with auto-switching
- Homepage layout: "page" (not "profile" as originally documented)
- Search enabled via Fuse.js
- Code copy disabled
- Article features: reading time, word count, heading anchors
- Card view enabled on homepage

### Languages
- Primary: Italian (`it`)
- Secondary: English (`en`)
- Configuration split across `languages.*.toml` files

### Content Strategy
- Content primarily in Italian
- Uses Blowfish theme's extensive shortcode system
- Homepage content is business-focused (AI consultancy for Italian SMEs)
- Article-centric site structure with posts in `/content/posts/YYYY/MM/` format
- Rich use of Blowfish shortcodes: alerts, buttons, figures, timelines, leads

## Theme Features Available

The Blowfish theme provides extensive features:
- Multiple homepage layouts (currently using "profile")
- Dark/light mode switching
- Multi-author support
- Series and taxonomies
- Rich shortcodes (gallery, timeline, charts, etc.)
- Firebase integration support
- Analytics integration (Fathom, Google Analytics)
- Social sharing
- Search functionality

## Development Notes

- Hugo version requirement: 0.87.0+
- Theme uses Tailwind CSS 3.0
- All theme customization should be done via config files, not theme modification
- Content should follow Hugo's front matter conventions
- Images should be optimized and placed in `assets/img/` for processing or `static/` for direct serving

## Site Architecture Details

### Current Configuration Structure
The site uses a split Hugo configuration approach:
- Main config: `config/_default/hugo.toml` (actual site settings)
- Root `hugo.toml`: Default Hugo template (not used)
- Site URL: https://ht-x.com/
- Primary language: Italian (`it`)
- Theme: Blowfish v2.88.1

### Content Organization
- Homepage: `content/_index.it.md` - AI consultancy landing page
- Blog posts: `content/posts/YYYY/MM/post-title.it.md`
- Current content focuses on AI, tech, and open-source tools
- Images: `static/images/posts/YYYY/MM/` for post assets
- Logo assets: `assets/img/` for site branding

### Git Submodule Handling

The theme is managed as a git submodule (Blowfish v2.88.1). When working with this repository:
1. Always initialize submodules after cloning
2. Update the theme submodule periodically for security and features
3. Commit submodule updates separately from content changes

```bash
# Check submodule status
git submodule status

# Update to latest theme version
git submodule update --remote themes/blowfish
```