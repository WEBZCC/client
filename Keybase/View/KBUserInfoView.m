//
//  KBUserInfoView.m
//  Keybase
//
//  Created by Gabriel on 1/9/15.
//  Copyright (c) 2015 Gabriel Handford. All rights reserved.
//

#import "KBUserInfoView.h"

#import "KBUserInfoLabels.h"
#import "KBRPC.h"
#import "KBProofResult.h"
#import <MPMessagePack/MPMessagePack.h>
#import "KBWebView.h"

@interface KBUserInfoView ()
@property NSMutableArray /*KBItemsLabel*/*labels;
@end


@implementation KBUserInfoView

- (void)viewInit {
  [super viewInit];
  _labels = [NSMutableArray array];

  YOSelf yself = self;
  self.viewLayout = [YOLayout layoutWithLayoutBlock:^(id<YOLayout> layout, CGSize size) {
    CGFloat y = 0;

    for (KBUserInfoLabels *label in yself.labels) {
      y += [layout sizeToFitVerticalInFrame:CGRectMake(20, y, size.width - 40, 0) view:label].size.height + 8;
    }
    return CGSizeMake(size.width, y);
  }];
}

- (void)addLabels:(NSArray *)labels {
  for (NSView *label in labels) {
    [_labels addObject:label];
    [self addSubview:label];
  }
  [self setNeedsLayout];
}

- (void)clear {
  for (KBUserInfoLabels *label in _labels) [label removeFromSuperview];
  [_labels removeAllObjects];
  [self setNeedsLayout];
}

- (void)updateProofResult:(KBProofResult *)proofResult {
  for (KBUserInfoLabels *label in _labels) {
    if ([label findLabelForProofResult:proofResult]) {
      [label updateProofResult:proofResult];
    }
  }
}

- (void)addKey:(KBRFOKID *)key {
  KBUserInfoLabels *label = [[KBUserInfoLabels alloc] init];
  [label addKey:key targetBlock:^(id sender, KBProofResult *proofResult) {
    GHDebug(@"Selected: %@", proofResult);
  }];
  [self addLabels:@[label]];
}

- (void)addCryptocurrency:(KBRCryptocurrency *)cryptocurrency {
  KBUserInfoLabels *label = [[KBUserInfoLabels alloc] init];
  [label addCryptocurrency:cryptocurrency targetBlock:^(id sender, KBProofResult *proofResult) {
    GHDebug(@"Selected: %@", proofResult);
  }];
  [self addLabels:@[label]];
}

- (void)addIdentityProofs:(NSArray *)identityProofs targetBlock:(void (^)(KBProofLabel *proofLabel))targetBlock {
  MPOrderedDictionary *labels = [MPOrderedDictionary dictionary];
  for (KBRIdentifyRow *row in identityProofs) {
    if (row.proof.proofType == 2) [labels addObject:[KBProofResult proofResultForProof:row.proof result:nil] forKey:@(KBProveTypeTwitter)];
    else if (row.proof.proofType == 3) [labels addObject:[KBProofResult proofResultForProof:row.proof result:nil] forKey:@(KBProveTypeGithub)];
    else if (row.proof.proofType == 1000) [labels addObject:[KBProofResult proofResultForProof:row.proof result:nil] forKey:@(KBProveTypeHTTPS)];
    else if (row.proof.proofType == 1001) [labels addObject:[KBProofResult proofResultForProof:row.proof result:nil] forKey:@(KBProveTypeDNS)];
    else if (row.proof.proofType == 4) [labels addObject:[KBProofResult proofResultForProof:row.proof result:nil] forKey:@(KBProveTypeReddit)];
    else if (row.proof.proofType == 5) [labels addObject:[KBProofResult proofResultForProof:row.proof result:nil] forKey:@(KBProveTypeCoinbase)];
    else if (row.proof.proofType == 6) [labels addObject:[KBProofResult proofResultForProof:row.proof result:nil] forKey:@(KBProveTypeHackernews)];
  }
  //GHDebug(@"labels: %@", labels);
  for (id key in labels) {
    NSArray *proofResults = labels[key];
    KBUserInfoLabels *label = [[KBUserInfoLabels alloc] init];
    [label addProofResults:proofResults proveType:[key integerValue] targetBlock:targetBlock];
    [self addLabels:@[label]];
  }

  [self setNeedsLayout];
}

@end
