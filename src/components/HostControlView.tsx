/*
********************************************
 Copyright © 2021 Agora Lab, Inc., all rights reserved.
 AppBuilder and all associated components, source code, APIs, services, and documentation 
 (the “Materials”) are owned by Agora Lab, Inc. and its licensors. The Materials may not be 
 accessed, used, modified, or distributed for any purpose without a license from Agora Lab, Inc.  
 Use without a license or in violation of any license terms and conditions (including use for 
 any purpose competitive to Agora Lab, Inc.’s business) is strictly prohibited. For more 
 information visit https://appbuilder.agora.io. 
*********************************************
*/
import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
import SecondaryButton from '../atoms/SecondaryButton';
// import {useString} from '../utils/useString';
import useRemoteMute, {MUTE_REMOTE_TYPE} from '../utils/useRemoteMute';

export interface MuteAllAudioButtonProps {
  render?: (onPress: () => void) => JSX.Element;
}

export const MuteAllAudioButton = (props: MuteAllAudioButtonProps) => {
  const muteRemoteAudio = useRemoteMute();
  //commented for v1 release
  //const muteAllAudioButton = useString('muteAllAudioButton')();
  const muteAllAudioButton = 'Mute all audios';
  const onPress = () => muteRemoteAudio(MUTE_REMOTE_TYPE.audio);

  return props?.render ? (
    props.render(onPress)
  ) : (
    <SecondaryButton onPress={onPress} text={muteAllAudioButton} />
  );
};

export interface MuteAllVideoButtonProps {
  render?: (onPress: () => void) => JSX.Element;
}
export const MuteAllVideoButton = (props: MuteAllVideoButtonProps) => {
  const muteRemoteVideo = useRemoteMute();

  //commented for v1 release
  //const muteAllVideoButton = useString('muteAllVideoButton')();
  const muteAllVideoButton = 'Mute all videos';
  const onPress = () => muteRemoteVideo(MUTE_REMOTE_TYPE.video);

  return props?.render ? (
    props.render(onPress)
  ) : (
    <SecondaryButton onPress={onPress} text={muteAllVideoButton} />
  );
};

const HostControlView = () => {
  //commented for v1 release
  //const hostControlsLabel = useString('hostControlsLabel')();
  return (
    <>
      <h1>Login to access more Feature</h1>
    </>
  );
};

export default HostControlView;
