import React, { useRef, useState } from 'react'
import { StyleSheet, View, Button } from 'react-native'
import { Video } from 'expo-av'

interface VideoPlayerProps {
  videoUrl: string
}

const VideoPlayer = ({ videoUrl }: VideoPlayerProps): React.ReactElement => {
  const video = useRef(null)
  const [status, setStatus] = useState({})
  return (
    <>
      <Video
        ref={video}
        style={styles.extraMargin}
        source={{ uri: videoUrl }}
        useNativeControls
        resizeMode='contain'
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={styles.extraMargin}>
        <Button
          title={status.isPlaying === true ? 'Pause' : 'Play'}
          onPress={() => status.isPlaying === true ? video.current.pauseAsync() : video.current.playAsync()}
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
