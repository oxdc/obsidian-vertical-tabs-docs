---
title: "Vertical Tabs Beta Program"
---

> [!WARNING] Notice
> The Vertical Tabs Beta Program has not been announced yet. Please DO NOT subscribe at this time.

## Overview

The Vertical Tabs Beta Program provides early access to new features, exclusive Discord community access, and the opportunity to support ongoing development. By subscribing, you'll receive beta builds before public release and help shape the future of Vertical Tabs.

## How to Join

1. **Subscribe**: Visit my [Ko-fi page](https://ko-fi.com/oxdcq), navigate to the Membership tab, and join the "Vertical Tabs Beta Program".
2. **Check Email**: You'll receive an email with your access token. Remember to check your spam/junk folder. If you didn't receive the email or entered the wrong address, please contact me on [Ko-fi](https://ko-fi.com/oxdcq).
3. **Install BRAT**: Open Obsidian, go to Community Plugins, search for "BRAT" (Beta Reviewer's Auto-update Tool for Obsidian), and install it. [BRAT](https://tfthacker.com/BRAT) is developed and maintained by [@TfTHacker](https://github.com/TfTHacker).
4. **Install Beta Helper**: Use BRAT to install the "Vertical Tabs Beta Helper" plugin using this link: `https://github.com/oxdc/obsidian-vertical-tabs-beta-helper`. You can find a quick start video on [BRAT's website](https://tfthacker.com/BRAT#How+to+and+use+BRAT+by+community+educator+Ric+Raftis). You can access the source code of Beta Helper in [its repository](https://github.com/oxdc/obsidian-vertical-tabs-beta-helper).
5. **Configure**: Open Beta Helper settings, paste your access token, and click "Continue".
6. **Done**: You'll automatically receive beta updates.

## Frequently Asked Questions

### Pricing and Availability

**Q: Do I need to pay to access new features?**
A: No. All Vertical Tabs features remain free forever. Public releases typically occur 3-6 months after beta testing, though timing may vary due to development schedules and bug fixes.

**Q: How do I subscribe or unsubscribe?**
A: All subscriptions are managed through my [Ko-fi page](https://ko-fi.com/oxdcq). You can unsubscribe at any time and will continue receiving updates until your next billing cycle.

**Q: Can I continue using the beta versions after unsubscribing?**
A: Yes! An active subscription is only required to receive new beta versions. You can continue using any installed beta versions on your devices until the public release becomes available. If you want to use the received beta version on a new device, you'll need to manually copy or sync it to that device.

**Q: Is there a student discount?**
A: Currently, no student discount is available. However, all Vertical Tabs features remain completely free in the public version, which receives updates 3-6 months after beta testing.

### Beta Testing Process

**Q: How does beta testing work?**
A: After subscribing, you'll receive an email with a unique access token. Keep this token private and don't share it with others. The [Beta Helper](https://github.com/oxdc/obsidian-vertical-tabs-beta-helper) plugin automatically downloads and updates beta versions when available.

**Q: What is the Beta Helper plugin?**
A: The [Beta Helper](https://github.com/oxdc/obsidian-vertical-tabs-beta-helper) is a companion plugin that manages beta version downloads and updates. It's open source and can be installed manually or automatically through the [BRAT](https://github.com/TfTHacker/obsidian42-brat) plugin (by [@TfTHacker](https://github.com/TfTHacker)).

### Development and Open Source

**Q: Does this make Vertical Tabs closed source?**
A: No. Vertical Tabs remains fully open source. After beta testing, feedback collection, and bug fixes, all features are released publicly with source code available on [GitHub](https://github.com/oxdc/obsidian-vertical-tabs). The [Beta Helper](https://github.com/oxdc/obsidian-vertical-tabs-beta-helper) plugin is also open source.

**Q: I'm a plugin/theme developer. Can I test beta versions without subscribing?**
A: Yes. Please [open an issue](https://github.com/oxdc/obsidian-vertical-tabs/issues) with your request. I'll review it and provide a free access token for development purposes.

**Q: I have concerns about security and privacy.**
A: Security and privacy are top priorities. The [Beta Helper](https://github.com/oxdc/obsidian-vertical-tabs-beta-helper) plugin only communicates with secure servers to verify your access token and download updates. No personal data, vault contents, or device information is collected or transmitted. Your access token is stored locally in Obsidian's plugin settings and is only used for authentication. All communications use HTTPS encryption. For complete details, please review [[security|Security and Privacy Policy]].

### Usage and Licensing

**Q: Can I use Vertical Tabs Beta for my team or at work?**
A: Beta access is licensed per user. You can use it for any personal or work projects, but each team member needs their own subscription.

**Q: Can I use Vertical Tabs Beta on multiple devices?**
A: Yes. Use the same access token across all your devices, or simply sync your plugin settings.

**Q: Is there a device limit?**
A: No device limit exists. However, token sharing or malicious activities (such as server flooding) will result in token revocation.

### Security and Privacy

**Q: Will my access token expire?**
A: Tokens are tied to your email and require an active subscription. If you resubscribe, your token is automatically re-enabled. Compromised tokens will be revoked and cannot be renewed.

**Q: What data does the beta program collect?**
A: For privacy reasons, Vertical Tabs Beta and [Beta Helper](https://github.com/oxdc/obsidian-vertical-tabs-beta-helper) do not collect device information. Only your email and subscription status are tracked for access management. For complete details, please review [[security|Security and Privacy Policy]].

**Q: What security features are implemented in beta versions?**
A: Beta versions include enhanced security measures _not_ present in stable versions:
- **Reproducible Builds**: Ensures identical source code produces identical binaries, enabling independent verification. Once the source code is published, anyone can verify that previously received beta builds were generated from that exact code without backdoors or malicious modifications.
- **File Integrity and Digital Signatures**: SHA-256 hashes and Ed25519 cryptographic signatures verify files remain unmodified after signing and confirm builds originate from the official developer, preventing attacks that attempt to replace or tamper with code during distribution.
- **Extended Manifest**: Contains timestamps and security metadata for comprehensive verification and audit trails.

**Q: Why are these additional security measures necessary?**
A: These features are essential because beta builds are distributed through private channels outside Obsidian's official plugin store, which provides automatic security review. These measures compensate for the lack of centralized security validation by enabling users to independently verify that beta builds are authentic, unmodified, and originate from the legitimate developer.

**Q: I received a security warning about modified files. What should I do?**
A: If you have modified the plugin's code or CSS files, a security warning will appear in Settings. Here's what to do:
- **For CSS styling**: Use Obsidian's [CSS snippets](https://help.obsidian.md/snippets) instead. Go to Settings → Appearance → CSS snippets, create a new `.css` file in the snippets folder, and add your custom styles there. This approach is safer and won't trigger security warnings.
- **For code modifications**: It is strongly discouraged to modify the plugin code directly. Please report the issue or feature request through the [GitHub repository](https://github.com/oxdc/obsidian-vertical-tabs/issues/new/choose) instead. If you must proceed with modifications, you can disable the warning through the [Beta Helper](https://github.com/oxdc/obsidian-vertical-tabs-beta-helper) plugin settings, but this may expose your installation to security risks. **Note**: If you choose to ignore or disable this warning, you are responsible for your own security and any potential consequences.

### Troubleshooting

**Q: My access token isn't working. What should I do?**
A: Check that your subscription is active and the token is correctly copied. If issues persist, contact me through [Ko-fi](https://ko-fi.com/oxdcq), Discord, or [GitHub](https://github.com/oxdc/obsidian-vertical-tabs/issues/new/choose).

**Q: I'm not receiving beta updates. What's wrong?**
A: Ensure the [Beta Helper](https://github.com/oxdc/obsidian-vertical-tabs-beta-helper) plugin is properly installed and configured with your access token. Check that your subscription is active.

**Q: Can I switch between beta and stable versions?**
A: Yes. To switch back to the stable version, disable the [Beta Helper](https://github.com/oxdc/obsidian-vertical-tabs-beta-helper) plugin in your Community Plugins settings and reinstall Vertical Tabs from the Community Plugins store. To return to beta, simply re-enable the [Beta Helper](https://github.com/oxdc/obsidian-vertical-tabs-beta-helper) plugin. Note that plugin settings are not preserved when switching between versions due to compatibility differences.

## Terms and Conditions

By subscribing to and using the Vertical Tabs Beta Program, you agree to the following terms:

### Access Token Responsibility
- **Confidentiality**: You are solely responsible for maintaining the confidentiality of your access token
- **No Sharing**: Access tokens are strictly personal and must not be shared, distributed, or disclosed to any third party
- **Security**: Treat your token as sensitive authentication information and keep it secure at all times
- **Revocation**: Tokens that are shared, leaked, compromised, or used for malicious activities will be revoked immediately **without prior notification or refund**

### Licensing and Usage
- **Per-User License**: Beta access is licensed per individual user, not per organization or team
- **Personal Use**: You may use your token across multiple personal devices but cannot share it with team members or colleagues
- **Work Usage**: While you may use beta versions for work projects, each team member requires their own individual subscription
- **Device Limits**: No device limits exist for personal use, but token abuse will result in immediate revocation

### User Responsibilities
- **Token Security**: You assume full responsibility for maintaining the security of your access token
- **Subscription Status**: You must maintain an active subscription to continue receiving beta updates
- **Code Modifications**: If you modify plugin code despite security warnings, you assume complete responsibility for any security consequences
- **Third-Party Software**: You are responsible for any third-party plugins, applications, or software on your system that may interact with, interfere with, or compromise the beta plugin or your personal data security
- **Compliance**: You must follow all guidelines and policies outlined in this documentation

### Service Terms
- **No Refunds**: Token revocations due to policy violations will not result in subscription refunds
- **No Prior Notice**: We reserve the right to revoke tokens without prior warning for policy violations
- **Service Changes**: We may modify these terms, features, or discontinue the beta program with reasonable advance notice
- **Support**: Support is provided on a best-effort basis through official channels only

By continuing to use the beta program, you acknowledge that you have read, understood, and agree to comply with these terms.

## Support

For additional help, please contact me on [Ko-fi](https://ko-fi.com/oxdcq), Discord, or [GitHub](https://github.com/oxdc/obsidian-vertical-tabs/issues/new/choose). For security and privacy information, see [[security|Security and Privacy Policy]].
