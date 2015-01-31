//
//  KBLookAndFeel.m
//  Keybase
//
//  Created by Gabriel on 1/8/15.
//  Copyright (c) 2015 Gabriel Handford. All rights reserved.
//

#import "KBLookAndFeel.h"

#import "KBDefines.h"


@implementation KBLookAndFeel

+ (NSColor *)textColor {
  return GHNSColorFromRGB(0x333333);
}

+ (NSColor *)secondaryTextColor {
  return GHNSColorFromRGB(0x666666);
}

+ (NSColor *)selectColor {
  return [NSColor colorWithRed:0.0f green:0.49f blue:0.96f alpha:1.0f];
}

+ (NSColor *)disabledTextColor {
  return GHNSColorFromRGB(0x999999);
}

+ (NSColor *)greenColor {
  return [NSColor colorWithRed:9.0/255.0 green:179.0/255.0 blue:18.0/255.0 alpha:1.0f];
}

+ (NSColor *)okColor {
  return [self greenColor];
}

+ (NSColor *)warnColor {
  return [NSColor colorWithRed:1.0f green:0.58f blue:0.19f alpha:1.0f];
}

+ (NSColor *)errorColor {
  return [NSColor colorWithRed:1.0f green:0.22f blue:0.22f alpha:1.0f];
}

+ (NSFont *)textFont {
  return [NSFont systemFontOfSize:14];
}

+ (NSFont *)boldTextFont {
  return [NSFont boldSystemFontOfSize:14];
}

+ (NSFont *)buttonFont {
  return [NSFont systemFontOfSize:18];
}

@end
