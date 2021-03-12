import React, { useRef, useState } from 'react'
import { StyleSheet, View, Button } from 'react-native'
import { Video } from 'expo-av'

const VideoPlayer = () => {
  const video = useRef(null)
  const [status, setStatus] = useState({})
  return (
    <>
      <Video
        ref={video}
        style={styles.extraMargin}
        source={{
          uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
        }}
        useNativeControls
        resizeMode='contain'
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={styles.extraMargin}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() => status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()}
        />
      </View>
    </>
  )
}

export default VideoPlayer

const styles = StyleSheet.create({
  extraMargin: {
    marginTop: 8,
    marginBottom: 8
  }
})
