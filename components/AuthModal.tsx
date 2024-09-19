import React from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';

interface AuthModalProps {
  isVisible: boolean;
  children: React.ReactNode;
  onClose?: () => void;
}

export default function AuthModal({ isVisible, children, onClose }: AuthModalProps) {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible} onDismiss={onClose}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Verification</Text>
        </View>
        {children}
      </View>
    </Modal>
  );
}

// TODO: Replace with tailwind
const styles = StyleSheet.create({
  modalContent: {
    height: '80%',
    width: '100%',
    backgroundColor: '#25292e',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: 'absolute',
    bottom: 0,
  },
  titleContainer: {
    height: '16%',
    backgroundColor: '#464C55',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontSize: 16,
  },
});
