---
title: "Security and Privacy Policy"
---
**Last Updated:** September 2025
**Effective Date:** August 2025

This Security and Privacy Policy explains how the Vertical Tabs plugin and its Beta Program collect, use, and protect your information. This policy covers three distinct components: 1) the stable Vertical Tabs plugin, 2) the beta version of Vertical Tabs, and 3) the Beta Helper plugin.

## Information We Collect

### Stable Version (No Data Collection)
The stable Vertical Tabs plugin operates entirely locally and does NOT collect or transmit any personal data. Specifically:
- **No Client-Side Telemetry**: The plugin does not include any client-side telemetry or usage tracking
- **No Personal Data**: Your vault contents, notes, or personal information are never accessed or transmitted
- **Local Installation ID**: A randomly generated identifier is created locally for data organization and caching purposes only. This ID never leaves your device
- **Version Check**: The plugin makes a single network request to GitHub to check for updates (fetches public manifest.json)

### Beta Program (Subscription Service)
For users participating in the beta program:
- **Email Address**: Used for subscription management and access token delivery
- **Access Token**: A unique identifier linked to your subscription for beta access
- **Subscription Status**: Whether your beta subscription is active or expired

### What We Do NOT Collect
- Your Obsidian vault contents or files
- Personal notes or documents
- Device information or hardware details
- Usage patterns or plugin interaction data
- IP addresses (beyond standard web server logs)
- Any other personal or sensitive information

## How We Use Your Information

### Stable Version
- **Local Data Organization**: Installation ID used solely for local data caching and organization
- **Update Checking**: Network request to GitHub to check for available updates
- **No Data Transmission**: No user data is ever transmitted from the stable version

### Beta Program Only
- **Access Control**: Verify your beta subscription status
- **Communication**: Send access tokens and important updates
- **Support**: Provide assistance when you contact us
- **Service Delivery**: Enable beta version downloads and updates

### Data Processing
All data processing is performed:
- With your explicit consent
- For legitimate business purposes
- In compliance with applicable privacy laws
- Using secure, industry-standard practices

## Data Storage and Security

### Storage Location
- **Stable Version**: All data stored locally on your device within Obsidian's data directory
- **Ko-fi Platform**: Subscription and payment information (managed by Ko-fi, beta program only)
- **Secure Servers**: Access token verification and beta distribution (beta program only)
- **Local Storage**: Access tokens stored locally in Obsidian's plugin settings (beta program only)

### Security Measures
- **Encryption**: All data transmission uses HTTPS/TLS encryption
- **Access Controls**: Limited access to personal information
- **Regular Audits**: Security practices are regularly reviewed
- **Secure Development**: Following secure coding practices

### Beta Build Security Features
Beta versions include security measures _not_ present in stable versions:
- **Reproducible Builds**: Deterministic compilation ensures identical source code produces identical binaries, enabling independent verification
- **File Integrity Verification**: SHA-256 hashes detect unauthorized modifications after signing
- **Digital Signatures**: Ed25519 signatures embedded in manifests prove authenticity from the official developer
- **Embedded Public Keys**: Public keys embedded in plugin code enable offline signature verification
- **Extended Manifest Format**: Includes build timestamps, file hashes, and signature data for security verification
- **Multi-Stage Verification**: Build pipeline verifies signatures and integrity at multiple points

**Why These Features Are Necessary**: Beta builds are distributed outside Obsidian's official plugin store, which provides automatic security review. These measures enable users to independently verify that beta builds are authentic and unmodified.

**Security Warnings for Modified Files**: If you modify the plugin's code or CSS files, a security warning will appear in the Settings tab. This warning system alerts you to potential security risks associated with unauthorized modifications:
- **For CSS modifications**: Use Obsidian's [CSS snippets](https://help.obsidian.md/snippets) feature instead (Settings → Appearance → CSS snippets), which is safer and won't trigger security warnings.
- **For code modifications**: Direct code modifications are strongly discouraged. Please report issues or feature requests through our [GitHub repository](https://github.com/oxdc/obsidian-vertical-tabs/issues/new/choose). If you proceed with modifications despite warnings, you can disable the security alert through the [Beta Helper](https://github.com/oxdc/obsidian-vertical-tabs-beta-helper) plugin settings, but this may expose your installation to security risks, and you assume responsibility for any potential consequences.

### Data Retention
- **Active Subscriptions**: Data retained while subscription is active
- **Inactive Subscriptions**: Data deleted within 90 days of cancellation
- **Access Tokens**: Revoked immediately upon subscription cancellation

## Third-Party Services

### Ko-fi
- **Purpose**: Subscription and payment processing
- **Data Shared**: Email address and subscription details
- **Privacy**: Governed by [Ko-fi's Privacy Policy](https://more.ko-fi.com/privacy)

### GitHub
- **Purpose**: Source code hosting, version checking, and beta distribution
- **Data Shared**: None (public repository access only)
- **Network Usage**:
  - **Stable Version**: Checks for updates by fetching public manifest.json
  - **Beta Version**: No direct GitHub access (managed through Beta Helper)
  - **Beta Helper Plugin**: Downloads beta releases from secure distribution servers
- **Privacy**: Governed by [GitHub's Privacy Policy](https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement)

### BRAT Plugin
- **Purpose**: Beta plugin installation and management
- **Data Shared**: None (local plugin management only)
- **Privacy**: Governed by [BRAT's Privacy Policy](https://tfthacker.com/BRAT)

## Your Rights and Choices

### Access and Control
- **View Data**: Contact us to review your stored information
- **Update Information**: Modify your email address through Ko-fi
- **Delete Data**: Cancel subscription to remove your data
- **Opt Out**: Unsubscribe from beta program at any time

### Data Portability
- **Export**: Request a copy of your personal data
- **Transfer**: Data can be transferred to other services upon request

## Children's Privacy

The Vertical Tabs Beta Program is not intended for users under 13 years of age. We do not knowingly collect personal information from children under 13.

## International Data Transfers

Your information may be processed in countries other than your own. We ensure appropriate safeguards are in place for international data transfers.

## Changes to This Policy

We may update this policy periodically. Significant changes will be communicated through:
- Email notification to beta subscribers
- Updates to this document

## Data Breach Response

In the unlikely event of a data breach:
1. **Immediate Response**: Contain and assess the breach
2. **Notification**: Inform affected users within 72 hours
3. **Investigation**: Conduct thorough security review
4. **Remediation**: Implement necessary security improvements
5. **Transparency**: Provide clear communication about the incident

## Contact Information

For privacy-related questions or concerns:

- **Email**: Contact through [Email](mailto:support@oxdc.dev)
- **Ko-fi**: Contact through [Ko-fi](https://ko-fi.com/oxdcq)
- **GitHub**: [Open an issue](https://github.com/oxdc/obsidian-vertical-tabs/issues)

## Legal Basis

This policy is based on:
- **Consent**: Your agreement to participate in the beta program
- **Legitimate Interest**: Providing and improving the beta service
- **Contract**: Fulfilling our obligations under the beta subscription

## Compliance

We are committed to complying with applicable privacy laws and regulations, including:
- General Data Protection Regulation (GDPR)
- California Consumer Privacy Act (CCPA)
- Other applicable local privacy laws

### Regulatory Compliance Assessment

**Age Verification and Online Safety Laws**: We have assessed the impact of the UK's Online Safety Act and similar age verification legislation worldwide on our services. As a productivity plugin for Obsidian that does not host user-generated content, facilitate social interactions, or provide access to content harmful to minors, age verification requirements do not directly apply to our plugin.

For beta program subscriptions, age verification is handled by our payment platform Ko-fi and their payment providers (PayPal and Stripe). [Ko-fi's Terms of Service require users to be 18 years or older to create an account](https://more.ko-fi.com/terms), and payment processors maintain their own age verification measures during transactions. This verification responsibility lies with the payment platform, not with our plugin service.

Users under 13 are not eligible for the beta program as stated in our Children's Privacy section. We continue to monitor regulatory developments globally and will implement appropriate measures if our service scope changes or if similar laws in other jurisdictions require compliance.

**Content Classification**: Our plugin provides workspace organization functionality and does not host, generate, or distribute content that would be classified as harmful under current legislation.

## Definitions

- **Personal Data**: Any information that identifies or can identify an individual
- **Processing**: Any operation performed on personal data
- **Data Controller**: The entity responsible for determining how personal data is processed
- **Data Processor**: The entity that processes personal data on behalf of the controller

## Obsidian Developer Policy Compliance

### Component-Specific Compliance

#### 1. Stable Version of Vertical Tabs
- **No Client-Side Telemetry**: Contains no client-side telemetry
- **Code Transparency**: Code is minified (not obfuscated) for production builds
- **Open Source**: Currently available under MIT License at [GitHub Repository](https://github.com/oxdc/obsidian-vertical-tabs)
- **Network Usage**: Limited to version checking from GitHub's public API
- **No Dynamic Ads**: No advertisements are inserted

#### 2. Beta Version of Vertical Tabs
- **No Client-Side Telemetry**: Contains no client-side telemetry
- **Code Transparency**: Code is minified (not obfuscated) for production builds
- **Future Open Source**: Will be published under MIT License after beta testing, feedback collection, and bug fixes (as detailed in the [[beta program|Beta Program documentation]])
- **Network Usage**: No direct network requests (managed through Beta Helper)
- **No Dynamic Ads**: No advertisements are inserted
- **Beta Build Security**: Implements reproducible builds, file integrity verification, and cryptographic signatures (not present in stable version)
- **Independent Verification**: Beta builds include embedded signatures and file hashes to verify authenticity outside the official plugin store

#### 3. Beta Helper Plugin
- **No Client-Side Telemetry**: Contains no client-side telemetry
- **Open Source**: Currently available at [GitHub Repository](https://github.com/oxdc/obsidian-vertical-tabs-beta-helper)
- **Network Usage**: Communicates with secure servers for access token verification and beta downloads
- **Code Transparency**: Full source code available for review
- **No Dynamic Ads**: No advertisements are inserted

## Code Review and Transparency

In accordance with Obsidian's policies and our commitment to transparency:

### Current Availability
- **Stable Version**: Full source code available at [GitHub Repository](https://github.com/oxdc/obsidian-vertical-tabs)
- **Beta Helper Plugin**: Full source code available at [GitHub Repository](https://github.com/oxdc/obsidian-vertical-tabs-beta-helper)
- **Beta Version**: Source code will be published after beta testing period concludes, as detailed in the [[beta program|Beta Program documentation]].

### Review and Licensing
- **Obsidian Team Review**: The Obsidian team can request to review all versions and code at any time
- **MIT License**: All components are licensed under the MIT License
- **Regular Updates**: Plugin updates are submitted through Obsidian's official review process
- **Code Transparency**: Production builds are minified for performance but not obfuscated

## Legal Disclaimers

### Limitation of Liability
This software is provided "as is" without warranty of any kind, express or implied. The developers are not liable for any damages arising from the use of this software, including but not limited to data loss, system conflicts, or performance issues. Users assume all risks associated with the installation and use of this plugin.

### Data Responsibility
While we implement security measures to protect your information, users are responsible for:
- Keeping access tokens secure and private
- Maintaining backups of their Obsidian vaults
- Understanding the inherent risks of beta software
- Verifying compatibility with other plugins and themes

### Service Changes
We reserve the right to modify, suspend, or discontinue any part of the service at any time with reasonable notice. Beta program subscribers will receive advance notice of significant changes affecting their access.

### Third-Party Services
This plugin integrates with third-party services (Ko-fi, GitHub, BRAT). We are not responsible for the practices, content, or availability of these external services. Users should review the privacy policies and terms of service of these third parties.

### Beta Software Notice
Beta versions are provided for testing purposes and may contain bugs, incomplete features, or other issues. Beta software should be used with caution in production environments.

---

**Note**: This policy covers three distinct components:
1. **Stable Vertical Tabs Plugin** - Open source, no data collection
2. **Beta Vertical Tabs Plugin** - Will be open source after testing period, no data collection  
3. **Beta Helper Plugin** - Open source, handles beta program access only

**Effective Date**: This policy is effective as of the date stated above and will remain in effect until replaced by a newer version. Continued use constitutes acceptance of any policy updates.
